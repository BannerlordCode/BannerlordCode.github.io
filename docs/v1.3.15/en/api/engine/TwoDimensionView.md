<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TwoDimensionView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`

## Overview

`TwoDimensionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `TwoDimensionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTwoDimension
`public static TwoDimensionView CreateTwoDimension(string viewName)`

**Purpose:** Creates a new `two dimension` instance or object.

### BeginFrame
`public void BeginFrame()`

**Purpose:** Handles logic related to `begin frame`.

### EndFrame
`public void EndFrame()`

**Purpose:** Handles logic related to `end frame`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### CreateMeshFromDescription
`public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)`

**Purpose:** Creates a new `mesh from description` instance or object.

### CreateTextMeshFromCache
`public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**Purpose:** Creates a new `text mesh from cache` instance or object.

### CreateTextMeshFromDescription
`public void CreateTextMeshFromDescription(float vertices, float uvs, uint indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**Purpose:** Creates a new `text mesh from description` instance or object.

### GetOrCreateMaterial
`public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)`

**Purpose:** Gets the current value of `or create material`.

## Usage Example

```csharp
var view = new TwoDimensionView();
```

## See Also

- [Complete Class Catalog](../catalog)