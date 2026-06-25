---
title: "BricoleView"
description: "Auto-generated class reference for BricoleView."
---
# BricoleView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BricoleView : RangedSiegeWeaponView`
**Base:** `RangedSiegeWeaponView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon/BricoleView.cs`

## Overview

`BricoleView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BricoleView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BricoleView view = ...;
```

## See Also

- [Area Index](../)