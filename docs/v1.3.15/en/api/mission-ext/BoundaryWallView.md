<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoundaryWallView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## Overview

`BoundaryWallView` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.

## Key Methods

### CreateBoundaryMesh
```csharp
public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2> boundaryPoints, uint meshColor = 536918784U)
```

## Usage Example

```csharp
// Typical usage of BoundaryWallView (View)
BoundaryWallView /* via engine view system */;
```

## See Also

- [Complete Class Catalog](../catalog)