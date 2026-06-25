---
title: "MobileParty"
description: "Auto-generated class reference for MobileParty."
---
# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `CampaignObjectBase`
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## Overview

`MobileParty` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### SetLandNavigationAccess
`public void SetLandNavigationAccess(bool access)`

**Purpose:** Assigns a new value to `land navigation access` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetLandNavigationAccess(false);
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetName();
```

### HasLimitedWage
`public bool HasLimitedWage()`

**Purpose:** Determines whether the current object already holds `limited wage`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.HasLimitedWage();
```

### GetAvailableWageBudget
`public int GetAvailableWageBudget()`

**Purpose:** Reads and returns the `available wage budget` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetAvailableWageBudget();
```

### IsWageLimitExceeded
`public bool IsWageLimitExceeded()`

**Purpose:** Determines whether the current object is in the `wage limit exceeded` state or condition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.IsWageLimitExceeded();
```

### SetWagePaymentLimit
`public void SetWagePaymentLimit(int newLimit)`

**Purpose:** Assigns a new value to `wage payment limit` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetWagePaymentLimit(0);
```

### SetNavalVisualAsDirty
`public void SetNavalVisualAsDirty()`

**Purpose:** Assigns a new value to `naval visual as dirty` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetNavalVisualAsDirty();
```

### OnNavalVisualsUpdated
`public void OnNavalVisualsUpdated()`

**Purpose:** Invoked when the `naval visuals updated` event is raised.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.OnNavalVisualsUpdated();
```

### SetSailAtPosition
`public void SetSailAtPosition(CampaignVec2 position)`

**Purpose:** Assigns a new value to `sail at position` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetSailAtPosition(position);
```

### CancelNavigationTransition
`public void CancelNavigationTransition()`

**Purpose:** Checks whether the current object meets the preconditions for `cel navigation transition`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.CancelNavigationTransition();
```

### ChangeIsCurrentlyAtSeaCheat
`public void ChangeIsCurrentlyAtSeaCheat()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.ChangeIsCurrentlyAtSeaCheat();
```

### SetCustomHomeSettlement
`public void SetCustomHomeSettlement(Settlement customHomeSettlement)`

**Purpose:** Assigns a new value to `custom home settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetCustomHomeSettlement(customHomeSettlement);
```

### SetTargetSettlement
`public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

**Purpose:** Assigns a new value to `target settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetTargetSettlement(settlement, false);
```

### SetPartyScout
`public void SetPartyScout(Hero hero)`

**Purpose:** Assigns a new value to `party scout` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyScout(hero);
```

### SetPartyQuartermaster
`public void SetPartyQuartermaster(Hero hero)`

**Purpose:** Assigns a new value to `party quartermaster` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyQuartermaster(hero);
```

### SetPartyEngineer
`public void SetPartyEngineer(Hero hero)`

**Purpose:** Assigns a new value to `party engineer` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyEngineer(hero);
```

### SetPartySurgeon
`public void SetPartySurgeon(Hero hero)`

**Purpose:** Assigns a new value to `party surgeon` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartySurgeon(hero);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.ToString();
```

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.ChangePartyLeader(newLeader);
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**Purpose:** Invoked when the `party interaction` event is raised.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.OnPartyInteraction(engagingParty);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Assigns a new value to `position after map change` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPositionAfterMapChange(newPosition);
```

### RemovePartyLeader
`public void RemovePartyLeader()`

**Purpose:** Removes `party leader` from the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RemovePartyLeader();
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Verifies whether `positions for map change and update if needed` holds true for the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### CheckAiForMapChangeAndUpdateIfNeeded
`public void CheckAiForMapChangeAndUpdateIfNeeded()`

**Purpose:** Verifies whether `ai for map change and update if needed` holds true for the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.CheckAiForMapChangeAndUpdateIfNeeded();
```

### MovePartyToTheClosestLand
`public void MovePartyToTheClosestLand()`

**Purpose:** Moves `party to the closest land` to a new position or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.MovePartyToTheClosestLand();
```

### GetBehaviorText
`public TextObject GetBehaviorText()`

**Purpose:** Reads and returns the `behavior text` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetBehaviorText();
```

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.Initialize();
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(CampaignVec2 position)`

**Purpose:** Prepares the resources, state, or bindings required by `mobile party at position`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(position);
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, bool isNaval = false)`

**Purpose:** Prepares the resources, state, or bindings required by `mobile party at position`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(memberRoster, prisonerRoster, position, false);
```

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f, bool isNaval = false)`

**Purpose:** Prepares the resources, state, or bindings required by `mobile party around position`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAroundPosition(memberRoster, prisonerRoster, position, 0, 0, false);
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(PartyTemplateObject pt, CampaignVec2 position)`

**Purpose:** Prepares the resources, state, or bindings required by `mobile party at position`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(pt, position);
```

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(PartyTemplateObject pt, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f)`

**Purpose:** Prepares the resources, state, or bindings required by `mobile party around position`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAroundPosition(pt, position, 0, 0);
```

### SetDisorganized
`public void SetDisorganized(bool isDisorganized)`

**Purpose:** Assigns a new value to `disorganized` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetDisorganized(false);
```

### RecalculateShortTermBehavior
`public void RecalculateShortTermBehavior()`

**Purpose:** Recalculates `short term behavior` to reflect the latest state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RecalculateShortTermBehavior();
```

### IsFleeBehavior
`public static bool IsFleeBehavior(AiBehavior aiBehavior)`

**Purpose:** Determines whether the current object is in the `flee behavior` state or condition.

```csharp
// Static call; no instance required
MobileParty.IsFleeBehavior(aiBehavior);
```

### IsFleeing
`public bool IsFleeing()`

**Purpose:** Determines whether the current object is in the `fleeing` state or condition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.IsFleeing();
```

### SetPartyUsedByQuest
`public void SetPartyUsedByQuest(bool isActivelyUsed)`

**Purpose:** Assigns a new value to `party used by quest` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyUsedByQuest(false);
```

### IgnoreForHours
`public void IgnoreForHours(float hours)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.IgnoreForHours(0);
```

### IgnoreByOtherPartiesTill
`public void IgnoreByOtherPartiesTill(CampaignTime time)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.IgnoreByOtherPartiesTill(time);
```

### SetAnchor
`public void SetAnchor(AnchorPoint anchor)`

**Purpose:** Assigns a new value to `anchor` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetAnchor(anchor);
```

### SetPartyObjective
`public void SetPartyObjective(MobileParty.PartyObjective objective)`

**Purpose:** Assigns a new value to `party objective` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyObjective(objective);
```

### UpdateVersionNo
`public void UpdateVersionNo()`

**Purpose:** Recalculates and stores the latest representation of `version no`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.UpdateVersionNo();
```

### IsSpotted
`public bool IsSpotted()`

**Purpose:** Determines whether the current object is in the `spotted` state or condition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.IsSpotted();
```

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**Purpose:** Adds `element to member roster` to the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.AddElementToMemberRoster(element, 0, false);
```

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**Purpose:** Adds `prisoner` to the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.AddPrisoner(element, 0);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** Reads and returns the `position as vec3` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetPositionAsVec3();
```

### GetTotalLandStrengthWithFollowers
`public float GetTotalLandStrengthWithFollowers(bool includeNonAttachedArmyMembers = true)`

**Purpose:** Reads and returns the `total land strength with followers` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetTotalLandStrengthWithFollowers(false);
```

### HasPerk
`public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

**Purpose:** Determines whether the current object already holds `perk`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.HasPerk(perk, false);
```

### SetHeroPartyRole
`public void SetHeroPartyRole(Hero hero, PartyRole partyRole)`

**Purpose:** Assigns a new value to `hero party role` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetHeroPartyRole(hero, partyRole);
```

### GetHeroPartyRole
`public PartyRole GetHeroPartyRole(Hero hero)`

**Purpose:** Reads and returns the `hero party role` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetHeroPartyRole(hero);
```

### RemoveHeroPartyRole
`public void RemoveHeroPartyRole(Hero hero)`

**Purpose:** Removes `hero party role` from the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RemoveHeroPartyRole(hero);
```

### GetRoleHolder
`public Hero GetRoleHolder(PartyRole partyRole)`

**Purpose:** Reads and returns the `role holder` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetRoleHolder(partyRole);
```

### GetEffectiveRoleHolder
`public Hero GetEffectiveRoleHolder(PartyRole partyRole)`

**Purpose:** Reads and returns the `effective role holder` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetEffectiveRoleHolder(partyRole);
```

### GetNumDaysForFoodToLast
`public int GetNumDaysForFoodToLast()`

**Purpose:** Reads and returns the `num days for food to last` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetNumDaysForFoodToLast();
```

### RecalculateLongTermPath
`public bool RecalculateLongTermPath()`

**Purpose:** Recalculates `long term path` to reflect the latest state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.RecalculateLongTermPath();
```

### GetRegionSwitchCostFromLandToSea
`public int GetRegionSwitchCostFromLandToSea()`

**Purpose:** Reads and returns the `region switch cost from land to sea` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetRegionSwitchCostFromLandToSea();
```

### GetRegionSwitchCostFromSeaToLand
`public int GetRegionSwitchCostFromSeaToLand()`

**Purpose:** Reads and returns the `region switch cost from sea to land` value held by the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetRegionSwitchCostFromSeaToLand();
```

### SetMoveModeHold
`public void SetMoveModeHold()`

**Purpose:** Assigns a new value to `move mode hold` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveModeHold();
```

### SetMoveEngageParty
`public void SetMoveEngageParty(MobileParty party, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move engage party` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveEngageParty(party, navigationType);
```

### SetMoveGoAroundParty
`public void SetMoveGoAroundParty(MobileParty party, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move go around party` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoAroundParty(party, navigationType);
```

### SetMoveGoToSettlement
`public void SetMoveGoToSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingThePort)`

**Purpose:** Assigns a new value to `move go to settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToSettlement(settlement, navigationType, false);
```

### SetMoveGoToPoint
`public void SetMoveGoToPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move go to point` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToPoint(point, navigationType);
```

### SetMoveToNearestLand
`public void SetMoveToNearestLand(Settlement settlement)`

**Purpose:** Assigns a new value to `move to nearest land` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveToNearestLand(settlement);
```

### SetMoveGoToInteractablePoint
`public void SetMoveGoToInteractablePoint(IInteractablePoint point, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move go to interactable point` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToInteractablePoint(point, navigationType);
```

### SetMoveEscortParty
`public void SetMoveEscortParty(MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isTargetingPort)`

**Purpose:** Assigns a new value to `move escort party` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveEscortParty(mobileParty, navigationType, false);
```

### SetMovePatrolAroundPoint
`public void SetMovePatrolAroundPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move patrol around point` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMovePatrolAroundPoint(point, navigationType);
```

### SetMovePatrolAroundSettlement
`public void SetMovePatrolAroundSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingPort)`

**Purpose:** Assigns a new value to `move patrol around settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMovePatrolAroundSettlement(settlement, navigationType, false);
```

### SetMoveRaidSettlement
`public void SetMoveRaidSettlement(Settlement settlement, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move raid settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveRaidSettlement(settlement, navigationType);
```

### SetMoveBesiegeSettlement
`public void SetMoveBesiegeSettlement(Settlement settlement, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move besiege settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveBesiegeSettlement(settlement, navigationType);
```

### SetMoveDefendSettlement
`public void SetMoveDefendSettlement(Settlement settlement, bool isTargetingPort, MobileParty.NavigationType navigationType)`

**Purpose:** Assigns a new value to `move defend settlement` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveDefendSettlement(settlement, false, navigationType);
```

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<MobileParty> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**Purpose:** Starts the `finding locatables around position` flow or state machine.

```csharp
// Static call; no instance required
MobileParty.StartFindingLocatablesAroundPosition(position, 0);
```

### FindNextLocatable
`public static MobileParty FindNextLocatable(ref LocatableSearchData<MobileParty> data)`

**Purpose:** Looks up the matching `next locatable` in the current collection or scope.

```csharp
// Static call; no instance required
MobileParty.FindNextLocatable(data);
```

### UpdateLocator
`public static void UpdateLocator(MobileParty party)`

**Purpose:** Recalculates and stores the latest representation of `locator`.

```csharp
// Static call; no instance required
MobileParty.UpdateLocator(party);
```

### ComputeIsWaiting
`public bool ComputeIsWaiting()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.ComputeIsWaiting();
```

### InitializePartyTrade
`public void InitializePartyTrade(int initialGold)`

**Purpose:** Prepares the resources, state, or bindings required by `party trade`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializePartyTrade(0);
```

### AddTaxGold
`public void AddTaxGold(int amount)`

**Purpose:** Adds `tax gold` to the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.AddTaxGold(0);
```

### CreateParty
`public static MobileParty CreateParty(string stringId, PartyComponent component)`

**Purpose:** Constructs a new `party` entity and returns it to the caller.

```csharp
// Static call; no instance required
MobileParty.CreateParty("example", component);
```

### SetPartyComponent
`public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)`

**Purpose:** Assigns a new value to `party component` and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyComponent(partyComponent, false);
```

### UpdatePartyComponentFlags
`public void UpdatePartyComponentFlags()`

**Purpose:** Recalculates and stores the latest representation of `party component flags`.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.UpdatePartyComponentFlags();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MobileParty mobileParty = ...;
mobileParty.SetLandNavigationAccess(false);
```

## See Also

- [Area Index](../)