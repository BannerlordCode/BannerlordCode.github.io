<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingConstructionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**Base:** `BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`

## Overview

`DefaultBuildingConstructionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public override int TownBoostCost { get; }` |
| `TownBoostBonus` | `public override int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public override int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public override int CastleBoostBonus { get; }` |

## Key Methods

### CalculateDailyConstructionPower
```csharp
public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
```

### CalculateDailyConstructionPowerWithoutBoost
```csharp
public override int CalculateDailyConstructionPowerWithoutBoost(Town town)
```

### GetBoostAmount
```csharp
public override int GetBoostAmount(Town town)
```

### GetBoostCost
```csharp
public override int GetBoostCost(Town town)
```

## Usage Example

```csharp
// Typical usage of DefaultBuildingConstructionModel (Model)
Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel());
```

## See Also

- [Complete Class Catalog](../catalog)