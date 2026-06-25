---
title: "MapSiegeOverlayView"
description: "Auto-generated class reference for MapSiegeOverlayView."
---
# MapSiegeOverlayView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapSiegeOverlayView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapSiegeOverlayView.cs`

## Overview

`MapSiegeOverlayView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapSiegeOverlayView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapSiegeOverlayView view = ...;
```

## See Also

- [Area Index](../)