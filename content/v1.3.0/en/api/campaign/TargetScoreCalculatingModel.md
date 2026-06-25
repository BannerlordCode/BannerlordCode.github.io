---
title: "TargetScoreCalculatingModel"
description: "Auto-generated class reference for TargetScoreCalculatingModel."
---
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`

## Overview

`TargetScoreCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TargetScoreCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TravelingToAssignmentFactor` | `public abstract float TravelingToAssignmentFactor { get; }` |
| `BesiegingFactor` | `public abstract float BesiegingFactor { get; }` |
| `AssaultingTownFactor` | `public abstract float AssaultingTownFactor { get; }` |
| `RaidingFactor` | `public abstract float RaidingFactor { get; }` |
| `DefendingFactor` | `public abstract float DefendingFactor { get; }` |

## Key Methods

### GetPatrollingFactor
`public abstract float GetPatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Reads and returns the patrolling factor value held by the this instance.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetPatrollingFactor(false);
```

### GetTargetScoreForFaction
`public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Reads and returns the target score for faction value held by the this instance.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

### CalculatePatrollingScoreForSettlement
`public abstract float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of patrolling score for settlement.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.CalculatePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public abstract float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** Executes the CurrentObjectiveValue logic.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TargetScoreCalculatingModel instance = ...;
```

## See Also

- [Area Index](../)