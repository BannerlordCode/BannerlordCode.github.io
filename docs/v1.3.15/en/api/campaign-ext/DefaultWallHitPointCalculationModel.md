<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultWallHitPointCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultWallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWallHitPointCalculationModel : WallHitPointCalculationModel`
**Base:** `WallHitPointCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWallHitPointCalculationModel.cs`

## Overview

`DefaultWallHitPointCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel())` to change how it computes.

## Key Methods

### CalculateMaximumWallHitPoint
```csharp
public override float CalculateMaximumWallHitPoint(Town town)
```

## Usage Example

```csharp
// Typical usage of DefaultWallHitPointCalculationModel (Model)
Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)