<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrebuchetView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrebuchetView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrebuchetView : RangedSiegeWeaponView`
**Base:** `RangedSiegeWeaponView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/TrebuchetView.cs`

## Overview

`TrebuchetView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `TrebuchetView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new TrebuchetView();
```

## See Also

- [Complete Class Catalog](../catalog)