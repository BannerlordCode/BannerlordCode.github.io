<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SceneView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/SceneView.cs`

## 概述

`SceneView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

### CreateSceneView
```csharp
public static SceneView CreateSceneView()
```

### SetScene
```csharp
public void SetScene(Scene scene)
```

### SetAcceptGlobalDebugRenderObjects
```csharp
public void SetAcceptGlobalDebugRenderObjects(bool value)
```

### SetRenderWithPostfx
```csharp
public void SetRenderWithPostfx(bool value)
```

### SetPostfxConfigParams
```csharp
public void SetPostfxConfigParams(int value)
```

### SetForceShaderCompilation
```csharp
public void SetForceShaderCompilation(bool value)
```

### CheckSceneReadyToRender
```csharp
public bool CheckSceneReadyToRender()
```

### SetDoQuickExposure
```csharp
public void SetDoQuickExposure(bool value)
```

### SetCamera
```csharp
public void SetCamera(Camera camera)
```

### SetResolutionScaling
```csharp
public void SetResolutionScaling(bool value)
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

### ProjectedMousePositionOnWater
```csharp
public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)
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

### DoNotClear
```csharp
public void DoNotClear(bool value)
```

### AddClearTask
```csharp
public void AddClearTask(bool clearOnlySceneview = false)
```

### ReadyToRender
```csharp
public bool ReadyToRender()
```

### SetClearAndDisableAfterSucessfullRender
```csharp
public void SetClearAndDisableAfterSucessfullRender(bool value)
```

### SetClearGbuffer
```csharp
public void SetClearGbuffer(bool value)
```

### SetShadowmapResolutionMultiplier
```csharp
public void SetShadowmapResolutionMultiplier(float value)
```

### SetPointlightResolutionMultiplier
```csharp
public void SetPointlightResolutionMultiplier(float value)
```

### SetCleanScreenUntilLoadingDone
```csharp
public void SetCleanScreenUntilLoadingDone(bool value)
```

### ClearAll
```csharp
public void ClearAll(bool clearScene, bool removeTerrain)
```

### SetFocusedShadowmap
```csharp
public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)
```

### GetScene
```csharp
public Scene GetScene()
```

## 使用示例

```csharp
// SceneView (View) 的典型用法
SceneView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)