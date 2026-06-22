<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTargetScoreCalculatingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs`

## Overview

`DefaultTargetScoreCalculatingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTargetScoreCalculatingModel>(new MyDefaultTargetScoreCalculatingModel())` to change how it computes.

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
```csharp
public override float GetPatrollingFactor(bool isNavalPatrolling)
```

### CalculatePatrollingScoreForSettlement
```csharp
public override float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)
```

### CurrentObjectiveValue
```csharp
public override float CurrentObjectiveValue(MobileParty mobileParty)
```

### GetTargetScoreForFaction
```csharp
public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)
```

## Usage Example

```csharp
// Typical usage of DefaultTargetScoreCalculatingModel (Model)
Game.Current.ReplaceModel<DefaultTargetScoreCalculatingModel>(new MyDefaultTargetScoreCalculatingModel());
```

## See Also

- [Complete Class Catalog](../catalog)