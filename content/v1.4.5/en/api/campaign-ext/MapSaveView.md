---
title: "MapSaveView"
description: "Auto-generated class reference for MapSaveView."
---
# MapSaveView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapSaveView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapSaveView.cs`

## Overview

`MapSaveView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapSaveView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapSaveView view = ...;
```

## See Also

- [Area Index](../)