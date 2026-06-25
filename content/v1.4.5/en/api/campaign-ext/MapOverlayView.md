---
title: "MapOverlayView"
description: "Auto-generated class reference for MapOverlayView."
---
# MapOverlayView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapOverlayView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapOverlayView.cs`

## Overview

`MapOverlayView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapOverlayView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapOverlayView view = ...;
```

## See Also

- [Area Index](../)