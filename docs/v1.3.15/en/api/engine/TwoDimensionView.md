<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TwoDimensionView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`

## Overview

`TwoDimensionView` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.

## Key Methods

### CreateTwoDimension
```csharp
public static TwoDimensionView CreateTwoDimension(string viewName)
```

### BeginFrame
```csharp
public void BeginFrame()
```

### EndFrame
```csharp
public void EndFrame()
```

### Clear
```csharp
public void Clear()
```

### CreateMeshFromDescription
```csharp
public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)
```

### CreateTextMeshFromCache
```csharp
public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)
```

### CreateTextMeshFromDescription
```csharp
public void CreateTextMeshFromDescription(float vertices, float uvs, uint indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)
```

### GetOrCreateMaterial
```csharp
public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)
```

## Usage Example

```csharp
// Typical usage of TwoDimensionView (View)
TwoDimensionView /* via engine view system */;
```

## See Also

- [Complete Class Catalog](../catalog)