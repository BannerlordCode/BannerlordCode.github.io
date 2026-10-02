---
title: "Hero"
description: "战役角色：身份、技能、属性、特性、专长、伤势、关系、家族、部队归属与地图位置。"
---

# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Hero.cs`

## 概述

`Hero` 是战役层的角色聚合体。它**不是** `CharacterObject`：`CharacterObject` 是模板（“是什么”），而 `Hero` 是它的某个活实例，拥有姓名、地图位置、技能、家族、部队以及一套状态机。

状态机是最关键的部分。`Hero.CharacterStates` 派生出十几个布尔视图（`IsDead`、`IsFugitive`、`IsPrisoner`、`IsReleased`、`IsActive`、`IsNotSpawned`、`IsDisabled`、`IsTraveling`、`IsWounded`、`IsAlive`），而每次状态变化都会触发一组不同的官方副作用——移出部队、转移俘虏、死亡结算、账目维护。`ChangeState` 是唯一受支持的入口；直接写底层状态会跳过全部逻辑。

第二件需要记住的事，是**能力标志**（`CanBecomePrisoner`、`CanMarry`、`CanLeadParty`、`CanDie`、`CanMoveToSettlement`、`CanHaveCampaignIssues`）与**当前事实**（`IsPrisoner`、`IsWounded`……）的区分。只检查其中一半的 mod，会因为对方是玩家、领主、名士还是模板而得到不同答案。

## 心智模型

`Hero` 挂在 `Campaign` 之下，被 [Clan](../Clan)、[Kingdom](../Kingdom)、[MobileParty](../MobileParty) 与 [Settlement](../Settlement) 引用：

```
CharacterObject（模板：身体、装备、兵种梯队）
        │  Hero.CharacterObject
        ▼
Hero ──.Clan──► Clan        ──.PartyBelongedTo──► MobileParty
  │   ──.CompanionOf──► Clan
  │   ──.Spouse / .Father / .Mother / .Children──► Hero
  │   ──.GovernorOf──► Town
  │   ──.CurrentSettlement / .StayingInSettlement──► Settlement
  └── HeroState : CharacterStates ──► IsDead / IsPrisoner / IsActive / ...
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Hero.MainHero 已可用
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.HeroWounded / HeroKilledEvent / HeroCreated
DailyTick
    读取 hero.HitPoints 及其他状态
    通过 hero.AddSkillXp(...) / hero.ChangeState(...) 修改
    随后触发对应的 CampaignEvents
```

实际开发中最容易踩的坑：

- **不要直接构造英雄。** `new Hero()` 与 `new Hero(stringId, characterObject, birthDay)` 是给对象管理器用的；手动创建的英雄没有注册、不出现在 `Hero.AllAliveHeroes` 中、也永远不会被存档。受支持的路径是经由 `MBObjectManager.Instance.AddObject<Hero>(...)`，或由战役行为通过对象管理器创建。
- **`ChangeState` 不是幂等的。** 把已经死亡的英雄再次置为 `Dead` 会重跑死亡路径：日志条目、氏族领主列表、阵营成员清理。调用前务必先比较当前 `HeroState`。
- **`IsActive` 与 `IsAlive` 不是一回事。** 俘虏是存活但非活动状态；逃亡者是活动但不符合领主资格的对象。绝不要把两者合并成一个“可用”判断。
- **`KillCharacterAction` 的明细很关键。** `CanDie(causeOfDeath)` 与 `AddDeathMark(killer, detail)` 都会按明细枚举分支。本想表达战斗死亡却传 `None`，会跳过日志期望的负伤 / 死亡记账。
- **`GetRelation` 是有符号且非对称的。** 成对读取用 `GetRelation(other)`，写入用 `SetPersonalRelation`；`GetBaseHeroRelation` 会剥掉修正值，不是 UI 显示的那个数。
- **缓存视图会滞后。** `CompanionsInParty`、`Siblings`、`Children` 在家族事件时重算，而不是每次读取。在遍历 `Hero.Children` 时修改它会出问题。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 存储 | `MBObjectBase` | `Id` / `StringId`，大量 `[SaveableProperty]` 字段 |
| 模板 | `CharacterObject` | `Hero.CharacterObject` 是底层身体 |
| 氏族 | [Clan](../Clan)、[Kingdom](../Kingdom) | `Clan`、`MapFaction`、`SupporterOf`、`IsFactionLeader` |
| 部队 | [MobileParty](../MobileParty)、[PartyBase](../PartyBase) | `PartyBelongedTo`、`PartyBelongedToAsPrisoner` |
| 地点 | [Settlement](../Settlement)、[Town](../Town) | `CurrentSettlement`、`StayingInSettlement`、`GovernorOf` |
| 成长 | `SkillObject`、`CharacterAttribute`、`TraitObject`、`PerkObject` | 技能 / 属性 / 特性 / 专长存储 |
| 动作 | `KillCharacterAction` | 死亡与负伤的原因明细 |
| 事件 | [CampaignEvents](../CampaignEvents) | `HeroWounded`、`HeroKilledEvent`、`HeroCreated`、`HeroRelationChanged` |

## 主要成员

### 身份

#### `public CharacterObject CharacterObject`

该英雄创建自的模板。两个英雄可以共用同一个 `CharacterObject` 而在其他所有方面完全不同。

#### `public TextObject Name` / `public TextObject FirstName`

本地化显示名。`SetName(fullName, firstName)` 同时写入两者。

#### `public static Hero MainHero`

玩家角色。在编辑器以及战役拆卸过程中为 `null`。

#### `public static Hero Find(string stringId)` / `FindFirst(Func<Hero,bool>)` / `FindAll(Func<Hero,bool>)`

查找辅助方法。`FindAll` 会遍历完整英雄列表——如果你每 tick 都调用，请缓存结果。

#### `public static MBReadOnlyList<Hero> AllAliveHeroes` / `DeadOrDisabledHeroes`

缓存的划分结果，等价于 `Campaign.Current.AliveHeroes`。

### 状态

#### `public Hero.CharacterStates HeroState`

各个 `Is*` 状态布尔值背后的原始枚举。需要 switch 时读它，否则读布尔值。

#### `public void ChangeState(Hero.CharacterStates newState)`

在状态之间移动英雄的唯一受支持方式。会执行官方的部队移除、俘虏名册、阵营成员与日志修复。调用前先判断 `HeroState != newState`。

#### `public bool IsDead` / `IsFugitive` / `IsPrisoner` / `IsReleased` / `IsActive` / `IsNotSpawned` / `IsDisabled` / `IsWounded` / `IsTraveling` / `IsAlive`

`HeroState` 的派生视图。读取廉价且安全。

#### `public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = ...)` / `public void AddDeathMark(...)`

受伤与死亡的入口。`AddDeathMark` 把英雄置为 `Dead`；`MakeWounded` 只降低血量。

### 生命与实力

#### `public int HitPoints` / `public int MaxHitPoints` / `public int WoundedHealthLimit`

当前值、上限与负伤阈值。请通过 `Heal(int, bool)` 设置，而不是直接写字段。

#### `public void Heal(int healAmount, bool addXp = false)`

恢复生命值，上限为 `MaxHitPoints`。`addXp: true` 时还会通过等级系统授予技能经验。

#### `public void AddPower(float value)` / `public void UpdatePowerModifier()`

声望量级的政治实力，用于 AI 权重。声望或氏族变化后需要重算。

#### `public bool IsHealthFull()`

“无须治疗”的便捷判断。

### 技能、属性、特性与专长

#### `public int GetSkillValue(SkillObject skill)` / `public void SetSkillValue(SkillObject skill, int value)`

直接读写技能值。写入会绕过经验路径，导致存档里的成长记录与之不匹配。

#### `public void AddSkillXp(SkillObject skill, float xpAmount)`

经验路径。经过技能等级系统，升级时的专长与属性加成会正常触发。

#### `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes`

属性宿主。用 `GetAttributeValue(CharacterAttribute)` 读取。

#### `public int GetTraitLevel(TraitObject trait)` / `public void SetTraitLevel(TraitObject trait, int value)`

特性等级。官方许多行为以特定特性值为开关；只有在确实想连带改变那些行为时才去改它。

#### `public Hero.GetPerkValue(PerkObject perk)` 与 `MobileParty.HasPerk(PerkObject, bool)`

英雄的专长检查与部队的专长检查。`MobileParty.HasPerk` 传 `checkSecondaryRole: true` 时还会考虑军需官，这正是 AI 权重使用的形式。

### 关系

#### `public int GetRelation(Hero otherHero)` / `public float GetRelationWithPlayer()`

有符号的个人关系。正值为友好。`GetRelationWithPlayer` 就是 UI 显示的那个值。

#### `public void SetPersonalRelation(Hero otherHero, int value)`

写入这一对的关系。没有对称 setter——写一次即可，双向都能看到。

#### `public bool IsEnemy(Hero otherHero)` / `IsFriend` / `IsNeutral`

`GetRelation` 的阈值化视图。

#### `public bool CanMarry()` / `CanBecomePrisoner()` / `CanLeadParty()` / `CanDie(...)` / `CanMoveToSettlement()` / `CanHaveCampaignIssues()` / `CanBeGovernorOrHavePartyRole()` / `CanHeroEquipmentBeChanged()` / `CanHaveRecruits`

能力判定。对玩家角色、模板以及处于不兼容状态的英雄都返回 `false`。执行动作前先检查对应能力。

### 家族与位置

#### `public Clan Clan` / `public Clan CompanionOf`

贵族氏族，或该英雄效力的氏族。同伴有 `CompanionOf` 且不算氏族领主。

#### `public MobileParty PartyBelongedTo` / `public Settlement CurrentSettlement` / `public Settlement StayingInSettlement`

英雄当前在哪。英雄身处聚落内部时 `PartyBelongedTo` 为 `null`。

#### `public Hero GovernorOf`

该英雄治理的城镇，没有则为 `null`。

#### `public Hero Father` / `Mother` / `Spouse` / `ExSpouses` / `Children` / `Siblings`

家族图。反向引用由家族行为维护，因此 mod 侧只读。

### 金钱与物品

#### `public void ChangeHeroGold(int changeAmount)`

增加（或扣减）金币。负值会被钳制到 0；氏族钱包最终就是通过这个方法结算的。

#### `public int Gold`

当前金币。官方在每日 tick 重新结算薪饷。

#### `public MBList<ItemObject> SpecialItems`

跟随英雄而非跟随名册的英雄专属物品。

## 使用示例

### 示例 1：通过真正的成长路径授予技能经验

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.Core;

public sealed class HeroTrainingBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null || Hero.MainHero == null)
        {
            return;
        }

        SkillObject athletics = Skills.All.FirstOrDefault(s => s.StringId == "Athletics");
        if (athletics == null)
        {
            return;
        }

        Hero.MainHero.AddSkillXp(athletics, 5f);
        InformationManager.DisplayMessage(
            new InformationMessage($"Athletics 现为 {Hero.MainHero.GetSkillValue(athletics)}"));
    }
}
```

### 示例 2：安全的负伤与死亡处理

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void WoundOrKill(Hero hero, Hero killer)
{
    if (hero == null || hero.IsDead || hero.IsHumanPlayerCharacter)
    {
        return;
    }

    if (!hero.CanDie(KillCharacterAction.KillCharacterActionDetail.DiedInBattle))
    {
        return;
    }

    if (hero.HitPoints > hero.WoundedHealthLimit)
    {
        hero.MakeWounded(killer, KillCharacterAction.KillCharacterActionDetail.WoundedInBattle);
        return;
    }

    hero.AddDeathMark(killer, KillCharacterAction.KillCharacterActionDetail.DiedInBattle);
}
```

### 示例 3：安全地修改一对关系

```csharp
using TaleWorlds.CampaignSystem;

public static void Befriend(Hero a, Hero b, int delta)
{
    if (a == null || b == null || a == b)
    {
        return;
    }

    if (!a.IsAlive || !b.IsAlive)
    {
        return;
    }

    a.SetPersonalRelation(b, a.GetRelation(b) + delta);
    InformationManager.DisplayMessage(
        new InformationMessage($"{a.Name.Name} ↔ {b.Name.Name}：{a.GetRelation(b)}"));
}
```

### 示例 4：不逐帧重扫地遍历全部存活领主

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;

public static int CountLordsAtWarWithPlayer()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return 0;
    }

    return campaign.AliveHeroes.Count(h =>
        h.IsLord && h.Clan != null && h.Clan.IsAtWarWith(Clan.PlayerClan));
}
```

## 风险与崩溃边界

1. **未注册的英雄会凭空消失。** `new Hero(...)` 绕过了 `MBObjectManager`：它不会出现在 `AllAliveHeroes` 中、不会被存档，任何部队或氏族对它的引用在读档后都会变成悬垂 ID。请通过对象管理器创建。
2. **`ChangeState` 可重入。** 用英雄当前所处的状态再次调用会重跑整段转移（日志条目、氏族列表、名册写入）。务必先 `if (hero.HeroState != newState)`。
3. **菜单中 `Hero.MainHero` 为 null。** 任何触及它的静态代码或模块加载代码，都必须同时判 `Campaign.Current` 与它自身的 `null`。
4. **`SetSkillValue` 与 `AddSkillXp` 的差别。** 直接写技能等级不会在升级时授予属性点，也会让经验进度不一致；除非你确实想要一个硬覆盖，否则请走经验路径。
5. **与存档耦合。** `HitPoints`、`HeroState`、`IsFemale`、技能、属性、特性、`Gold` 与家族链接全部进存档。重新编号或重排 `SaveableProperty` id 会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
6. **俘虏一致性。** `PartyBelongedToAsPrisoner` 由 `PartyBase.AfterLoad` 修复。不使用官方动作就把英雄移入或移出俘虏名册，产出的存档只在重载后才出问题。
7. **对部队的跨域依赖。** 在任务回调里读 `PartyBelongedTo` 是合法的，但在战斗回写期间修改它会让 `PartyBase.MemberRoster` 失去同步。
8. **逐 tick 扫描成本。** 每个行为每 tick 都对完整英雄列表做 `Hero.FindAll`，规模大时代价可观。优先改用 `CampaignEvents.DailyTickHeroEvent` / `HourlyTickEvent`，它们会直接把对象交给你。

## 跨版本提示

- 成员列表对应 1.3.0 的反编译接口面。`Hero` 在后续 1.3.x 补丁中新增了少量导航与车队相关字段，但状态机、技能与关系 API 保持不变。
- `ChangeState`、`AddDeathMark`、`MakeWounded` 与 `KillCharacterAction` 明细枚举在 1.4.x 中形状相同，因此针对它们写的行为代码可以在新存档上正常加载。

## 参见

- [Clan](../Clan) — 英雄所属的贵族氏族
- [Kingdom](../Kingdom) — 其氏族效力的王国
- [MobileParty](../MobileParty) — 英雄率领或加入的部队
- [PartyBase](../PartyBase) — 部队暴露的名册
- [Settlement](../Settlement) — 英雄当前所在
- [Campaign](../Campaign) — 英雄注册表与战役时钟
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南