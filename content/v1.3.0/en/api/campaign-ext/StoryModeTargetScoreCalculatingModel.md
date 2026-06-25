---
title: "StoryModeTargetScoreCalculatingModel"
description: "Auto-generated class reference for StoryModeTargetScoreCalculatingModel."
---
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## Overview

`StoryModeTargetScoreCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeTargetScoreCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** Reads and returns the `patrolling factor` value held by the current object.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetPatrollingFactor(false);
```

### CalculatePatrollingScoreForSettlement
`public override float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of `patrolling score for settlement`.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CalculatePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Reads and returns the `target score for faction` value held by the current object.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeTargetScoreCalculatingModel>(new MyStoryModeTargetScoreCalculatingModel());
```

## See Also

- [Area Index](../)