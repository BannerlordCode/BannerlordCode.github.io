---
title: "MobileParty"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobileParty`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/MobileParty](/versions/MobileParty)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `land navigation access`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### HasLimitedWage
`public bool HasLimitedWage()`

**Purpose:** Checks whether the current object has/contains `limited wage`.

### GetAvailableWageBudget
`public int GetAvailableWageBudget()`

**Purpose:** Gets the current value of `available wage budget`.

### IsWageLimitExceeded
`public bool IsWageLimitExceeded()`

**Purpose:** Handles logic related to `is wage limit exceeded`.

### SetWagePaymentLimit
`public void SetWagePaymentLimit(int newLimit)`

**Purpose:** Sets the value or state of `wage payment limit`.

### SetNavalVisualAsDirty
`public void SetNavalVisualAsDirty()`

**Purpose:** Sets the value or state of `naval visual as dirty`.

### OnNavalVisualsUpdated
`public void OnNavalVisualsUpdated()`

**Purpose:** Called when the `naval visuals updated` event is raised.

### SetSailAtPosition
`public void SetSailAtPosition(CampaignVec2 position)`

**Purpose:** Sets the value or state of `sail at position`.

### CancelNavigationTransition
`public void CancelNavigationTransition()`

**Purpose:** Checks whether the current object can `cel navigation transition`.

### ChangeIsCurrentlyAtSeaCheat
`public void ChangeIsCurrentlyAtSeaCheat()`

**Purpose:** Handles logic related to `change is currently at sea cheat`.

### SetCustomHomeSettlement
`public void SetCustomHomeSettlement(Settlement customHomeSettlement)`

**Purpose:** Sets the value or state of `custom home settlement`.

### SetTargetSettlement
`public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

**Purpose:** Sets the value or state of `target settlement`.

### SetPartyScout
`public void SetPartyScout(Hero hero)`

**Purpose:** Sets the value or state of `party scout`.

### SetPartyQuartermaster
`public void SetPartyQuartermaster(Hero hero)`

**Purpose:** Sets the value or state of `party quartermaster`.

### SetPartyEngineer
`public void SetPartyEngineer(Hero hero)`

**Purpose:** Sets the value or state of `party engineer`.

### SetPartySurgeon
`public void SetPartySurgeon(Hero hero)`

**Purpose:** Sets the value or state of `party surgeon`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**Purpose:** Handles logic related to `change party leader`.

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**Purpose:** Called when the `party interaction` event is raised.

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Sets the value or state of `position after map change`.

### RemovePartyLeader
`public void RemovePartyLeader()`

**Purpose:** Removes `party leader` from the current collection or state.

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check positions for map change and update if needed`.

### CheckAiForMapChangeAndUpdateIfNeeded
`public void CheckAiForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check ai for map change and update if needed`.

### MovePartyToTheClosestLand
`public void MovePartyToTheClosestLand()`

**Purpose:** Handles logic related to `move party to the closest land`.

### GetBehaviorText
`public TextObject GetBehaviorText()`

**Purpose:** Gets the current value of `behavior text`.

### Initialize
`public override void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(CampaignVec2 position)`

**Purpose:** Initializes the state, resources, or bindings for `mobile party at position`.

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, bool isNaval = false)`

**Purpose:** Initializes the state, resources, or bindings for `mobile party at position`.

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f, bool isNaval = false)`

**Purpose:** Initializes the state, resources, or bindings for `mobile party around position`.

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(PartyTemplateObject pt, CampaignVec2 position)`

**Purpose:** Initializes the state, resources, or bindings for `mobile party at position`.

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(PartyTemplateObject pt, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f)`

**Purpose:** Initializes the state, resources, or bindings for `mobile party around position`.

### SetDisorganized
`public void SetDisorganized(bool isDisorganized)`

**Purpose:** Sets the value or state of `disorganized`.

### RecalculateShortTermBehavior
`public void RecalculateShortTermBehavior()`

**Purpose:** Handles logic related to `recalculate short term behavior`.

### IsFleeBehavior
`public static bool IsFleeBehavior(AiBehavior aiBehavior)`

**Purpose:** Handles logic related to `is flee behavior`.

### IsFleeing
`public bool IsFleeing()`

**Purpose:** Handles logic related to `is fleeing`.

### SetPartyUsedByQuest
`public void SetPartyUsedByQuest(bool isActivelyUsed)`

**Purpose:** Sets the value or state of `party used by quest`.

### IgnoreForHours
`public void IgnoreForHours(float hours)`

**Purpose:** Handles logic related to `ignore for hours`.

### IgnoreByOtherPartiesTill
`public void IgnoreByOtherPartiesTill(CampaignTime time)`

**Purpose:** Handles logic related to `ignore by other parties till`.

### SetAnchor
`public void SetAnchor(AnchorPoint anchor)`

**Purpose:** Sets the value or state of `anchor`.

### SetPartyObjective
`public void SetPartyObjective(MobileParty.PartyObjective objective)`

**Purpose:** Sets the value or state of `party objective`.

### UpdateVersionNo
`public void UpdateVersionNo()`

**Purpose:** Updates the state or data of `version no`.

### IsSpotted
`public bool IsSpotted()`

**Purpose:** Handles logic related to `is spotted`.

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**Purpose:** Adds `element to member roster` to the current collection or state.

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**Purpose:** Adds `prisoner` to the current collection or state.

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** Gets the current value of `position as vec3`.

### GetTotalLandStrengthWithFollowers
`public float GetTotalLandStrengthWithFollowers(bool includeNonAttachedArmyMembers = true)`

**Purpose:** Gets the current value of `total land strength with followers`.

### HasPerk
`public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

**Purpose:** Checks whether the current object has/contains `perk`.

### SetHeroPartyRole
`public void SetHeroPartyRole(Hero hero, PartyRole partyRole)`

**Purpose:** Sets the value or state of `hero party role`.

### GetHeroPartyRole
`public PartyRole GetHeroPartyRole(Hero hero)`

**Purpose:** Gets the current value of `hero party role`.

### RemoveHeroPartyRole
`public void RemoveHeroPartyRole(Hero hero)`

**Purpose:** Removes `hero party role` from the current collection or state.

### GetRoleHolder
`public Hero GetRoleHolder(PartyRole partyRole)`

**Purpose:** Gets the current value of `role holder`.

### GetEffectiveRoleHolder
`public Hero GetEffectiveRoleHolder(PartyRole partyRole)`

**Purpose:** Gets the current value of `effective role holder`.

### GetNumDaysForFoodToLast
`public int GetNumDaysForFoodToLast()`

**Purpose:** Gets the current value of `num days for food to last`.

### RecalculateLongTermPath
`public bool RecalculateLongTermPath()`

**Purpose:** Handles logic related to `recalculate long term path`.

### GetRegionSwitchCostFromLandToSea
`public int GetRegionSwitchCostFromLandToSea()`

**Purpose:** Gets the current value of `region switch cost from land to sea`.

### GetRegionSwitchCostFromSeaToLand
`public int GetRegionSwitchCostFromSeaToLand()`

**Purpose:** Gets the current value of `region switch cost from sea to land`.

### SetMoveModeHold
`public void SetMoveModeHold()`

**Purpose:** Sets the value or state of `move mode hold`.

### SetMoveEngageParty
`public void SetMoveEngageParty(MobileParty party, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move engage party`.

### SetMoveGoAroundParty
`public void SetMoveGoAroundParty(MobileParty party, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move go around party`.

### SetMoveGoToSettlement
`public void SetMoveGoToSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingThePort)`

**Purpose:** Sets the value or state of `move go to settlement`.

### SetMoveGoToPoint
`public void SetMoveGoToPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move go to point`.

### SetMoveToNearestLand
`public void SetMoveToNearestLand(Settlement settlement)`

**Purpose:** Sets the value or state of `move to nearest land`.

### SetMoveGoToInteractablePoint
`public void SetMoveGoToInteractablePoint(IInteractablePoint point, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move go to interactable point`.

### SetMoveEscortParty
`public void SetMoveEscortParty(MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isTargetingPort)`

**Purpose:** Sets the value or state of `move escort party`.

### SetMovePatrolAroundPoint
`public void SetMovePatrolAroundPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move patrol around point`.

### SetMovePatrolAroundSettlement
`public void SetMovePatrolAroundSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingPort)`

**Purpose:** Sets the value or state of `move patrol around settlement`.

### SetMoveRaidSettlement
`public void SetMoveRaidSettlement(Settlement settlement, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move raid settlement`.

### SetMoveBesiegeSettlement
`public void SetMoveBesiegeSettlement(Settlement settlement, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move besiege settlement`.

### SetMoveDefendSettlement
`public void SetMoveDefendSettlement(Settlement settlement, bool isTargetingPort, MobileParty.NavigationType navigationType)`

**Purpose:** Sets the value or state of `move defend settlement`.

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<MobileParty> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**Purpose:** Handles logic related to `start finding locatables around position`.

### FindNextLocatable
`public static MobileParty FindNextLocatable(ref LocatableSearchData<MobileParty> data)`

**Purpose:** Handles logic related to `find next locatable`.

### UpdateLocator
`public static void UpdateLocator(MobileParty party)`

**Purpose:** Updates the state or data of `locator`.

### ComputeIsWaiting
`public bool ComputeIsWaiting()`

**Purpose:** Handles logic related to `compute is waiting`.

### InitializePartyTrade
`public void InitializePartyTrade(int initialGold)`

**Purpose:** Initializes the state, resources, or bindings for `party trade`.

### AddTaxGold
`public void AddTaxGold(int amount)`

**Purpose:** Adds `tax gold` to the current collection or state.

### CreateParty
`public static MobileParty CreateParty(string stringId, PartyComponent component)`

**Purpose:** Creates a new `party` instance or object.

### SetPartyComponent
`public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)`

**Purpose:** Sets the value or state of `party component`.

### UpdatePartyComponentFlags
`public void UpdatePartyComponentFlags()`

**Purpose:** Updates the state or data of `party component flags`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new MobileParty();
value.SetLandNavigationAccess(false);
```

## See Also

- [Complete Class Catalog](../catalog)