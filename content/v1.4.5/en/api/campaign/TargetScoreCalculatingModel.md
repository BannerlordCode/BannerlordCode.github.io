---
title: "TargetScoreCalculatingModel"
description: "Auto-generated class reference for TargetScoreCalculatingModel."
---
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TargetScoreCalculatingModel.cs`

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

### GetDefensivePatrollingFactor
`public abstract float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Reads and returns the defensive patrolling factor value held by the this instance.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetDefensivePatrollingFactor(false);
```

### GetOffensivePatrollingFactor
`public abstract float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Reads and returns the offensive patrolling factor value held by the this instance.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetOffensivePatrollingFactor(false);
```

### GetTargetScoreForFaction
`public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Reads and returns the target score for faction value held by the this instance.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

### CalculateDefensivePatrollingScoreForSettlement
`public abstract float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of defensive patrolling score for settlement.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.CalculateDefensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CalculateOffensivePatrollingScoreForSettlement
`public abstract float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of offensive patrolling score for settlement.

```csharp
// Obtain an instance of TargetScoreCalculatingModel from the subsystem API first
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.CalculateOffensivePatrollingScoreForSettlement(settlement, false, mobileParty);
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