<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneLayer`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneLayer

**命名空间:** TaleWorlds.Engine.Screens
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`SceneLayer` 是 `TaleWorlds.Engine.Screens` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize { get; }` |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)