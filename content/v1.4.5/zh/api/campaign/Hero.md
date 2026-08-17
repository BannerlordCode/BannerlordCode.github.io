---
title: "Hero"
description: "战役世界里一个具体角色（玩家、领主、同伴、家族成员、商队首领等）的数据与行为入口：外观、社会身份、状态、关系与技能都挂在它身上；任何带副作用的世界变更都应走对应的 *Action，而不是直接改字段。"
---
# Hero

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**类型：** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`  
**Base:** `MBObjectBase`  
**源文件:** `TaleWorlds.CampaignSystem/Hero.cs`

## 概述

`Hero` 代表 Bannerlord 战役地图上的**一个具体角色**：玩家自己、各王国领主、流浪者/同伴、家族成员、商队与匪帮首领等都以 `Hero` 的形式存在。它是把三类最关键战役数据绑在一起的“角色卡片”：

- **外观与基础属性**：`CharacterObject`（人物模板）、`BodyProperties`、装备、技能与特性；
- **社会身份**：`Clan`、`Kingdom`、`Occupation`、`IsClanLeader`、与他人的关系；
- **当前状态**：`PartyBelongedTo`、`CurrentSettlement`、`Gold`、`HeroState`（存活/负伤/俘虏/逃亡/死亡）。

几乎所有战役 mod 都要与 `Hero` 打交道——给玩家加钱、调整关系、让领主加入王国、让英雄负伤或死亡等。`Hero` 本身只是**数据 + 少量行为入口**，并不负责战斗场景里的动作；进入战斗后，引擎会基于它生成一个 `Agent` 作为战场化身。

## 心智模型

把 `Hero` 当作**“战役世界里的角色卡片”**，而不是可渲染的 3D 模型：

- **它是全局唯一、可序列化的对象**。每个 `Hero` 都有一个 `stringId`，经 `MBObjectManager` 注册；`Hero.Find(stringId)` 拿到的始终是同一实例。需要新英雄时不 `new Hero()`，而用 [HeroCreator](../../campaign-ext/HeroCreator/)（如 `CreateSpecialHero`、`CreateNotable`、`CreateBasicHero`）。
- **它活在 Campaign 层**。读取/修改 `Hero` 属于战役逻辑，应在 `CampaignBehaviorBase` 的 tick 或对话/任务回调里进行；Mission 战斗期间不要去改动战役态英雄，否则会与地图状态不同步。
- **它是“状态镜像”，不是“事务入口”**。`Hero` 上的字段（金币、关系、家族、生死）往往关联着一整条事件链与多个关联对象。直接写字段会**绕过事件广播、合法性校验与存档一致性**——转移金币、改关系、结婚、换领地归属、俘虏/处决一律走对应 Action（见下）。
- 例如 `ChangeHeroGold(int)` 只是单账户的余额增减，不扣另一端、也不发布交易事件；真正的角色间转账请用 `GiveGoldAction.ApplyBetweenCharacters`。

## 何时用 / 何时不要用

**用 `Hero` 本身：**
- 读取/查询角色状态：`Name`、`Clan`、`IsWounded`、`Gold`、`CurrentSettlement` 等；
- 遍历与查找：`Hero.AllAliveHeroes`、`Hero.Find` / `FindFirst` / `FindAll`；
- 在 `CampaignBehaviorBase` 或对话/任务逻辑里，基于英雄状态做判定或触发事件；
- 通过 `Hero.MainHero`、`MobileParty.LeaderHero`、`Settlement.Notables` 等自然路径拿到角色引用。

**不要用直接字段写入模拟世界变更（改用 Action）：**
- 转账/发薪 → [GiveGoldAction](../../campaign-ext/GiveGoldAction/)；
- 改变玩家与某英雄关系 → [ChangeRelationAction](../../campaign-ext/ChangeRelationAction/)；
- 让英雄死亡（老死/战死/处决/生产死亡）→ [KillCharacterAction](../../campaign-ext/KillCharacterAction/)；
- 结婚 → [MarriageAction](../../campaign-ext/MarriageAction/)；
- 变更定居点归属 → [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction/)；
- 把英雄编入部队 / 俘虏 / 传送 → [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction/)、[TakePrisonerAction](../../campaign-ext/TakePrisonerAction/)、[TeleportHeroAction](../../campaign-ext/TeleportHeroAction/)。

> 即便某些 setter（如 `SetPersonalRelation`、`ChangeHeroGold`）是 `public`，它们也只是低层写入，不会触发 `CampaignEvents`、不会做合法性裁剪，也不保证关联对象同步更新。只在你明确**不需要**这些副作用、且后果自负时使用。

## 依赖

- 上游 / 持有者：[Campaign](../Campaign/) 与 [MBObjectManager](../../campaign-ext/MBObjectManager/) 创建、注册并持有唯一的 `Hero` 实例（`Hero.AllAliveHeroes` 实际来自 `Campaign.Current.AliveHeroes`）。
- 模板数据：[CharacterObject](../CharacterObject/) 提供技能、装备槽、身体属性等模板；`Hero.CharacterObject` 指向它。
- 归属与镜像：[Clan](../Clan/)、[Kingdom](../Kingdom/) 表示阵营归属；[MobileParty](../MobileParty/) 与 [Settlement](../Settlement/) 反映英雄所在部队与据点；战斗中由 [Agent](../../mission/Agent/) 作为短命战场化身。
- 世界变更入口：所有有副作用的改动经上述 `*Action` 完成，并经由 [CampaignEvents](../../campaign-ext/CampaignEvents/) 通知其它系统（如关系变化、英雄死亡、领地易主）。
- 持久化：`Hero` 标注了 `[SaveableField]`，随战役存档读写；创建/字段变更需保持存档一致，详见 [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/)。
- 批量操作：[CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) 在每日 tick 中遍历 `Hero` 做成长逻辑（年龄、伤情恢复、关系衰减等）。

## 风险

- **绕过事件链与存档一致性**：直接写 `IsDead`、`Gold`、`Spouse`、`Clan` 等字段会让关联系统（任务、UI、王国关系、存档）拿不到更新，轻则界面不同步，重则坏档。务必走对应 Action。
- **死亡后的悬挂引用**：`IsDead == true` 的英雄仍在 `AllAliveHeroes` 之外保留引用，使用前先判 `IsDead`/`IsAlive`，不要在英雄“死而不删”时继续当活人使用。
- **错误的阶段改动**：在 Mission / UI 层直接改 Campaign 态 `Hero` 会与地图状态冲突；状态变更只在 Campaign 层进行。
- **MBObjectManager 注册**：不要 `new Hero()`；未注册的实例既不会被存档，也不会出现在 `Campaign.Current` 的查询里。
- **Behavior 执行顺序**：`CampaignBehaviorBase` 之间按优先级 tick，`Hero` 状态在一天内可能被多个 Behavior 改写，依赖“上一步刚改完”的假设时要小心顺序。
- **`MakeWounded` 不是死亡**：它只让英雄负伤、不会致死；彻底移除英雄必须用 `KillCharacterAction.ApplyBy*`。

## 如何获取 Hero

```csharp
// 玩家英雄（等价于 CharacterObject.PlayerCharacter.HeroObject）
Hero main = Hero.MainHero;

// 当前一对一对话对象（酒馆、领主大厅等）
Hero talkTo = Hero.OneToOneConversationHero;

// 按 stringId 精确查找，不存在返回 null
Hero arwa = Hero.Find("hero_arwa");

// 按条件找第一个 / 全部
Hero woundedHero   = Hero.FindFirst(h => h.IsWounded);
var  playerFaction = Hero.FindAll(h => h.MapFaction == Hero.MainHero.MapFaction && h.IsAlive);

// 遍历所有存活英雄
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsPlayerCompanion) { /* ... */ }
}

// 从其它对象自然拿到 Hero
Hero leader      = MobileParty.MainParty.LeaderHero;        // 主部队领袖
Hero governor    = Settlement.CurrentSettlement.Town.Governor; // 城镇总督（Governor 在 Town 上）
Hero clanLeader  = Clan.PlayerClan.Leader;                  // 玩家家族首领
var  notables    = Settlement.CurrentSettlement.Notables;   // 据点名人列表
```

## 成员说明

下面按主题列出最常用的公开成员。**“副作用”**指调用它会改变哪些关联状态；**“何时调用”**指典型使用时机。

### 身份与外观

| 成员 | 类型 | 用途 | 副作用 | 何时调用 |
|------|------|------|--------|----------|
| `Name` / `FirstName` | `TextObject` | 完整名称（含称号）/ 名 | 无 | 显示、对话文本 |
| `CharacterObject` | `CharacterObject` | 绑定的人物模板（技能、装备槽、属性） | 无 | 需要模板数据时；通常只读 |
| `Occupation` | `Occupation` | 职业身份（领主、商贩、流浪者、强盗…） | 无 | 判定角色类型，如 `IsLord => Occupation == Occupation.Lord` |

### 社会关系

| 成员 | 类型 | 用途 | 副作用 | 何时调用 |
|------|------|------|--------|----------|
| `Clan` | `Clan` | 所属家族（玩家家族为 `Clan.PlayerClan`） | 无（读取） | 归属判定、家族任务 |
| `Kingdom` | `Kingdom` | 所属王国（可空） | 无 | 阵营/外交判定 |
| `Spouse` / `ExSpouses` | `Hero` / `MBReadOnlyList<Hero>` | 现任/前任配偶 | 无 | 婚姻相关逻辑（结婚应走 `MarriageAction`） |
| `IsClanLeader` | `bool` | 是否家族首领 | 无 | 权限/继承判定 |
| `MapFaction` | `IFaction` | 地图阵营（含非王国势力） | 无 | 敌我/战争判定 |
| `GetRelation(Hero otherHero)` → `int` | 方法 | 读取与另一英雄的个人关系（-100~100） | 无 | 对话、任务、军团加入前 |
| `SetPersonalRelation(Hero, int)` | 方法 | 低层直接设定两人关系值 | **绕过**事件与校验，不发布 `OnHeroRelationChanged` | 仅在不需要事件链时谨慎使用 |

### 位置与状态

| 成员 | 类型 | 用途 | 副作用 | 何时调用 |
|------|------|------|--------|----------|
| `CurrentSettlement` / `HomeSettlement` / `BornSettlement` | `Settlement` | 当前 / 家乡 / 出生据点 | 无 | 寻路、据点交互判定 |
| `PartyBelongedTo` | `MobileParty` | 所在部队（玩家为 `MobileParty.MainParty`） | 无 | 部队/移动判定 |
| `PartyBelongedToAsPrisoner` | `PartyBase` | 作为俘虏所在的队伍 | 无 | 俘虏状态判定 |
| `HeroState` / `IsDead` / `IsWounded` / `IsPrisoner` / `IsFugitive` / `IsAlive` | `bool`/`CharacterStates` | 生命与处境状态 | 无 | 任何使用前先判存活/死亡 |
| `HitPoints` / `WoundedHealthLimit` | `float` | 当前生命值 / 负伤阈值 | 改动触发 `OnHeroHealthStatusChanged` | 伤情逻辑；`IsWounded => HitPoints <= WoundedHealthLimit` |
| `IsNoncombatant` | `bool` | 是否不能参战（儿童、部分 NPC） | 无 | 参战/装备判定 |
| `MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = None)` | 方法 | 使英雄负伤（**不会**致死） | 改 `HitPoints`、可能置负伤标记、触发健康状态事件 | 事件/任务里让英雄受伤 |

### 部队与影响力

| 成员 | 类型 | 用途 | 副作用 | 何时调用 |
|------|------|------|--------|----------|
| `Gold` | `int` | 当前携带金钱 | 无（读取）；写请走 `GiveGoldAction` | 经济判定 |
| `ChangeHeroGold(int changeAmount)` | 方法 | 单账户余额增减（可负） | 只改本英雄，不扣另一端、不发交易事件 | 仅单账户奖励/扣款且无需交易事件时 |
| `CanLeadParty()` → `bool` | 方法 | 综合年龄/状态/职业判断能否统军 | 无 | 编队/委任前 |
| `AddInfluenceWithKingdom(float)` | 方法 | 为有王国的英雄增加影响力 | 改王国影响力累计 | 任务奖励、决策后 |

### 属性、技能与特性

| 成员 | 类型 | 用途 | 副作用 | 何时调用 |
|------|------|------|--------|----------|
| `HeroDeveloper` | `HeroDeveloper` | 技能/经验/专精神成长入口 | 无（读取） | 技能成长逻辑 |
| `GetSkillValue(SkillObject)` → `int` | 方法 | 查询技能等级 | 无 | 任何技能判定 |
| `AddSkillXp(SkillObject, float)` | 方法 | 增加技能经验 | 可能升级、触发升级事件 | 任务/训练奖励 |
| `SetSkillValue(SkillObject, int)` | 方法 | 直接设定技能等级 | 改等级、不产经验 | 初始化/作弊 |
| `GetTraitLevel(TraitObject)` / `SetTraitLevel(TraitObject, int)` | 方法 | 读取/设置特性等级（如 `DefaultTraits.Honor`） | 改特性、可能影响人格标签 | 特性相关逻辑 |

## 最小真实示例

### 示例 1：把玩家金币转给当前对话对象（走 Action）

```csharp
using TaleWorlds.CampaignSystem.Actions;

// 玩家英雄：Hero.MainHero 实为 CharacterObject.PlayerCharacter.HeroObject
Hero main   = Hero.MainHero;
// 当前一对一对话对象
Hero target = Hero.OneToOneConversationHero;

if (target != null && main.Gold >= 1000)
{
    // 角色间转账：同步两端余额并发布交易事件，不要直接改 Gold
    GiveGoldAction.ApplyBetweenCharacters(main, target, 1000);
}
```

### 示例 2：让某领主与玩家关系变为 50（走 Action）

```csharp
using TaleWorlds.CampaignSystem.Actions;

// 查找第一个有钱的领主
Hero richLord = Hero.FindFirst(h => h.IsLord && h.Gold > 100000);

if (richLord != null)
{
    // 改关系必须走 ChangeRelationAction，而非 SetPersonalRelation
    ChangeRelationAction.ApplyPlayerRelation(richLord, 50);
}
```

### 示例 3：给主角某技能补满到下一级所需经验

```csharp
// GetXpRequiredForLevel 与 GetSkillXpProgress 都在 HeroDeveloper 上
SkillObject skill      = DefaultSkills.Trade;
int  currentLevel      = Hero.MainHero.GetSkillValue(skill);
int  neededXp          = Hero.MainHero.HeroDeveloper.GetXpRequiredForLevel(currentLevel + 1);
int  progress          = Hero.MainHero.HeroDeveloper.GetSkillXpProgress(skill);
Hero.MainHero.AddSkillXp(skill, Math.Max(0f, neededXp - progress));
```

## 参见 / 导航

- ↑ [战役 API 索引](../)
- ↔ [Campaign](../Campaign/)（用 `Campaign.Current` 访问整个世界与 `AliveHeroes`）
- ↔ [CharacterObject](../CharacterObject/)（英雄背后的模板数据）
- ↔ [Clan](../Clan/) / [Kingdom](../Kingdom/)（家族与王国归属）
- ↔ [MobileParty](../MobileParty/) / [Settlement](../Settlement/)（英雄所在部队与据点）
- [HeroCreator](../../campaign-ext/HeroCreator/)（创建新英雄的工厂）
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)（每日 tick 中批量操作 Hero）
- [CampaignEvents](../../campaign-ext/CampaignEvents/)（变更经事件广播给其它系统）
- 世界变更 Action：[GiveGoldAction](../../campaign-ext/GiveGoldAction/)、[ChangeRelationAction](../../campaign-ext/ChangeRelationAction/)、[KillCharacterAction](../../campaign-ext/KillCharacterAction/)、[MarriageAction](../../campaign-ext/MarriageAction/)、[ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction/)
- 战斗化身：[Agent](../../mission/Agent/)
- 存档：[SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/)
