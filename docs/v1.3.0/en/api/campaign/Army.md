<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Army`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Army

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Army : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/Army.cs`

## Overview

`Army` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GatheringPositionMaxDistanceToTheSettlement` | `public float GatheringPositionMaxDistanceToTheSettlement { get; }` |
| `GatheringPositionMinDistanceToTheSettlement` | `public float GatheringPositionMinDistanceToTheSettlement { get; }` |
| `Parties` | `public MBReadOnlyList<MobileParty> Parties { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; set; }` |
| `ArmyType` | `public Army.ArmyTypes ArmyType { get; set; }` |
| `ArmyOwner` | `public Hero ArmyOwner { get; set; }` |
| `Cohesion` | `public float Cohesion { get; set; }` |
| `DailyCohesionChange` | `public float DailyCohesionChange { get; }` |
| `DailyCohesionChangeExplanation` | `public ExplainedNumber DailyCohesionChangeExplanation { get; }` |
| `CohesionThresholdForDispersion` | `public int CohesionThresholdForDispersion { get; }` |
| `Morale` | `public float Morale { get; }` |
| `LeaderParty` | `public MobileParty LeaderParty { get; }` |
| `LeaderPartyAndAttachedPartiesCount` | `public int LeaderPartyAndAttachedPartiesCount { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `AiBehaviorObject` | `public IMapPoint AiBehaviorObject { get; set; }` |
| `Name` | `public TextObject Name { get; }` |
| `TotalHealthyMembers` | `public int TotalHealthyMembers { get; }` |
| `TotalManCount` | `public int TotalManCount { get; }` |
| `TotalRegularCount` | `public int TotalRegularCount { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**Purpose:** Handles logic related to `calculate current strength`.

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `custom strength`.

### UpdateName
`public void UpdateName()`

**Purpose:** Updates the state or data of `name`.

### DoesLeaderPartyAndAttachedPartiesContain
`public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)`

**Purpose:** Handles logic related to `does leader party and attached parties contain`.

### BoostCohesionWithInfluence
`public void BoostCohesionWithInfluence(float cohesionToGain, int cost)`

**Purpose:** Handles logic related to `boost cohesion with influence`.

### RecalculateArmyMorale
`public void RecalculateArmyMorale()`

**Purpose:** Handles logic related to `recalculate army morale`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetLongTermBehaviorText
`public TextObject GetLongTermBehaviorText(bool setWithLink = false)`

**Purpose:** Gets the current value of `long term behavior text`.

### Gather
`public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**Purpose:** Handles logic related to `gather`.

### IsWaitingForArmyMembers
`public bool IsWaitingForArmyMembers()`

**Purpose:** Handles logic related to `is waiting for army members`.

### FinishArmyObjective
`public void FinishArmyObjective()`

**Purpose:** Handles logic related to `finish army objective`.

### GetRelativePositionForParty
`public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)`

**Purpose:** Gets the current value of `relative position for party`.

### AddPartyToMergedParties
`public void AddPartyToMergedParties(MobileParty mobileParty)`

**Purpose:** Adds `party to merged parties` to the current collection or state.

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Sets the value or state of `position after map change`.

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check positions for map change and update if needed`.

## Usage Example

```csharp
var value = new Army();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)