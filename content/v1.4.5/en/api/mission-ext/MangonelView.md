---
title: "MangonelView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MangonelView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MangonelView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MangonelView : RangedSiegeWeaponView`
**Base:** `RangedSiegeWeaponView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon/MangonelView.cs`

## Overview

`MangonelView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MangonelView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MangonelView();
```

## See Also

- [Complete Class Catalog](../catalog)