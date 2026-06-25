---
title: "MapTracksVisualManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTracksVisualManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapTracksVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**Base:** `EntityVisualManagerBase<Track>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapTracksVisualManager.cs`

## Overview

`MapTracksVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapTracksVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Called when the `visual tick` event is raised.

### OnVisualIntersected
`public override bool OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Called when the `visual intersected` event is raised.

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**Purpose:** Called when the `game load finished` event is raised.

### GetVisualOfEntity
`public override MapEntityVisual<Track> GetVisualOfEntity(Track entity)`

**Purpose:** Gets the current value of `visual of entity`.

## Usage Example

```csharp
var manager = MapTracksVisualManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)