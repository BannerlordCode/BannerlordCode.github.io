---
title: "MobileParty"
description: "MobileParty 的自动生成类参考。"
---
# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `CampaignObjectBase`
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## 概述

`MobileParty` 位于 `TaleWorlds.CampaignSystem.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MainParty` | `public static MobileParty MainParty { get; }` |
| `All` | `public static MBReadOnlyList<MobileParty> All { get; }` |
| `AllCaravanParties` | `public static MBReadOnlyList<MobileParty> AllCaravanParties { get; }` |
| `AllPatrolParties` | `public static MBReadOnlyList<MobileParty> AllPatrolParties { get; }` |
| `AllBanditParties` | `public static MBReadOnlyList<MobileParty> AllBanditParties { get; }` |
| `AllLordParties` | `public static MBReadOnlyList<MobileParty> AllLordParties { get; }` |
| `AllGarrisonParties` | `public static MBReadOnlyList<MobileParty> AllGarrisonParties { get; }` |
| `AllMilitiaParties` | `public static MBReadOnlyList<MobileParty> AllMilitiaParties { get; }` |
| `AllVillagerParties` | `public static MBReadOnlyList<MobileParty> AllVillagerParties { get; }` |
| `AllCustomParties` | `public static MBReadOnlyList<MobileParty> AllCustomParties { get; }` |
| `AllPartiesWithoutPartyComponent` | `public static MBReadOnlyList<MobileParty> AllPartiesWithoutPartyComponent { get; }` |
| `Count` | `public static int Count { get; }` |
| `ConversationParty` | `public static MobileParty ConversationParty { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `LastVisitedSettlement` | `public Settlement LastVisitedSettlement { get; }` |
| `Bearing` | `public Vec2 Bearing { get; }` |
| `AttachedParties` | `public MBReadOnlyList<MobileParty> AttachedParties { get; }` |
| `HasLandNavigationCapability` | `public bool HasLandNavigationCapability { get; }` |
| `Ships` | `public MBReadOnlyList<Ship> Ships { get; }` |
| `HasNavalNavigationCapability` | `public bool HasNavalNavigationCapability { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `PaymentLimit` | `public int PaymentLimit { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `ArmyPositionAdder` | `public Vec2 ArmyPositionAdder { get; }` |
| `AiBehaviorTarget` | `public CampaignVec2 AiBehaviorTarget { get; }` |
| `Objective` | `public MobileParty.PartyObjective Objective { get; }` |
| `Ai` | `public MobilePartyAi Ai { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsInRaftState` | `public bool IsInRaftState { get; set; }` |
| `DisorganizedUntilTime` | `public CampaignTime DisorganizedUntilTime { get; }` |
| `LastCalculatedBaseSpeed` | `public float LastCalculatedBaseSpeed { get; }` |
| `ThinkParamsCache` | `public PartyThinkParams ThinkParamsCache { get; }` |
| `Speed` | `public float Speed { get; }` |
| `SpeedExplained` | `public ExplainedNumber SpeedExplained { get; }` |
| `ShortTermTargetParty` | `public MobileParty ShortTermTargetParty { get; }` |
| `ShortTermTargetSettlement` | `public Settlement ShortTermTargetSettlement { get; }` |
| `IsDisorganized` | `public bool IsDisorganized { get; }` |
| `IsCurrentlyUsedByAQuest` | `public bool IsCurrentlyUsedByAQuest { get; }` |
| `ShortTermBehavior` | `public AiBehavior ShortTermBehavior { get; }` |
| `IsPartyTradeActive` | `public bool IsPartyTradeActive { get; }` |
| `PartyTradeGold` | `public int PartyTradeGold { get; set; }` |
| `PartyTradeTaxGold` | `public int PartyTradeTaxGold { get; }` |
| `StationaryStartTime` | `public CampaignTime StationaryStartTime { get; }` |
| `VersionNo` | `public int VersionNo { get; }` |
| `ShouldJoinPlayerBattles` | `public bool ShouldJoinPlayerBattles { get; set; }` |
| `IsDisbanding` | `public bool IsDisbanding { get; set; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `NavigationCapability` | `public MobileParty.NavigationType NavigationCapability { get; }` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea { get; set; }` |
| `IsNavalVisualDirty` | `public bool IsNavalVisualDirty { get; }` |
| `IsTargetingPort` | `public bool IsTargetingPort { get; }` |
| `Anchor` | `public AnchorPoint Anchor { get; }` |
| `IsTransitionInProgress` | `public bool IsTransitionInProgress { get; }` |
| `EndPositionForNavigationTransition` | `public CampaignVec2 EndPositionForNavigationTransition { get; }` |
| `NavigationTransitionStartTime` | `public CampaignTime NavigationTransitionStartTime { get; }` |
| `NavigationTransitionDuration` | `public CampaignTime NavigationTransitionDuration { get; }` |
| `DesiredAiNavigationType` | `public MobileParty.NavigationType DesiredAiNavigationType { get; set; }` |
| `CurrentSettlement` | `public Settlement CurrentSettlement { get; set; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `AttachedTo` | `public MobileParty AttachedTo { get; set; }` |
| `Army` | `public Army Army { get; set; }` |
| `BesiegerCamp` | `public BesiegerCamp BesiegerCamp { get; set; }` |
| `DefaultBehavior` | `public AiBehavior DefaultBehavior { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |
| `TargetPosition` | `public CampaignVec2 TargetPosition { get; set; }` |
| `TargetParty` | `public MobileParty TargetParty { get; set; }` |
| `LeaderHero` | `public Hero LeaderHero { get; set; }` |
| `Owner` | `public Hero Owner { get; }` |
| `EffectiveScout` | `public Hero EffectiveScout { get; }` |
| `EffectiveQuartermaster` | `public Hero EffectiveQuartermaster { get; }` |
| `EffectiveEngineer` | `public Hero EffectiveEngineer { get; }` |
| `EffectiveSurgeon` | `public Hero EffectiveSurgeon { get; }` |
| `RecentEventsMorale` | `public float RecentEventsMorale { get; set; }` |
| `SeeingRangeExplanation` | `public ExplainedNumber SeeingRangeExplanation { get; }` |
| `InventoryCapacity` | `public int InventoryCapacity { get; }` |
| `InventoryCapacityExplainedNumber` | `public ExplainedNumber InventoryCapacityExplainedNumber { get; }` |
| `TotalWeightCarried` | `public float TotalWeightCarried { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `TotalWeightCarriedExplainedNumber` | `public ExplainedNumber TotalWeightCarriedExplainedNumber { get; }` |
| `Morale` | `public float Morale { get; }` |
| `FoodChange` | `public float FoodChange { get; }` |
| `BaseFoodChange` | `public float BaseFoodChange { get; }` |
| `ActualClan` | `public Clan ActualClan { get; set; }` |
| `FoodChangeExplained` | `public ExplainedNumber FoodChangeExplained { get; }` |
| `MoraleExplained` | `public ExplainedNumber MoraleExplained { get; }` |
| `CurrentNavigationFace` | `public PathFaceRecord CurrentNavigationFace { get; }` |
| `PathBegin` | `public int PathBegin { get; }` |
| `ForceAiNoPathMode` | `public bool ForceAiNoPathMode { get; set; }` |
| `EventPositionAdder` | `public Vec2 EventPositionAdder { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `Position` | `public CampaignVec2 Position { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `GetPosition2D` | `public Vec2 GetPosition2D { get; }` |
| `TotalWage` | `public int TotalWage { get; }` |
| `TotalWageExplained` | `public ExplainedNumber TotalWageExplained { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `MemberRoster` | `public TroopRoster MemberRoster { get; }` |
| `PrisonRoster` | `public TroopRoster PrisonRoster { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `IsMainParty` | `public bool IsMainParty { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `ArmyName` | `public TextObject ArmyName { get; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `Food` | `public float Food { get; }` |
| `TotalFoodAtInventory` | `public int TotalFoodAtInventory { get; }` |
| `SeeingRange` | `public float SeeingRange { get; }` |
| `BesiegedSettlement` | `public Settlement BesiegedSettlement { get; }` |
| `IsEngaging` | `public bool IsEngaging { get; }` |
| `PartySizeRatio` | `public float PartySizeRatio { get; }` |
| `VisualPosition2DWithoutError` | `public Vec2 VisualPosition2DWithoutError { get; }` |
| `IsMoving` | `public bool IsMoving { get; }` |
| `ShouldBeIgnored` | `public bool ShouldBeIgnored { get; }` |
| `VillagerPartyComponent` | `public VillagerPartyComponent VillagerPartyComponent { get; }` |
| `CaravanPartyComponent` | `public CaravanPartyComponent CaravanPartyComponent { get; }` |
| `WarPartyComponent` | `public WarPartyComponent WarPartyComponent { get; }` |
| `BanditPartyComponent` | `public BanditPartyComponent BanditPartyComponent { get; }` |
| `PatrolPartyComponent` | `public PatrolPartyComponent PatrolPartyComponent { get; }` |
| `LordPartyComponent` | `public LordPartyComponent LordPartyComponent { get; }` |
| `GarrisonPartyComponent` | `public GarrisonPartyComponent GarrisonPartyComponent { get; }` |
| `PartyComponent` | `public PartyComponent PartyComponent { get; }` |
| `IsMilitia` | `public bool IsMilitia { get; }` |
| `IsLordParty` | `public bool IsLordParty { get; }` |
| `IsVillager` | `public bool IsVillager { get; }` |
| `IsCaravan` | `public bool IsCaravan { get; }` |
| `IsPatrolParty` | `public bool IsPatrolParty { get; }` |
| `IsGarrison` | `public bool IsGarrison { get; }` |
| `IsCustomParty` | `public bool IsCustomParty { get; }` |
| `IsBandit` | `public bool IsBandit { get; }` |
| `IsBanditBossParty` | `public bool IsBanditBossParty { get; }` |
| `AvoidHostileActions` | `public bool AvoidHostileActions { get; }` |

## 主要方法

### SetLandNavigationAccess
`public void SetLandNavigationAccess(bool access)`

**用途 / Purpose:** 为 「land navigation access」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetLandNavigationAccess(false);
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetName();
```

### HasLimitedWage
`public bool HasLimitedWage()`

**用途 / Purpose:** 判断当前对象是否已经持有 「limited wage」。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.HasLimitedWage();
```

### GetAvailableWageBudget
`public int GetAvailableWageBudget()`

**用途 / Purpose:** 读取并返回当前对象中 「available wage budget」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetAvailableWageBudget();
```

### IsWageLimitExceeded
`public bool IsWageLimitExceeded()`

**用途 / Purpose:** 判断当前对象是否处于 「wage limit exceeded」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.IsWageLimitExceeded();
```

### SetWagePaymentLimit
`public void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 为 「wage payment limit」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetWagePaymentLimit(0);
```

### SetNavalVisualAsDirty
`public void SetNavalVisualAsDirty()`

**用途 / Purpose:** 为 「naval visual as dirty」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetNavalVisualAsDirty();
```

### OnNavalVisualsUpdated
`public void OnNavalVisualsUpdated()`

**用途 / Purpose:** 在 「naval visuals updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.OnNavalVisualsUpdated();
```

### SetSailAtPosition
`public void SetSailAtPosition(CampaignVec2 position)`

**用途 / Purpose:** 为 「sail at position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetSailAtPosition(position);
```

### CancelNavigationTransition
`public void CancelNavigationTransition()`

**用途 / Purpose:** 检查当前对象是否满足 「cel navigation transition」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.CancelNavigationTransition();
```

### ChangeIsCurrentlyAtSeaCheat
`public void ChangeIsCurrentlyAtSeaCheat()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.ChangeIsCurrentlyAtSeaCheat();
```

### SetCustomHomeSettlement
`public void SetCustomHomeSettlement(Settlement customHomeSettlement)`

**用途 / Purpose:** 为 「custom home settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetCustomHomeSettlement(customHomeSettlement);
```

### SetTargetSettlement
`public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

**用途 / Purpose:** 为 「target settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetTargetSettlement(settlement, false);
```

### SetPartyScout
`public void SetPartyScout(Hero hero)`

**用途 / Purpose:** 为 「party scout」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartyScout(hero);
```

### SetPartyQuartermaster
`public void SetPartyQuartermaster(Hero hero)`

**用途 / Purpose:** 为 「party quartermaster」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartyQuartermaster(hero);
```

### SetPartyEngineer
`public void SetPartyEngineer(Hero hero)`

**用途 / Purpose:** 为 「party engineer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartyEngineer(hero);
```

### SetPartySurgeon
`public void SetPartySurgeon(Hero hero)`

**用途 / Purpose:** 为 「party surgeon」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartySurgeon(hero);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.ToString();
```

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.ChangePartyLeader(newLeader);
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**用途 / Purpose:** 在 「party interaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.OnPartyInteraction(engagingParty);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 为 「position after map change」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPositionAfterMapChange(newPosition);
```

### RemovePartyLeader
`public void RemovePartyLeader()`

**用途 / Purpose:** 从当前容器或状态中移除 「party leader」。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.RemovePartyLeader();
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 检查「positions for map change and update if needed」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### CheckAiForMapChangeAndUpdateIfNeeded
`public void CheckAiForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 检查「ai for map change and update if needed」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.CheckAiForMapChangeAndUpdateIfNeeded();
```

### MovePartyToTheClosestLand
`public void MovePartyToTheClosestLand()`

**用途 / Purpose:** 移动「party to the closest land」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.MovePartyToTheClosestLand();
```

### GetBehaviorText
`public TextObject GetBehaviorText()`

**用途 / Purpose:** 读取并返回当前对象中 「behavior text」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetBehaviorText();
```

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.Initialize();
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(CampaignVec2 position)`

**用途 / Purpose:** 为 「mobile party at position」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(position);
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, bool isNaval = false)`

**用途 / Purpose:** 为 「mobile party at position」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(memberRoster, prisonerRoster, position, false);
```

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f, bool isNaval = false)`

**用途 / Purpose:** 为 「mobile party around position」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAroundPosition(memberRoster, prisonerRoster, position, 0, 0, false);
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(PartyTemplateObject pt, CampaignVec2 position)`

**用途 / Purpose:** 为 「mobile party at position」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(pt, position);
```

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(PartyTemplateObject pt, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f)`

**用途 / Purpose:** 为 「mobile party around position」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAroundPosition(pt, position, 0, 0);
```

### SetDisorganized
`public void SetDisorganized(bool isDisorganized)`

**用途 / Purpose:** 为 「disorganized」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetDisorganized(false);
```

### RecalculateShortTermBehavior
`public void RecalculateShortTermBehavior()`

**用途 / Purpose:** 重新计算「short term behavior」以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.RecalculateShortTermBehavior();
```

### IsFleeBehavior
`public static bool IsFleeBehavior(AiBehavior aiBehavior)`

**用途 / Purpose:** 判断当前对象是否处于 「flee behavior」 状态或条件。

```csharp
// 静态调用，不需要实例
MobileParty.IsFleeBehavior(aiBehavior);
```

### IsFleeing
`public bool IsFleeing()`

**用途 / Purpose:** 判断当前对象是否处于 「fleeing」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.IsFleeing();
```

### SetPartyUsedByQuest
`public void SetPartyUsedByQuest(bool isActivelyUsed)`

**用途 / Purpose:** 为 「party used by quest」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartyUsedByQuest(false);
```

### IgnoreForHours
`public void IgnoreForHours(float hours)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.IgnoreForHours(0);
```

### IgnoreByOtherPartiesTill
`public void IgnoreByOtherPartiesTill(CampaignTime time)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.IgnoreByOtherPartiesTill(time);
```

### SetAnchor
`public void SetAnchor(AnchorPoint anchor)`

**用途 / Purpose:** 为 「anchor」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetAnchor(anchor);
```

### SetPartyObjective
`public void SetPartyObjective(MobileParty.PartyObjective objective)`

**用途 / Purpose:** 为 「party objective」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartyObjective(objective);
```

### UpdateVersionNo
`public void UpdateVersionNo()`

**用途 / Purpose:** 重新计算并更新 「version no」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.UpdateVersionNo();
```

### IsSpotted
`public bool IsSpotted()`

**用途 / Purpose:** 判断当前对象是否处于 「spotted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.IsSpotted();
```

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**用途 / Purpose:** 将 「element to member roster」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.AddElementToMemberRoster(element, 0, false);
```

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**用途 / Purpose:** 将 「prisoner」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.AddPrisoner(element, 0);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**用途 / Purpose:** 读取并返回当前对象中 「position as vec3」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetPositionAsVec3();
```

### GetTotalLandStrengthWithFollowers
`public float GetTotalLandStrengthWithFollowers(bool includeNonAttachedArmyMembers = true)`

**用途 / Purpose:** 读取并返回当前对象中 「total land strength with followers」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetTotalLandStrengthWithFollowers(false);
```

### HasPerk
`public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

**用途 / Purpose:** 判断当前对象是否已经持有 「perk」。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.HasPerk(perk, false);
```

### SetHeroPartyRole
`public void SetHeroPartyRole(Hero hero, PartyRole partyRole)`

**用途 / Purpose:** 为 「hero party role」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetHeroPartyRole(hero, partyRole);
```

### GetHeroPartyRole
`public PartyRole GetHeroPartyRole(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「hero party role」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetHeroPartyRole(hero);
```

### RemoveHeroPartyRole
`public void RemoveHeroPartyRole(Hero hero)`

**用途 / Purpose:** 从当前容器或状态中移除 「hero party role」。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.RemoveHeroPartyRole(hero);
```

### GetRoleHolder
`public Hero GetRoleHolder(PartyRole partyRole)`

**用途 / Purpose:** 读取并返回当前对象中 「role holder」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetRoleHolder(partyRole);
```

### GetEffectiveRoleHolder
`public Hero GetEffectiveRoleHolder(PartyRole partyRole)`

**用途 / Purpose:** 读取并返回当前对象中 「effective role holder」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetEffectiveRoleHolder(partyRole);
```

### GetNumDaysForFoodToLast
`public int GetNumDaysForFoodToLast()`

**用途 / Purpose:** 读取并返回当前对象中 「num days for food to last」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetNumDaysForFoodToLast();
```

### RecalculateLongTermPath
`public bool RecalculateLongTermPath()`

**用途 / Purpose:** 重新计算「long term path」以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.RecalculateLongTermPath();
```

### GetRegionSwitchCostFromLandToSea
`public int GetRegionSwitchCostFromLandToSea()`

**用途 / Purpose:** 读取并返回当前对象中 「region switch cost from land to sea」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetRegionSwitchCostFromLandToSea();
```

### GetRegionSwitchCostFromSeaToLand
`public int GetRegionSwitchCostFromSeaToLand()`

**用途 / Purpose:** 读取并返回当前对象中 「region switch cost from sea to land」 的结果。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.GetRegionSwitchCostFromSeaToLand();
```

### SetMoveModeHold
`public void SetMoveModeHold()`

**用途 / Purpose:** 为 「move mode hold」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveModeHold();
```

### SetMoveEngageParty
`public void SetMoveEngageParty(MobileParty party, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move engage party」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveEngageParty(party, navigationType);
```

### SetMoveGoAroundParty
`public void SetMoveGoAroundParty(MobileParty party, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move go around party」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveGoAroundParty(party, navigationType);
```

### SetMoveGoToSettlement
`public void SetMoveGoToSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingThePort)`

**用途 / Purpose:** 为 「move go to settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToSettlement(settlement, navigationType, false);
```

### SetMoveGoToPoint
`public void SetMoveGoToPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move go to point」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToPoint(point, navigationType);
```

### SetMoveToNearestLand
`public void SetMoveToNearestLand(Settlement settlement)`

**用途 / Purpose:** 为 「move to nearest land」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveToNearestLand(settlement);
```

### SetMoveGoToInteractablePoint
`public void SetMoveGoToInteractablePoint(IInteractablePoint point, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move go to interactable point」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToInteractablePoint(point, navigationType);
```

### SetMoveEscortParty
`public void SetMoveEscortParty(MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isTargetingPort)`

**用途 / Purpose:** 为 「move escort party」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveEscortParty(mobileParty, navigationType, false);
```

### SetMovePatrolAroundPoint
`public void SetMovePatrolAroundPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move patrol around point」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMovePatrolAroundPoint(point, navigationType);
```

### SetMovePatrolAroundSettlement
`public void SetMovePatrolAroundSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingPort)`

**用途 / Purpose:** 为 「move patrol around settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMovePatrolAroundSettlement(settlement, navigationType, false);
```

### SetMoveRaidSettlement
`public void SetMoveRaidSettlement(Settlement settlement, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move raid settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveRaidSettlement(settlement, navigationType);
```

### SetMoveBesiegeSettlement
`public void SetMoveBesiegeSettlement(Settlement settlement, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move besiege settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveBesiegeSettlement(settlement, navigationType);
```

### SetMoveDefendSettlement
`public void SetMoveDefendSettlement(Settlement settlement, bool isTargetingPort, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 为 「move defend settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetMoveDefendSettlement(settlement, false, navigationType);
```

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<MobileParty> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**用途 / Purpose:** 启动「finding locatables around position」流程或状态机。

```csharp
// 静态调用，不需要实例
MobileParty.StartFindingLocatablesAroundPosition(position, 0);
```

### FindNextLocatable
`public static MobileParty FindNextLocatable(ref LocatableSearchData<MobileParty> data)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「next locatable」。

```csharp
// 静态调用，不需要实例
MobileParty.FindNextLocatable(data);
```

### UpdateLocator
`public static void UpdateLocator(MobileParty party)`

**用途 / Purpose:** 重新计算并更新 「locator」 的最新表示。

```csharp
// 静态调用，不需要实例
MobileParty.UpdateLocator(party);
```

### ComputeIsWaiting
`public bool ComputeIsWaiting()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.ComputeIsWaiting();
```

### InitializePartyTrade
`public void InitializePartyTrade(int initialGold)`

**用途 / Purpose:** 为 「party trade」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.InitializePartyTrade(0);
```

### AddTaxGold
`public void AddTaxGold(int amount)`

**用途 / Purpose:** 将 「tax gold」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.AddTaxGold(0);
```

### CreateParty
`public static MobileParty CreateParty(string stringId, PartyComponent component)`

**用途 / Purpose:** 构建一个新的 「party」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MobileParty.CreateParty("example", component);
```

### SetPartyComponent
`public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)`

**用途 / Purpose:** 为 「party component」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.SetPartyComponent(partyComponent, false);
```

### UpdatePartyComponentFlags
`public void UpdatePartyComponentFlags()`

**用途 / Purpose:** 重新计算并更新 「party component flags」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
mobileParty.UpdatePartyComponentFlags();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MobileParty 实例
MobileParty mobileParty = ...;
var result = mobileParty.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MobileParty mobileParty = ...;
mobileParty.SetLandNavigationAccess(false);
```

## 参见

- [本区域目录](../)