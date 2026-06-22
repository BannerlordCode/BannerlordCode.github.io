<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingConstructionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**Base:** `MBGameModel<BuildingConstructionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`

## Overview

`BuildingConstructionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BuildingConstructionModel>(new MyBuildingConstructionModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public abstract int TownBoostCost { get; }` |
| `TownBoostBonus` | `public abstract int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public abstract int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public abstract int CastleBoostBonus { get; }` |

## Key Methods

### CalculateDailyConstructionPower
```csharp
public abstract ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
```

### CalculateDailyConstructionPowerWithoutBoost
```csharp
public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town)
```

### GetBoostCost
```csharp
public abstract int GetBoostCost(Town town)
```

### GetBoostAmount
```csharp
public abstract int GetBoostAmount(Town town)
```

## Usage Example

```csharp
// Typical usage of BuildingConstructionModel (Model)
Game.Current.ReplaceModel<BuildingConstructionModel>(new MyBuildingConstructionModel());
```

## See Also

- [Complete Class Catalog](../catalog)