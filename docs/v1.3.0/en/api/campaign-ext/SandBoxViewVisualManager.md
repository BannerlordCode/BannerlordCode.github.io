<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxViewVisualManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewVisualManager

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewVisualManager`
**Base:** none
**File:** `SandBox.View/SandBoxViewVisualManager.cs`

## Overview

`SandBoxViewVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxViewVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### VisualTick
`public static void VisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Handles logic related to `visual tick`.

### OnTick
`public static void OnTick(float realDt, float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnFrameTick
`public static void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### OnMouseClick
`public static bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**Purpose:** Called when the `mouse click` event is raised.

### OnGameLoadFinished
`public static void OnGameLoadFinished()`

**Purpose:** Called when the `game load finished` event is raised.

## Usage Example

```csharp
var manager = SandBoxViewVisualManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)