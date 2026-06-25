---
title: "MapBasicView"
description: "Auto-generated class reference for MapBasicView."
---
# MapBasicView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapBasicView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapBasicView.cs`

## Overview

`MapBasicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapBasicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapBasicView view = ...;
```

## See Also

- [Area Index](../)