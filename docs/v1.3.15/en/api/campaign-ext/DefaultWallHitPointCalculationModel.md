<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultWallHitPointCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultWallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWallHitPointCalculationModel : WallHitPointCalculationModel`
**Base:** `WallHitPointCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWallHitPointCalculationModel.cs`

## Overview

`DefaultWallHitPointCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultWallHitPointCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaximumWallHitPoint
`public override float CalculateMaximumWallHitPoint(Town town)`

**Purpose:** Handles logic related to `calculate maximum wall hit point`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)