<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WallHitPointCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WallHitPointCalculationModel : MBGameModel<WallHitPointCalculationModel>`
**Base:** `MBGameModel<WallHitPointCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WallHitPointCalculationModel.cs`

## Overview

`WallHitPointCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<WallHitPointCalculationModel>(new MyWallHitPointCalculationModel())` to change how it computes.

## Key Methods

### CalculateMaximumWallHitPoint
```csharp
public abstract float CalculateMaximumWallHitPoint(Town town)
```

## Usage Example

```csharp
// Typical usage of WallHitPointCalculationModel (Model)
Game.Current.ReplaceModel<WallHitPointCalculationModel>(new MyWallHitPointCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)