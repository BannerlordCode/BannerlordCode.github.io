<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WallHitPointCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WallHitPointCalculationModel : MBGameModel<WallHitPointCalculationModel>`
**Base:** `MBGameModel<WallHitPointCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WallHitPointCalculationModel.cs`

## Overview

`WallHitPointCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `WallHitPointCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaximumWallHitPoint
`public abstract float CalculateMaximumWallHitPoint(Town town)`

**Purpose:** Handles logic related to `calculate maximum wall hit point`.

## Usage Example

```csharp
var implementation = new CustomWallHitPointCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)