<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeTargetScoreCalculatingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## Overview

`StoryModeTargetScoreCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeTargetScoreCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefensivePatrollingFactor
`public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Gets the current value of `defensive patrolling factor`.

### GetOffensivePatrollingFactor
`public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Gets the current value of `offensive patrolling factor`.

### CalculateDefensivePatrollingScoreForSettlement
`public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Handles logic related to `calculate defensive patrolling score for settlement`.

### CalculateOffensivePatrollingScoreForSettlement
`public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Handles logic related to `calculate offensive patrolling score for settlement`.

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** Handles logic related to `current objective value`.

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Gets the current value of `target score for faction`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeTargetScoreCalculatingModel>(new MyStoryModeTargetScoreCalculatingModel());
```

## See Also

- [Complete Class Catalog](../catalog)