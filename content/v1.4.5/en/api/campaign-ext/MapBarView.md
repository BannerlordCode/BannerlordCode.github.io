---
title: "MapBarView"
description: "Auto-generated class reference for MapBarView."
---
# MapBarView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapBarView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapBarView.cs`

## Overview

`MapBarView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapBarView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapBarView view = ...;
```

## See Also

- [Area Index](../)