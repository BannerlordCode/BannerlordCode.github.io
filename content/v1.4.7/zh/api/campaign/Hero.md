---
title: "Hero"
description: "战役层每个角色的活实例：把 CharacterObject 模板包装成有血量、装备、技能、阵营与生死状态的人。"
---
# Hero

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class Hero`
**基类：** `MBObjectBase`（实现 `ITrackableCampaignObject`、`ITrackableBase`、`IRandomOwner`）
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Hero.cs`（声明见第 27 行）

## 概述
Hero 是 campaign 层"人"的运行时对象：`CharacterObject` 是纸面模板（等级、文化、体型，永不改变），Hero 是这张卡片在战役里的活实例——血量、三套装备、技能特质、阵营归属、外交关系、生死状态全挂在这里。它注册在 `Campaign.Current.CampaignObjectManager` 下，向上归属 `Clan`，向下关联 `MobileParty`（所在部队）与 `Settlement`（所在地），是任务、对话、百科、外交系统共同操作的中心句柄。

## 心智模型
把 Hero 想成"角色卡片 + 状态机"：模板数据来自 `CharacterObject`，活数据（`HeroState`、血量、装备、关系）由战役事件流驱动。`ChangeState` 是唯一的状态入口，会同步通知 `Clan` 并广播 `CampaignEventDispatcher`；`Clan` 通过 `OnLordAdded`/`OnLordRemoved` 维护自己的成员缓存。Hero 不负责：寻路、战斗结算、部队编成（在 `MobileParty`/`CharacterObject` 里），也不负责领地经济（在 `Settlement` 里）。英雄死亡后 `OnDeath` 清空技能、装备、特质，但对象仍留在管理器中，`DeadOrDisabledHeroes` 依然能查到它——"死亡"是状态而非销毁。

## 怎么用
拿实例的常规路径：`Hero.MainHero`（玩家）、`Hero.Find(stringId)`、`Hero.FindFirst(predicate)`，或从 `Clan.Heroes` / `Clan.AliveLords` 遍历。四条真实坑：

1. `Clan` 的 getter 是 `CompanionOf ?? _clan`（Hero.cs:1235）——当英雄在玩家家族当伙伴时，`Clan` 返回玩家家族而非他自己的 `_clan`；要判断"是否自己家族的领主"用 `IsClanLeader`（Hero.cs:1363）或 `OriginClan`（Hero.cs:1224）。
2. 直接给 `HitPoints` 赋值会被夹到 `[1, MaxHitPoints]`（Hero.cs:1071），且跨过 `WoundedHealthLimit` 时会触发 `OnHeroWounded` 事件并通知名册——想静默改血必须先想清楚事件副作用。
3. `HeroState` 的 setter 内部就是 `ChangeState`（Hero.cs:629），会通知 `Clan.OnHeroChangedState` 并广播 `CampaignEventDispatcher`；不要绕过它直接改字段，否则 Clan 的存活/死亡缓存会失同步。
4. `BattleEquipment` 为 null 时返回 `Campaign.Current.DeadBattleEquipment` 占位（Hero.cs:586）——对死英雄读装备不会 NPE，但拿到的是占位装备，判空逻辑要写对。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `CharacterObject` | 底层模板对象；`MaxHitPoints`、等级、文化、体型都从这里取，Hero 只是它的活包装（Hero.cs:481） |
| `Name` / `FirstName` / `GetName` / `SetName` | 显示名族；`SetName` 在英雄是队长时会顺带清部队缓存名（Hero.cs:509、499、518、524） |
| `IsFemale` | 性别标记，影响文本变量与婚姻判定（Hero.cs:564） |
| `BattleEquipment` / `CivilianEquipment` / `StealthEquipment` | 三套装备；战斗装备为 null 时返回 `DeadBattleEquipment` 占位而非 null（Hero.cs:586、596、606） |
| `HeroState` / `ChangeState` | 状态机核心；setter 即 `ChangeState`，通知 Clan 并广播事件（Hero.cs:629、2220） |
| `IsDead` / `IsPrisoner` / `IsActive` / `IsAlive` / `IsFugitive` / `IsReleased` / `IsNotSpawned` / `IsDisabled` / `IsTraveling` | 一组状态谓词，全部是 `HeroState` 的语法糖（Hero.cs:768、788、808、848、778、798、818、828、838） |
| `Occupation` / `SetNewOccupation` | 职业（流浪者/商人/工匠…），决定 AI 行为与 `IsMerchant` 等谓词；`SetNewOccupation` 广播 `OnHeroOccupationChanged`（Hero.cs:754、881） |
| `HitPoints` / `MaxHitPoints` / `WoundedHealthLimit` / `IsWounded` | 血量族；setter 夹取 `[1, Max]` 并触发 `OnHeroWounded`，`WoundedHealthLimit` 走 `CharacterStatsModel`（Hero.cs:1071、1060、682、910） |
| `Heal` | 治疗入口，先过 `PartyHealingModel` 修正再回血，可选给等待中的英雄加经验（Hero.cs:2262） |
| `BirthDay` / `DeathDay` / `Age` / `IsChild` | 年龄族；`CampaignOptions.IsLifeDeathCycleDisabled` 时返回默认年龄而非真实生日（Hero.cs:1113、1128、1146、1177） |
| `Clan` / `OriginClan` / `CompanionOf` / `SupporterOf` | 阵营族；`Clan` getter 返回 `CompanionOf ?? _clan`，`OriginClan` 记录出生家族（Hero.cs:1235、1224、703、1268） |
| `PartyBelongedTo` / `PartyBelongedToAsPrisoner` / `StayingInSettlement` / `CurrentSettlement` | 位置族：部队 > 俘虏方 > 停留地 > 推导当前地（Hero.cs:1379、1395、1400、1594） |
| `Gold` / `ChangeHeroGold` | 个人金币；setter 夹到 ≥0，`ChangeHeroGold` 防 int 溢出（Hero.cs:1618、2869） |
| `GetSkillValue` / `SetSkillValue` / `AddSkillXp` / `ClearSkills` | 技能族，底层是 `PropertyOwner<SkillObject>`；`AddSkillXp` 走 `HeroDeveloper`（Hero.cs:1791、1801、1813、1807） |
| `GetTraitLevel` / `SetTraitLevel` / `GetPerkValue` / `ClearPerks` | 特质与 perk 族；`SetTraitLevel` 按 trait 自身 min/max 夹取（Hero.cs:1859、1852、1890、1896） |
| `GetRelation` / `SetPersonalRelation` / `IsEnemy` / `IsFriend` / `IsNeutral` | 关系族，走 `DiplomacyModel`；`SetPersonalRelation` 按外交上下限夹取（Hero.cs:2564、2557、2580、2586、2592） |
| `CanMarry` / `CanLeadParty` / `CanDie` / `CanBecomePrisoner` / `CanMoveToSettlement` | 行为闸门：先问 `CampaignEventDispatcher` 再给默认答案，mod 可挂钩拦截（Hero.cs:2418、2323、2474、2486、2503） |
| `MakeWounded` / `AddDeathMark` | 打伤（血设为 1）与标记死因/凶手；`DeathMark` 决定死亡文本与继承人判定（Hero.cs:2709、2717） |
| `GetCampaignPosition` / `GetMapPoint` / `GetPositionAsVec3` | 地图定位族，供追踪 UI 与 `ITrackableBase` 实现使用（Hero.cs:2756、2793、2750） |
| `MainHero` / `OneToOneConversationHero` / `AllAliveHeroes` / `DeadOrDisabledHeroes` | 静态入口：玩家、当前对话英雄、存活/死亡英雄集合（Hero.cs:2680、2690、2660、2670） |
| `Find` / `FindFirst` / `FindAll` | 查询入口；`FindFirst`/`FindAll` 遍历 `Campaign.Current.Characters` 过滤 `IsHero`（Hero.cs:2645、2634、2651） |
| `Level` | 角色等级，从 `CharacterObject` 初始化，影响战力与文本（Hero.cs:3074） |
| `VolunteerTypes` / `MaximumNumberOfVolunteers` | 可招募兵种池，上限 6（Hero.cs:3031、3027） |
| `IsPregnant` | 怀孕标记，影响事件与文本（Hero.cs:3187） |
| `CharacterStates` | 状态枚举：NotSpawned/Active/Fugitive/Prisoner/Released/Dead/Disabled/Traveling（Hero.cs:3194） |

## 真实示例
```csharp
Hero hero = Hero.Find("lord_1_1");
if (hero != null && hero.IsAlive && !hero.IsWounded)
{
    hero.AddSkillXp(DefaultSkills.OneHanded, 150f);
    hero.SetPersonalRelation(Hero.MainHero, 10);
    hero.ChangeHeroGold(500);
}
```

## 参见
- [CharacterObject](../CharacterObject)
- [Clan](../Clan)
- [Kingdom](../Kingdom)
- [MobileParty](../MobileParty)
- [Campaign](../Campaign)
- [MBObjectBase](../../campaign-ext/MBObjectBase)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
