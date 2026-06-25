---
title: "StoryModeTargetScoreCalculatingModel"
description: "Auto-generated class reference for StoryModeTargetScoreCalculatingModel."
---
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## Overview

`StoryModeTargetScoreCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeTargetScoreCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefensivePatrollingFactor
`public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Reads and returns the `defensive patrolling factor` value held by the current object.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetDefensivePatrollingFactor(false);
```

### GetOffensivePatrollingFactor
`public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Reads and returns the `offensive patrolling factor` value held by the current object.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetOffensivePatrollingFactor(false);
```

### CalculateDefensivePatrollingScoreForSettlement
`public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of `defensive patrolling score for settlement`.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CalculateDefensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CalculateOffensivePatrollingScoreForSettlement
`public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of `offensive patrolling score for settlement`.

```csharp
// Obtain an instance of StoryModeTargetScoreCalculatingModel from the subsystem API first
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CalculateOffensivePatrollingScoreForSettlement(settlement, false, mobileParty);
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
`public override float GetTargetScoreForFaction(Settlement targetSettlement, ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

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