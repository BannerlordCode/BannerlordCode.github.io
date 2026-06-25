---
title: "DefaultTargetScoreCalculatingModel"
description: "Auto-generated class reference for DefaultTargetScoreCalculatingModel."
---
# DefaultTargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs`

## Overview

`DefaultTargetScoreCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTargetScoreCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TravelingToAssignmentFactor` | `public override float TravelingToAssignmentFactor { get; }` |
| `BesiegingFactor` | `public override float BesiegingFactor { get; }` |
| `AssaultingTownFactor` | `public override float AssaultingTownFactor { get; }` |
| `RaidingFactor` | `public override float RaidingFactor { get; }` |
| `DefendingFactor` | `public override float DefendingFactor { get; }` |

## Key Methods

### GetPatrollingFactor
`public override float GetPatrollingFactor(bool isNavalPatrolling)`

**Purpose:** **Purpose:** Reads and returns the patrolling factor value held by the this instance.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetPatrollingFactor(false);
```

### CalculatePatrollingScoreForSettlement
`public override float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)`

**Purpose:** **Purpose:** Calculates the current value or result of patrolling score for settlement.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CalculatePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the CurrentObjectiveValue logic.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** **Purpose:** Reads and returns the target score for faction value held by the this instance.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTargetScoreCalculatingModel>(new MyDefaultTargetScoreCalculatingModel());
```

## See Also

- [Area Index](../)