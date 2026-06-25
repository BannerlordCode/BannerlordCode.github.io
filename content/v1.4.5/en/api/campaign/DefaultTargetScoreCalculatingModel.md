---
title: "DefaultTargetScoreCalculatingModel"
description: "Auto-generated class reference for DefaultTargetScoreCalculatingModel."
---
# DefaultTargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTargetScoreCalculatingModel.cs`

## Overview

`DefaultTargetScoreCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTargetScoreCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefensivePatrollingFactor
`public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** **Purpose:** Reads and returns the defensive patrolling factor value held by the this instance.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetDefensivePatrollingFactor(false);
```

### GetOffensivePatrollingFactor
`public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** **Purpose:** Reads and returns the offensive patrolling factor value held by the this instance.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetOffensivePatrollingFactor(false);
```

### CalculateOffensivePatrollingScoreForSettlement
`public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** **Purpose:** Calculates the current value or result of offensive patrolling score for settlement.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CalculateOffensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the CurrentObjectiveValue logic.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

### CalculateDefensivePatrollingScoreForSettlement
`public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** **Purpose:** Calculates the current value or result of defensive patrolling score for settlement.

```csharp
// Obtain an instance of DefaultTargetScoreCalculatingModel from the subsystem API first
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CalculateDefensivePatrollingScoreForSettlement(settlement, false, mobileParty);
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