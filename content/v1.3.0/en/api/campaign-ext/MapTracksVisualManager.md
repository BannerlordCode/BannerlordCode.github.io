---
title: "MapTracksVisualManager"
description: "Auto-generated class reference for MapTracksVisualManager."
---
# MapTracksVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**Base:** `EntityVisualManagerBase<Track>`
**File:** `SandBox.View/Map/Managers/MapTracksVisualManager.cs`

## Overview

`MapTracksVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapTracksVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MapTracksVisualManager Current { get; }` |

## Key Methods

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** **Purpose:** Invoked when the visual tick event is raised.

```csharp
// Obtain an instance of MapTracksVisualManager from the subsystem API first
MapTracksVisualManager mapTracksVisualManager = ...;
mapTracksVisualManager.OnVisualTick(screen, 0, 0);
```

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** **Purpose:** Invoked when the visual intersected event is raised.

```csharp
// Obtain an instance of MapTracksVisualManager from the subsystem API first
MapTracksVisualManager mapTracksVisualManager = ...;
mapTracksVisualManager.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**Purpose:** **Purpose:** Invoked when the game load finished event is raised.

```csharp
// Obtain an instance of MapTracksVisualManager from the subsystem API first
MapTracksVisualManager mapTracksVisualManager = ...;
mapTracksVisualManager.OnGameLoadFinished();
```

### GetVisualOfEntity
`public override MapEntityVisual<Track> GetVisualOfEntity(Track entity)`

**Purpose:** **Purpose:** Reads and returns the visual of entity value held by the this instance.

```csharp
// Obtain an instance of MapTracksVisualManager from the subsystem API first
MapTracksVisualManager mapTracksVisualManager = ...;
var result = mapTracksVisualManager.GetVisualOfEntity(entity);
```

## Usage Example

```csharp
var manager = MapTracksVisualManager.Current;
```

## See Also

- [Area Index](../)