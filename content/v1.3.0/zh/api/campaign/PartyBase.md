---
title: "PartyBase"
description: "机动部队与聚落守备军共用的战役部队核心：名册、俘虏、货物、实力、食物、规模上限与地图事件阵营。"
---

# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** `IBattleCombatant`（另有 `IRandomOwner`、`IInteractablePoint`）
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## 概述

`PartyBase` 是战役层共享的数据核心，代表“地图上的一群人”。它只有两种可能的宿主，在构造时就固定下来：

| 宿主 | 构造函数 | 判别标志 | 位置来源 |
|------|-------------|-------------|-----------------|
| [MobileParty](../MobileParty) | `new PartyBase(MobileParty)` | `IsMobile == true` | `MobileParty.Position` |
| [Settlement](../Settlement) 守备军 | `new PartyBase(Settlement)` | `IsSettlement == true` | `Settlement.Position` |

**`MobileParty` 并不是 `PartyBase` 的子类。** 它*持有*一个：`Party = new PartyBase(this)`。`Settlement` 同理。因此凡是接受 `PartyBase` 的“部队”API 都能统一处理机动部队与守备军——这正是战斗结算、战利品与增援逻辑能够只写一遍的原因。

存放于此的内容：

- **名册。** `MemberRoster`、`PrisonRoster`、`ItemRoster`，以及遵守规模上限的 `Add*` 封装。
- **计数与上限。** `NumberOfHealthyMembers`、`NumberOfAllMembers`、`NumberOfPrisoners`、`PartySizeLimit`、`PrisonerSizeLimit`。
- **实力。** `EstimatedStrength`、`CalculateCurrentStrength()`、`GetCustomStrength(side, context)`。
- **补给。** `Food`、`IsStarving`、`RemainingFoodPercentage`、`DaysStarving`。
- **战斗归属。** `MapEvent`、`MapEventSide`、`Side`、`OpponentSide`。
- **身份。** `Name`、`Id`、`Index`、`IsValid`、`Owner`、`MapFaction`、`Culture`、`Banner`。

## 心智模型

```
MobileParty ──.Party──► PartyBase (IsMobile)   ─┐
                          │                     ├── MemberRoster
Settlement ──.Party──────► PartyBase (IsSettlement) ┤   PrisonRoster
                                                │   ItemRoster
Hero ──PartyBelongedTo.Party / PartyBelongedToAsPrisoner ─┘
                          │
                          ├── MapEvent / MapEventSide / Side
                          ├── EstimatedStrength / PartySizeLimit
                          └── Position / Name / Owner / Banner   （转发到宿主）
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    PartyBase.MainParty 已可用（即 Campaign.Current.MainParty.Party）
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.HourlyTickPartyEvent / DailyTickPartyEvent
DailyTick
    读取 party.EstimatedStrength、party.Food、各名册计数
    在规模上限内通过 party.AddMember(...) / AddPrisoner(...) 修改
    战斗结束后，任务侧把存活者回写到 MemberRoster
```

实际开发中最容易踩的坑：

- **`LeaderHero` 只对机动部队有效。** 它转发到 `MobileParty?.LeaderHero`，因此对每个聚落守备军都是 `null`。守备军逻辑绝不能解引用它。
- **没有战役时 `MainParty` 为 null。** 它经由 `Campaign.Current` 解析，而后者在主菜单与加载期间为 `null`。
- **`MapEventSide` 的 setter 不是字段赋值。** 它会把部队从旧阵营移除、加入新阵营，并重新同步 `AttachedParties`。草率的赋值会触发 “Double MapEvent” 断言。
- **规模上限在 `Add*` 方法里生效，而不在名册里。** 直接写 `MemberRoster.AddToCounts` 会绕过 `PartySizeLimit`，产出超出模型允许的部队规模。
- **`EstimatedStrength` 是缓存估计值。** 它依赖名册的 `VersionNo`。如果你自己缓存，就必须在名册变化时让缓存失效。
- **`PartyBase` 不是任务里的 `Team`。** `PartyBase` 跨存档存在；`Team` 与 `Agent` 只存在于一次任务期间。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 宿主 | [MobileParty](../MobileParty)、[Settlement](../Settlement) | 构造时固定恰好一个非 null |
| 人物 | [Hero](../Hero) | `Owner`、`LeaderHero`、`PartyBelongedTo`、`PartyBelongedToAsPrisoner` |
| 名册 | `TroopRoster`、`ItemRoster` | 成员、俘虏、货物 |
| 战斗 | `MapEvent`、`MapEventSide`、`MapEventManager` | `MapEvent`、`MapEventSide`、`Side`、`OpponentSide` |
| 模型 | `PartySizeLimitModel`、`PartyHealingModel`、`MilitaryPowerModel`、`PartyFoodBuyingModel` | 上限、治疗、实力、补给 |
| 地图场景 | [MobilePartyVisual](../../campaign-ext/MobilePartyVisual)、[SettlementVisual](../../campaign-ext/SettlementVisual) | 视觉对应物 |
| 接口 | `IBattleCombatant`、`IRandomOwner`、`IInteractablePoint` | 战斗、所有权与交互契约 |

## 主要成员

### 宿主判别

#### `public bool IsMobile` / `public bool IsSettlement`

互斥，构造时固定。请用它们分支，而不是判断宿主是否为 null。

#### `public MobileParty MobileParty { get; private set; }` / `public Settlement Settlement { get; private set; }`

宿主引用。恰好一个非 null。

#### `public CampaignVec2 Position` / `public bool IsVisible` / `public bool IsActive`

转发到宿主。`PartyBase` 上的 `IsActive` 读的是宿主的活动标志，而非部队专属的活动状态。

### 身份

#### `public string Id`

`MobileParty.StringId` 或 `Settlement.StringId`。跨存档稳定，是 mod 侧字典的正确键。

#### `public int Index` / `public bool IsValid`

战役内索引。`IsValid` 即 `Index >= 0`；跨读档缓存下来的上一局部队会变成无效。

#### `public TextObject Name`

转发宿主名称；若设置过自定义名则返回 `CustomName`。

#### `public void SetCustomName(TextObject name)` / `SetCustomBanner(Banner banner)` / `SetCustomOwner(Hero customOwner)`

显示与所有权覆盖。`SetCustomOwner` 让商队或强盗部队看起来属于别人，而不去改宿主本身。

#### `public Hero Owner` / `public Hero LeaderHero`

`Owner` 优先取 `_customOwner`，否则回退到宿主的所有者。`LeaderHero` 只对机动部队有效。

#### `public static PartyBase MainParty` / `public static bool IsPartyUnderPlayerCommand(PartyBase party)`

玩家部队访问与指挥权判定。两者都经由 `Campaign.Current` 解析。

### 名册

#### `public TroopRoster MemberRoster { get; private set; }` / `public TroopRoster PrisonRoster { get; private set; }` / `public ItemRoster ItemRoster { get; private set; }`

三个名册。`{ get; private set; }` 意味着你永远无法替换它们；请原地修改。

#### `public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

加兵，受 `PartySizeLimit` 钳制，返回实际加入的数量。这是应当取代直接改名册的方法。

#### `public int AddPrisoner(CharacterObject element, int numberToAdd)` / `public void AddPrisoners(TroopRoster roster)` / `public void AddMembers(TroopRoster roster)`

俘虏与批量名册的等价方法，全部感知规模上限。

#### `public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)` / `WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

把单位从健康转为负伤。战斗后回写会用到。

#### `public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

按索引添加，供已经定位到名册元素的代码使用。

### 计数与上限

#### `public int NumberOfHealthyMembers` / `NumberOfRegularMembers` / `NumberOfWoundedTotalMembers` / `NumberOfAllMembers` / `NumberOfPrisoners`

快速计数。规模上限作用在 `NumberOfAllMembers` 上。

#### `public int PartySizeLimit` / `public int PrisonerSizeLimit` / `public ExplainedNumber PartySizeLimitExplainer` / `ExplainedNumber PrisonerSizeLimitExplainer`

来自 `PartySizeLimitModel` 的上限，以及部队界面显示的解释。

#### `public int GetNumberOfHealthyMenOfTier(int tier)` / `public int GetNumberOfMenWith(TraitObject trait)`

AI 与专长使用的过滤计数。

#### `public int NumberOfMenWithHorse` / `NumberOfMenWithoutHorse` / `NumberOfMounts` / `NumberOfPackAnimals`

与坐骑相关的计数。属于缓存值，随名册版本变化重算。

### 实力

#### `public float EstimatedStrength`

缓存的军事实力估计。依赖名册 `VersionNo`；在名册变化之后读取即刷新，不要自己再缓存一层。

#### `public float CalculateCurrentStrength()`

未缓存的计算。需要反映同一 tick 内编辑结果时请用它。

#### `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

地图事件中的按阵营实力，同一支部队对进攻方与防守方的贡献可以不同。

### 补给与治疗

#### `public bool IsStarving` / `public int RemainingFoodPercentage` / `public float DaysStarving`

由部队食物模型驱动的食物状态。

#### `public float HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` 及其 `ExplainedNumber` 对应值

来自 `PartyHealingModel` 的治疗速率。英雄与普通士兵的治疗速率不同。

### 战斗

#### `public MapEvent MapEvent` / `public MapEventSide MapEventSide` / `public BattleSideEnum Side` / `OpponentSide`

当前的地图战斗归属。`MapEventSide` 的 setter 会执行移除、入队与 `AttachedParties` 重同步，请把它当成一次事务来对待。

#### `public SiegeEvent SiegeEvent`

攻城归属，转发自宿主。

### 可见性与视觉

#### `public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

按玩家视野重算 `IsVisible` 与 `IsInspected`。

#### `public void SetVisualAsDirty()` / `public bool IsVisualDirty { get; private set; }` / `public void OnVisualsUpdated()`

与地图场景的视觉刷新握手。改动地图图标要显示的内容之后，调用 `SetVisualAsDirty()`。

#### `public void SetAsCameraFollowParty()`

把该部队设为地图界面的相机跟随目标。

### 海军

#### `public MBReadOnlyList<Ship> Ships` / `public Ship FlagShip` / `public int GetShipsVersion()`

挂在部队上的船只。陆上部队为空。

## 使用示例

### 示例 1：一个函数处理两种宿主形态

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static string DescribeParty(PartyBase party)
{
    if (party == null || !party.IsValid)
    {
        return "无效";
    }

    if (party.IsMobile)
    {
        // LeaderHero 只对机动部队有效，这里读它才安全。
        return $"{party.MobileParty.StringId}：领袖 {party.LeaderHero?.Name.Name ?? "无"}，" +
               $"{party.NumberOfHealthyMembers}/{party.PartySizeLimit}";
    }

    // 聚落部队：LeaderHero 按设计为 null，不要解引用。
    return $"{party.Settlement.Name}：守备军 {party.NumberOfAllMembers}，" +
           $"俘虏 {party.NumberOfPrisoners}";
}
```

### 示例 2：在规模上限内招募

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.Party;

public static int Recruit(PartyBase party, string characterId, int count)
{
    if (party == null || !party.IsValid)
    {
        return 0;
    }

    CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>(characterId);
    if (recruit == null)
    {
        return 0;
    }

    // AddMember 会按 PartySizeLimit 钳制；直接写名册则不会。
    return party.AddMember(recruit, count);
}
```

### 示例 3：反映本 tick 内编辑的实力

```csharp
using TaleWorlds.CampaignSystem.Party;

public static float FreshStrength()
{
    PartyBase main = PartyBase.MainParty;
    if (main == null)
    {
        return 0f;
    }

    // 缓存估计值与即时计算值的对比。
    float cached = main.EstimatedStrength;
    float fresh = main.CalculateCurrentStrength();
    _ = cached;
    return fresh;
}
```

### 示例 4：响应部队进入战斗

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public sealed class BattleWatcherBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // IMbEvent<MapEvent, PartyBase, PartyBase>
        CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMapEventStarted(MapEvent mapEvent, PartyBase side1, PartyBase side2)
    {
        if (mapEvent == null || side1 == null || side2 == null)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"地图事件：{side1.Name}（{side1.EstimatedStrength:0}）对 " +
            $"{side2.Name}（{side2.EstimatedStrength:0}）"));
    }
}
```

## 风险与崩溃边界

1. **战役之外 `MainParty` 为 null。** 它经由 `Campaign.Current` 解析；尤其在静态代码或模块加载代码中，务必先判空。
2. **守备军的 `LeaderHero` 为 null。** 它转发到 `MobileParty?.LeaderHero`。守备军逻辑中无保护的使用会在每个聚落部队上抛异常。
3. **`MapEventSide` 赋值是一次事务。** 它会从旧阵营移除、加入新阵营并重同步 `AttachedParties`。中途失败会触发 “Double MapEvent” 断言；请只在没有地图事件运行时赋值，或通过 `MapEventManager` 驱动这次转移。
4. **规模上限在 `Add*` 方法里。** `MemberRoster.AddToCounts` 会绕过 `PartySizeLimit`，产出被 AI 与界面错误处理的超大部队。
5. **与存档耦合。** 三个名册、食物、船只以及自定义所有者 / 名称 / 旗帜覆盖全部序列化。重新编号或重构会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
6. **缓存的实力值。** `EstimatedStrength` 与坐骑计数依赖名册 `VersionNo`。自己缓存就必须在每次名册编辑时让缓存失效，否则数字会悄悄漂移。
7. **俘虏一致性。** `AfterLoad` 会修复 `PrisonRoster` 与 `Hero.PartyBelongedToAsPrisoner` 之间的不一致。硬改俘虏会产出只在重载后才出问题的存档；请使用抓捕 / 释放动作。
8. **`PartyBase` 不是 `Team`。** 不要在任务代码里读战役部队数据并以为它能活过这场战斗，也不要把任务状态写进它。战斗回写只在结算时发生一次。
9. **逐 tick 扫描。** `PartyBase.MainParty` 与宿主查找很廉价，但逐 tick 枚举每个部队的名册并不廉价。请订阅 `CampaignEvents.DailyTickPartyEvent`。

## 跨版本提示

- 双宿主构造、三个名册以及 `Add*` 系列在 1.3.x 与 1.4.x 中完全一致。
- 海军相关成员（`Ships`、`FlagShip`、`GetShipsVersion`）在 1.3.0 已存在并在此后扩展；旧存档在 `OnLoad` 时会得到空船只列表。请按“可能为空”而非“可能为 null”来防御。

## 参见

- [MobileParty](../MobileParty) — 机动宿主
- [Settlement](../Settlement) — 守备宿主
- [Hero](../Hero) — 所有者、领袖与俘虏
- [Clan](../Clan) — 部队所有者的阵营
- [Campaign](../Campaign) — `MainParty` 的来源
- [MobilePartyVisual](../../campaign-ext/MobilePartyVisual) — 地图场景对应物
- [SettlementVisual](../../campaign-ext/SettlementVisual) — 地图场景对应物
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南