---
title: "SceneView"
description: "SceneView 的自动生成类参考。"
---
# SceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SceneView : View`
**Base:** `View`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/SceneView.cs`

## 概述

`SceneView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SceneView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateSceneView
`public static SceneView CreateSceneView()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 scene view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SceneView.CreateSceneView();
```

### SetScene
`public void SetScene(Scene scene)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetScene(scene);
```

### SetAcceptGlobalDebugRenderObjects
`public void SetAcceptGlobalDebugRenderObjects(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 accept global debug render objects 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetAcceptGlobalDebugRenderObjects(false);
```

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 render with postfx 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetRenderWithPostfx(false);
```

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 postfx config params 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetPostfxConfigParams(0);
```

### SetForceShaderCompilation
`public void SetForceShaderCompilation(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 force shader compilation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetForceShaderCompilation(false);
```

### CheckSceneReadyToRender
`public bool CheckSceneReadyToRender()`

**用途 / Purpose:** **用途 / Purpose:** 检查scene ready to render在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.CheckSceneReadyToRender();
```

### SetDoQuickExposure
`public void SetDoQuickExposure(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 do quick exposure 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetDoQuickExposure(false);
```

### SetCamera
`public void SetCamera(Camera camera)`

**用途 / Purpose:** **用途 / Purpose:** 为 camera 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetCamera(camera);
```

### SetResolutionScaling
`public void SetResolutionScaling(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 resolution scaling 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetResolutionScaling(false);
```

### SetPostfxFromConfig
`public void SetPostfxFromConfig()`

**用途 / Purpose:** **用途 / Purpose:** 为 postfx from config 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetPostfxFromConfig();
```

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position)`

**用途 / Purpose:** **用途 / Purpose:** 调用 WorldPointToScreenPoint 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.WorldPointToScreenPoint(position);
```

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ScreenPointToViewportPoint 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.ScreenPointToViewportPoint(position);
```

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProjectedMousePositionOnGround 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.ProjectedMousePositionOnGround(groundPosition, groundNormal, false, excludeBodyOwnerFlags, false);
```

### ProjectedMousePositionOnWater
`public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProjectedMousePositionOnWater 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.ProjectedMousePositionOnWater(waterPosition, false);
```

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TranslateMouse 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.TranslateMouse(worldMouseNear, worldMouseFar, 0);
```

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene uses skybox 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetSceneUsesSkybox(false);
```

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene uses shadows 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetSceneUsesShadows(false);
```

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene uses contour 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetSceneUsesContour(false);
```

### DoNotClear
`public void DoNotClear(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoNotClear 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.DoNotClear(false);
```

### AddClearTask
`public void AddClearTask(bool clearOnlySceneview = false)`

**用途 / Purpose:** **用途 / Purpose:** 将 clear task 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.AddClearTask(false);
```

### ReadyToRender
`public bool ReadyToRender()`

**用途 / Purpose:** **用途 / Purpose:** 读取y to render的数据或状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.ReadyToRender();
```

### SetClearAndDisableAfterSucessfullRender
`public void SetClearAndDisableAfterSucessfullRender(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 clear and disable after sucessfull render 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetClearAndDisableAfterSucessfullRender(false);
```

### SetClearGbuffer
`public void SetClearGbuffer(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 clear gbuffer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetClearGbuffer(false);
```

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 shadowmap resolution multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetShadowmapResolutionMultiplier(0);
```

### SetPointlightResolutionMultiplier
`public void SetPointlightResolutionMultiplier(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 pointlight resolution multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetPointlightResolutionMultiplier(0);
```

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 clean screen until loading done 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetCleanScreenUntilLoadingDone(false);
```

### ClearAll
`public void ClearAll(bool clearScene, bool removeTerrain)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的all。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.ClearAll(false, false);
```

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**用途 / Purpose:** **用途 / Purpose:** 为 focused shadowmap 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
sceneView.SetFocusedShadowmap(false, center, 0);
```

### GetScene
`public Scene GetScene()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 scene 的结果。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.GetScene();
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RayCastForClosestEntityOrTerrain 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneView 实例
SceneView sceneView = ...;
var result = sceneView.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, closestPoint, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
SceneView view = ...;
```

## 参见

- [本区域目录](../)