---
title: "Army"
description: "Auto-generated class reference for Army."
---
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

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.ToString();
```

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**Purpose:** **Purpose:** Calculates the current value or result of current strength.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.CalculateCurrentStrength();
```

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** **Purpose:** Reads and returns the custom strength value held by the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.GetCustomStrength(side, context);
```

### UpdateName
`public void UpdateName()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of name.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.UpdateName();
```

### DoesLeaderPartyAndAttachedPartiesContain
`public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)`

**Purpose:** **Purpose:** Returns a boolean answer to whether leader party and attached parties contain is true for the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.DoesLeaderPartyAndAttachedPartiesContain(party);
```

### BoostCohesionWithInfluence
`public void BoostCohesionWithInfluence(float cohesionToGain, int cost)`

**Purpose:** **Purpose:** Increases the value or strength of cohesion with influence.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.BoostCohesionWithInfluence(0, 0);
```

### RecalculateArmyMorale
`public void RecalculateArmyMorale()`

**Purpose:** **Purpose:** Recalculates army morale to reflect the latest state.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.RecalculateArmyMorale();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.GetNotificationText();
```

### GetLongTermBehaviorText
`public TextObject GetLongTermBehaviorText(bool setWithLink = false)`

**Purpose:** **Purpose:** Reads and returns the long term behavior text value held by the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.GetLongTermBehaviorText(false);
```

### Gather
`public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**Purpose:** **Purpose:** Collects or aggregates the content related to the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.Gather(initialHostileSettlement, null);
```

### IsWaitingForArmyMembers
`public bool IsWaitingForArmyMembers()`

**Purpose:** **Purpose:** Determines whether the this instance is in the waiting for army members state or condition.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.IsWaitingForArmyMembers();
```

### FinishArmyObjective
`public void FinishArmyObjective()`

**Purpose:** **Purpose:** Concludes the army objective flow and performs any cleanup.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.FinishArmyObjective();
```

### GetRelativePositionForParty
`public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)`

**Purpose:** **Purpose:** Reads and returns the relative position for party value held by the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
var result = army.GetRelativePositionForParty(mobileParty, armyFacing);
```

### AddPartyToMergedParties
`public void AddPartyToMergedParties(MobileParty mobileParty)`

**Purpose:** **Purpose:** Adds party to merged parties to the current collection or state.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.AddPartyToMergedParties(mobileParty);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** **Purpose:** Assigns a new value to position after map change and updates the object's internal state.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.SetPositionAfterMapChange(newPosition);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** **Purpose:** Verifies whether positions for map change and update if needed holds true for the this instance.

```csharp
// Obtain an instance of Army from the subsystem API first
Army army = ...;
army.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Army army = ...;
army.ToString();
```

## See Also

- [Area Index](../)