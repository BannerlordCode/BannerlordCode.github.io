<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeTargetScoreCalculatingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `patrolling factor`.

### CalculatePatrollingScoreForSettlement
`public override float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)`

**Purpose:** Handles logic related to `calculate patrolling score for settlement`.

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** Handles logic related to `current objective value`.

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Gets the current value of `target score for faction`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeTargetScoreCalculatingModel>(new MyStoryModeTargetScoreCalculatingModel());
```

## See Also

- [Complete Class Catalog](../catalog)