---
title: "MobileParty"
description: "Auto-generated class reference for MobileParty."
---
# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `CampaignObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobileParty.cs`

## Overview

`MobileParty` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `LastVisitedSettlement` | `public Settlement LastVisitedSettlement { get; }` |
| `Bearing` | `public Vec2 Bearing { get; }` |
| `HasLandNavigationCapability` | `public bool HasLandNavigationCapability { get; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `Banner` | `public Banner Banner { get; }` |
| `ArmyPositionAdder` | `public Vec2 ArmyPositionAdder { get; }` |
| `Objective` | `public PartyObjective Objective { get; }` |
| `Ai` | `public MobilePartyAi Ai { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsInRaftState` | `public bool IsInRaftState { get; set; }` |
| `ThinkParamsCache` | `public PartyThinkParams ThinkParamsCache { get; }` |
| `Speed` | `public float Speed { get; }` |
| `SpeedExplained` | `public ExplainedNumber SpeedExplained { get; }` |
| `ShortTermBehavior` | `public AiBehavior ShortTermBehavior { get; }` |
| `IsPartyTradeActive` | `public bool IsPartyTradeActive { get; }` |
| `PartyTradeGold` | `public int PartyTradeGold { get; set; }` |
| `PartyTradeTaxGold` | `public int PartyTradeTaxGold { get; }` |
| `StationaryStartTime` | `public CampaignTime StationaryStartTime { get; }` |
| `VersionNo` | `public int VersionNo { get; }` |
| `ShouldJoinPlayerBattles` | `public bool ShouldJoinPlayerBattles { get; set; }` |
| `IsDisbanding` | `public bool IsDisbanding { get; set; }` |
| `NavigationCapability` | `public NavigationType NavigationCapability { get; }` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea { get; set; }` |
| `IsNavalVisualDirty` | `public bool IsNavalVisualDirty { get; }` |
| `IsTargetingPort` | `public bool IsTargetingPort { get; }` |
| `Anchor` | `public AnchorPoint Anchor { get; }` |
| `EndPositionForNavigationTransition` | `public CampaignVec2 EndPositionForNavigationTransition { get; }` |
| `NavigationTransitionStartTime` | `public CampaignTime NavigationTransitionStartTime { get; }` |
| `NavigationTransitionDuration` | `public CampaignTime NavigationTransitionDuration { get; }` |
| `DesiredAiNavigationType` | `public NavigationType DesiredAiNavigationType { get; set; }` |
| `CurrentSettlement` | `public Settlement CurrentSettlement { get; set; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `AttachedTo` | `public MobileParty AttachedTo { get; set; }` |
| `Army` | `public Army Army { get; set; }` |
| `BesiegerCamp` | `public BesiegerCamp BesiegerCamp { get; set; }` |
| `DefaultBehavior` | `public AiBehavior DefaultBehavior { get; }` |
| `TargetPosition` | `public CampaignVec2 TargetPosition { get; set; }` |
| `TargetParty` | `public MobileParty TargetParty { get; set; }` |
| `EffectiveScout` | `public Hero EffectiveScout { get; }` |
| `EffectiveQuartermaster` | `public Hero EffectiveQuartermaster { get; }` |
| `EffectiveEngineer` | `public Hero EffectiveEngineer { get; }` |
| `EffectiveSurgeon` | `public Hero EffectiveSurgeon { get; }` |
| `EffectiveFirstMate` | `public Hero EffectiveFirstMate { get; }` |
| `EffectiveNavigator` | `public Hero EffectiveNavigator { get; }` |
| `RecentEventsMorale` | `public float RecentEventsMorale { get; set; }` |
| `TotalWeightCarried` | `public float TotalWeightCarried { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `Morale` | `public float Morale { get; }` |
| `FoodChange` | `public float FoodChange { get; }` |
| `ActualClan` | `public Clan ActualClan { get; set; }` |
| `FoodChangeExplained` | `public ExplainedNumber FoodChangeExplained { get; }` |
| `PathBegin` | `public int PathBegin { get; }` |
| `ForceAiNoPathMode` | `public bool ForceAiNoPathMode { get; set; }` |
| `EventPositionAdder` | `public Vec2 EventPositionAdder { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `Position` | `public CampaignVec2 Position { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `ArmyName` | `public TextObject ArmyName { get; }` |
| `IsEngaging` | `public bool IsEngaging { get; }` |
| `PartySizeRatio` | `public float PartySizeRatio { get; }` |
| `IsMoving` | `public bool IsMoving { get; }` |
| `ShouldBeIgnored` | `public bool ShouldBeIgnored { get; }` |
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

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.ToString();
```

### SetLandNavigationAccess
`public void SetLandNavigationAccess(bool access)`

**Purpose:** **Purpose:** Assigns a new value to land navigation access and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetLandNavigationAccess(false);
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetName();
```

### HasLimitedWage
`public bool HasLimitedWage()`

**Purpose:** **Purpose:** Determines whether the this instance already holds limited wage.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.HasLimitedWage();
```

### GetAvailableWageBudget
`public int GetAvailableWageBudget()`

**Purpose:** **Purpose:** Reads and returns the available wage budget value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetAvailableWageBudget();
```

### IsWageLimitExceeded
`public bool IsWageLimitExceeded()`

**Purpose:** **Purpose:** Determines whether the this instance is in the wage limit exceeded state or condition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.IsWageLimitExceeded();
```

### SetWagePaymentLimit
`public void SetWagePaymentLimit(int newLimit)`

**Purpose:** **Purpose:** Assigns a new value to wage payment limit and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetWagePaymentLimit(0);
```

### SetNavalVisualAsDirty
`public void SetNavalVisualAsDirty()`

**Purpose:** **Purpose:** Assigns a new value to naval visual as dirty and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetNavalVisualAsDirty();
```

### OnNavalVisualsUpdated
`public void OnNavalVisualsUpdated()`

**Purpose:** **Purpose:** Invoked when the naval visuals updated event is raised.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.OnNavalVisualsUpdated();
```

### SetSailAtPosition
`public void SetSailAtPosition(CampaignVec2 position)`

**Purpose:** **Purpose:** Assigns a new value to sail at position and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetSailAtPosition(position);
```

### DisembarkToPosition
`public void DisembarkToPosition(CampaignVec2 position)`

**Purpose:** **Purpose:** Executes the DisembarkToPosition logic.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.DisembarkToPosition(position);
```

### CancelNavigationTransition
`public void CancelNavigationTransition()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for cel navigation transition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.CancelNavigationTransition();
```

### ChangeIsCurrentlyAtSeaCheat
`public void ChangeIsCurrentlyAtSeaCheat()`

**Purpose:** **Purpose:** Executes the ChangeIsCurrentlyAtSeaCheat logic.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.ChangeIsCurrentlyAtSeaCheat();
```

### SetCustomHomeSettlement
`public void SetCustomHomeSettlement(Settlement customHomeSettlement)`

**Purpose:** **Purpose:** Assigns a new value to custom home settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetCustomHomeSettlement(customHomeSettlement);
```

### SetTargetSettlement
`public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

**Purpose:** **Purpose:** Assigns a new value to target settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetTargetSettlement(settlement, false);
```

### SetPartyScout
`public void SetPartyScout(Hero hero)`

**Purpose:** **Purpose:** Assigns a new value to party scout and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyScout(hero);
```

### SetPartyQuartermaster
`public void SetPartyQuartermaster(Hero hero)`

**Purpose:** **Purpose:** Assigns a new value to party quartermaster and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyQuartermaster(hero);
```

### SetPartyEngineer
`public void SetPartyEngineer(Hero hero)`

**Purpose:** **Purpose:** Assigns a new value to party engineer and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyEngineer(hero);
```

### SetPartySurgeon
`public void SetPartySurgeon(Hero hero)`

**Purpose:** **Purpose:** Assigns a new value to party surgeon and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartySurgeon(hero);
```

### SetPartyFirstMate
`public void SetPartyFirstMate(Hero hero)`

**Purpose:** **Purpose:** Assigns a new value to party first mate and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyFirstMate(hero);
```

### SetPartyNavigator
`public void SetPartyNavigator(Hero hero)`

**Purpose:** **Purpose:** Assigns a new value to party navigator and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyNavigator(hero);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.ToString();
```

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**Purpose:** **Purpose:** Executes the ChangePartyLeader logic.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.ChangePartyLeader(newLeader);
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**Purpose:** **Purpose:** Invoked when the party interaction event is raised.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.OnPartyInteraction(engagingParty);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** **Purpose:** Assigns a new value to position after map change and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPositionAfterMapChange(newPosition);
```

### RemovePartyLeader
`public void RemovePartyLeader()`

**Purpose:** **Purpose:** Removes party leader from the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RemovePartyLeader();
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** **Purpose:** Verifies whether positions for map change and update if needed holds true for the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### CheckAiForMapChangeAndUpdateIfNeeded
`public void CheckAiForMapChangeAndUpdateIfNeeded()`

**Purpose:** **Purpose:** Verifies whether ai for map change and update if needed holds true for the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.CheckAiForMapChangeAndUpdateIfNeeded();
```

### MovePartyToTheClosestLand
`public void MovePartyToTheClosestLand()`

**Purpose:** **Purpose:** Moves party to the closest land to a new position or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.MovePartyToTheClosestLand();
```

### GetBehaviorText
`public TextObject GetBehaviorText()`

**Purpose:** **Purpose:** Reads and returns the behavior text value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetBehaviorText();
```

### Initialize
`public override void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.Initialize();
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(CampaignVec2 position)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by mobile party at position.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(position);
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, bool isNaval = false)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by mobile party at position.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(memberRoster, prisonerRoster, position, false);
```

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f, bool isNaval = false)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by mobile party around position.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAroundPosition(memberRoster, prisonerRoster, position, 0, 0, false);
```

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(PartyTemplateObject pt, CampaignVec2 position)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by mobile party at position.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAtPosition(pt, position);
```

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(PartyTemplateObject pt, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by mobile party around position.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializeMobilePartyAroundPosition(pt, position, 0, 0);
```

### SetDisorganized
`public void SetDisorganized(bool isDisorganized)`

**Purpose:** **Purpose:** Assigns a new value to disorganized and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetDisorganized(false);
```

### RecalculateShortTermBehavior
`public void RecalculateShortTermBehavior()`

**Purpose:** **Purpose:** Recalculates short term behavior to reflect the latest state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RecalculateShortTermBehavior();
```

### IsFleeBehavior
`public static bool IsFleeBehavior(AiBehavior aiBehavior)`

**Purpose:** **Purpose:** Determines whether the this instance is in the flee behavior state or condition.

```csharp
// Static call; no instance required
MobileParty.IsFleeBehavior(aiBehavior);
```

### IsFleeing
`public bool IsFleeing()`

**Purpose:** **Purpose:** Determines whether the this instance is in the fleeing state or condition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.IsFleeing();
```

### SetPartyUsedByQuest
`public void SetPartyUsedByQuest(bool isActivelyUsed)`

**Purpose:** **Purpose:** Assigns a new value to party used by quest and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyUsedByQuest(false);
```

### IgnoreForHours
`public void IgnoreForHours(float hours)`

**Purpose:** **Purpose:** Executes the IgnoreForHours logic.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.IgnoreForHours(0);
```

### IgnoreByOtherPartiesTill
`public void IgnoreByOtherPartiesTill(CampaignTime time)`

**Purpose:** **Purpose:** Executes the IgnoreByOtherPartiesTill logic.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.IgnoreByOtherPartiesTill(time);
```

### SetAnchor
`public void SetAnchor(AnchorPoint anchor)`

**Purpose:** **Purpose:** Assigns a new value to anchor and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetAnchor(anchor);
```

### SetPartyObjective
`public void SetPartyObjective(PartyObjective objective)`

**Purpose:** **Purpose:** Assigns a new value to party objective and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyObjective(objective);
```

### UpdateVersionNo
`public void UpdateVersionNo()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of version no.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.UpdateVersionNo();
```

### IsSpotted
`public bool IsSpotted()`

**Purpose:** **Purpose:** Determines whether the this instance is in the spotted state or condition.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.IsSpotted();
```

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**Purpose:** **Purpose:** Adds element to member roster to the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.AddElementToMemberRoster(element, 0, false);
```

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**Purpose:** **Purpose:** Adds prisoner to the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.AddPrisoner(element, 0);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** **Purpose:** Reads and returns the position as vec3 value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetPositionAsVec3();
```

### GetTotalLandStrengthWithFollowers
`public float GetTotalLandStrengthWithFollowers(bool includeNonAttachedArmyMembers = true)`

**Purpose:** **Purpose:** Reads and returns the total land strength with followers value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetTotalLandStrengthWithFollowers(false);
```

### HasPerk
`public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

**Purpose:** **Purpose:** Determines whether the this instance already holds perk.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.HasPerk(perk, false);
```

### SetHeroPartyRole
`public void SetHeroPartyRole(Hero hero, PartyRole partyRole)`

**Purpose:** **Purpose:** Assigns a new value to hero party role and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetHeroPartyRole(hero, partyRole);
```

### RemoveAllPartyRolesOfHero
`public void RemoveAllPartyRolesOfHero(Hero hero)`

**Purpose:** **Purpose:** Removes all party roles of hero from the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RemoveAllPartyRolesOfHero(hero);
```

### GetHeroPartyRoles
`public List<PartyRole> GetHeroPartyRoles(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the hero party roles value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetHeroPartyRoles(hero);
```

### RemovePartyRoleOfHero
`public void RemovePartyRoleOfHero(Hero hero, PartyRole partyRole)`

**Purpose:** **Purpose:** Removes party role of hero from the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RemovePartyRoleOfHero(hero, partyRole);
```

### RemoveOnePartyRoleOfHero
`public void RemoveOnePartyRoleOfHero(Hero hero)`

**Purpose:** **Purpose:** Removes one party role of hero from the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.RemoveOnePartyRoleOfHero(hero);
```

### GetRoleHolder
`public Hero GetRoleHolder(PartyRole partyRole)`

**Purpose:** **Purpose:** Reads and returns the role holder value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetRoleHolder(partyRole);
```

### GetEffectiveRoleHolder
`public Hero GetEffectiveRoleHolder(PartyRole partyRole)`

**Purpose:** **Purpose:** Reads and returns the effective role holder value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetEffectiveRoleHolder(partyRole);
```

### GetNumDaysForFoodToLast
`public int GetNumDaysForFoodToLast()`

**Purpose:** **Purpose:** Reads and returns the num days for food to last value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetNumDaysForFoodToLast();
```

### RecalculateLongTermPath
`public bool RecalculateLongTermPath()`

**Purpose:** **Purpose:** Recalculates long term path to reflect the latest state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.RecalculateLongTermPath();
```

### GetRegionSwitchCostFromLandToSea
`public int GetRegionSwitchCostFromLandToSea()`

**Purpose:** **Purpose:** Reads and returns the region switch cost from land to sea value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetRegionSwitchCostFromLandToSea();
```

### GetRegionSwitchCostFromSeaToLand
`public int GetRegionSwitchCostFromSeaToLand()`

**Purpose:** **Purpose:** Reads and returns the region switch cost from sea to land value held by the this instance.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.GetRegionSwitchCostFromSeaToLand();
```

### SetMoveModeHold
`public void SetMoveModeHold()`

**Purpose:** **Purpose:** Assigns a new value to move mode hold and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveModeHold();
```

### SetMoveEngageParty
`public void SetMoveEngageParty(MobileParty party, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move engage party and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveEngageParty(party, navigationType);
```

### SetMoveGoAroundParty
`public void SetMoveGoAroundParty(MobileParty party, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move go around party and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoAroundParty(party, navigationType);
```

### SetMoveGoToSettlement
`public void SetMoveGoToSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingThePort)`

**Purpose:** **Purpose:** Assigns a new value to move go to settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToSettlement(settlement, navigationType, false);
```

### SetMoveGoToPoint
`public void SetMoveGoToPoint(CampaignVec2 point, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move go to point and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToPoint(point, navigationType);
```

### SetMoveToNearestLand
`public void SetMoveToNearestLand(Settlement settlement)`

**Purpose:** **Purpose:** Assigns a new value to move to nearest land and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveToNearestLand(settlement);
```

### SetMoveGoToInteractablePoint
`public void SetMoveGoToInteractablePoint(IInteractablePoint point, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move go to interactable point and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveGoToInteractablePoint(point, navigationType);
```

### SetMoveEscortParty
`public void SetMoveEscortParty(MobileParty mobileParty, NavigationType navigationType, bool isTargetingPort)`

**Purpose:** **Purpose:** Assigns a new value to move escort party and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveEscortParty(mobileParty, navigationType, false);
```

### SetMovePatrolAroundPoint
`public void SetMovePatrolAroundPoint(CampaignVec2 point, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move patrol around point and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMovePatrolAroundPoint(point, navigationType);
```

### SetMovePatrolAroundSettlement
`public void SetMovePatrolAroundSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingPort)`

**Purpose:** **Purpose:** Assigns a new value to move patrol around settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMovePatrolAroundSettlement(settlement, navigationType, false);
```

### SetMoveRaidSettlement
`public void SetMoveRaidSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingPort)`

**Purpose:** **Purpose:** Assigns a new value to move raid settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveRaidSettlement(settlement, navigationType, false);
```

### SetMoveBesiegeSettlement
`public void SetMoveBesiegeSettlement(Settlement settlement, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move besiege settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveBesiegeSettlement(settlement, navigationType);
```

### SetMoveDefendSettlement
`public void SetMoveDefendSettlement(Settlement settlement, bool isTargetingPort, NavigationType navigationType)`

**Purpose:** **Purpose:** Assigns a new value to move defend settlement and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetMoveDefendSettlement(settlement, false, navigationType);
```

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<MobileParty> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**Purpose:** **Purpose:** Starts the finding locatables around position flow or state machine.

```csharp
// Static call; no instance required
MobileParty.StartFindingLocatablesAroundPosition(position, 0);
```

### FindNextLocatable
`public static MobileParty FindNextLocatable(ref LocatableSearchData<MobileParty> data)`

**Purpose:** **Purpose:** Looks up the matching next locatable in the current collection or scope.

```csharp
// Static call; no instance required
MobileParty.FindNextLocatable(data);
```

### UpdateLocator
`public static void UpdateLocator(MobileParty party)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of locator.

```csharp
// Static call; no instance required
MobileParty.UpdateLocator(party);
```

### ComputeIsWaiting
`public bool ComputeIsWaiting()`

**Purpose:** **Purpose:** Executes the ComputeIsWaiting logic.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
var result = mobileParty.ComputeIsWaiting();
```

### InitializePartyTrade
`public void InitializePartyTrade(int initialGold)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by party trade.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.InitializePartyTrade(0);
```

### AddTaxGold
`public void AddTaxGold(int amount)`

**Purpose:** **Purpose:** Adds tax gold to the current collection or state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.AddTaxGold(0);
```

### CreateParty
`public static MobileParty CreateParty(string stringId, PartyComponent component)`

**Purpose:** **Purpose:** Constructs a new party entity and returns it to the caller.

```csharp
// Static call; no instance required
MobileParty.CreateParty("example", component);
```

### SetPartyComponent
`public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)`

**Purpose:** **Purpose:** Assigns a new value to party component and updates the object's internal state.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.SetPartyComponent(partyComponent, false);
```

### UpdatePartyComponentFlags
`public void UpdatePartyComponentFlags()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of party component flags.

```csharp
// Obtain an instance of MobileParty from the subsystem API first
MobileParty mobileParty = ...;
mobileParty.UpdatePartyComponentFlags();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MobileParty mobileParty = ...;
mobileParty.ToString();
```

## See Also

- [Area Index](../)