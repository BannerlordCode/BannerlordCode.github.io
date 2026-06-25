---
title: "BoundaryWallView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoundaryWallView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## Overview

`BoundaryWallView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BoundaryWallView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateBoundaryMesh
`public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2> boundaryPoints, uint meshColor = 536918784u)`

**Purpose:** Creates a new `boundary mesh` instance or object.

## Usage Example

```csharp
var view = new BoundaryWallView();
```

## See Also

- [Complete Class Catalog](../catalog)