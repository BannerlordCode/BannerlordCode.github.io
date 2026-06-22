<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TargetScoreCalculatingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`

## Overview

`TargetScoreCalculatingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TargetScoreCalculatingModel>(new MyTargetScoreCalculatingModel())` to change how it computes.

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
```csharp
public abstract float GetPatrollingFactor(bool isNavalPatrolling)
```

### GetTargetScoreForFaction
```csharp
public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)
```

### CalculatePatrollingScoreForSettlement
```csharp
public abstract float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)
```

### CurrentObjectiveValue
```csharp
public abstract float CurrentObjectiveValue(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of TargetScoreCalculatingModel (Model)
Game.Current.ReplaceModel<TargetScoreCalculatingModel>(new MyTargetScoreCalculatingModel());
```

## See Also

- [Complete Class Catalog](../catalog)