<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TargetScoreCalculatingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TargetScoreCalculatingModel.cs`

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

**Purpose:** Gets the current value of `defensive patrolling factor`.

### GetOffensivePatrollingFactor
`public abstract float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Gets the current value of `offensive patrolling factor`.

### GetTargetScoreForFaction
`public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Gets the current value of `target score for faction`.

### CalculateDefensivePatrollingScoreForSettlement
`public abstract float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Handles logic related to `calculate defensive patrolling score for settlement`.

### CalculateOffensivePatrollingScoreForSettlement
`public abstract float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**Purpose:** Handles logic related to `calculate offensive patrolling score for settlement`.

### CurrentObjectiveValue
`public abstract float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** Handles logic related to `current objective value`.

## Usage Example

```csharp
var implementation = new CustomTargetScoreCalculatingModel();
```

## See Also

- [Complete Class Catalog](../catalog)