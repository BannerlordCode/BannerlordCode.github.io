---
title: "MapEventVisualsView"
description: "Auto-generated class reference for MapEventVisualsView."
---
# MapEventVisualsView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapEventVisualsView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapEventVisualsView.cs`

## Overview

`MapEventVisualsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapEventVisualsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapEventVisualsView view = ...;
```

## See Also

- [Area Index](../)