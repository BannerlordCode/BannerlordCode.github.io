---
title: "BoundaryWallView"
description: "Auto-generated class reference for BoundaryWallView."
---
# BoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## Overview

`BoundaryWallView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BoundaryWallView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateBoundaryMesh
`public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2> boundaryPoints, uint meshColor = 536918784U)`

**Purpose:** Constructs a new `boundary mesh` entity and returns it to the caller.

```csharp
// Static call; no instance required
BoundaryWallView.CreateBoundaryMesh(scene, boundaryPoints, 0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BoundaryWallView view = ...;
```

## See Also

- [Area Index](../)