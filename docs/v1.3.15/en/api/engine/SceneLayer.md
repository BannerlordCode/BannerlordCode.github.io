<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneLayer`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneLayer

**Namespace:** TaleWorlds.Engine.Screens
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `SceneLayer` is a class in the `TaleWorlds.Engine.Screens` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize { get; }` |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |


## Key Methods

### SetScene

```csharp
public void SetScene(Scene scene)
```

### SetRenderWithPostfx

```csharp
public void SetRenderWithPostfx(bool value)
```

### SetPostfxConfigParams

```csharp
public void SetPostfxConfigParams(int value)
```

### SetCamera

```csharp
public void SetCamera(Camera camera)
```

### SetPostfxFromConfig

```csharp
public void SetPostfxFromConfig()
```

### WorldPointToScreenPoint

```csharp
public Vec2 WorldPointToScreenPoint(Vec3 position)
```

### ScreenPointToViewportPoint

```csharp
public Vec2 ScreenPointToViewportPoint(Vec2 position)
```

### ProjectedMousePositionOnGround

```csharp
public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)
```

### TranslateMouse

```csharp
public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)
```

### SetSceneUsesSkybox

```csharp
public void SetSceneUsesSkybox(bool value)
```

### SetSceneUsesShadows

```csharp
public void SetSceneUsesShadows(bool value)
```

### SetSceneUsesContour

```csharp
public void SetSceneUsesContour(bool value)
```

### SetShadowmapResolutionMultiplier

```csharp
public void SetShadowmapResolutionMultiplier(float value)
```

### SetFocusedShadowmap

```csharp
public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)
```

### DoNotClear

```csharp
public void DoNotClear(bool value)
```

### ReadyToRender

```csharp
public bool ReadyToRender()
```

### SetCleanScreenUntilLoadingDone

```csharp
public void SetCleanScreenUntilLoadingDone(bool value)
```

### ClearAll

```csharp
public void ClearAll()
```

### ClearRuntimeGPUMemory

```csharp
public void ClearRuntimeGPUMemory(bool remove_terrain)
```

### HitTest

```csharp
public override bool HitTest(Vector2 position)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)