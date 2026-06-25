---
title: "MapReadyView"
description: "Auto-generated class reference for MapReadyView."
---
# MapReadyView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapReadyView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapReadyView.cs`

## Overview

`MapReadyView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapReadyView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetIsMapSceneReady
`public virtual void SetIsMapSceneReady(bool isReady)`

**Purpose:** Assigns a new value to is map scene ready and updates the object's internal state.

```csharp
// Obtain an instance of MapReadyView from the subsystem API first
MapReadyView mapReadyView = ...;
mapReadyView.SetIsMapSceneReady(false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapReadyView view = ...;
```

## See Also

- [Area Index](../)