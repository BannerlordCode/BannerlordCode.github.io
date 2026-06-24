<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SceneView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/SceneView.cs`

## 概述

`SceneView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SceneView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateSceneView
`public static SceneView CreateSceneView()`

**用途 / Purpose:** 创建一个 `scene view` 实例或对象。

### SetScene
`public void SetScene(Scene scene)`

**用途 / Purpose:** 设置 `scene` 的值或状态。

### SetAcceptGlobalDebugRenderObjects
`public void SetAcceptGlobalDebugRenderObjects(bool value)`

**用途 / Purpose:** 设置 `accept global debug render objects` 的值或状态。

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**用途 / Purpose:** 设置 `render with postfx` 的值或状态。

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**用途 / Purpose:** 设置 `postfx config params` 的值或状态。

### SetForceShaderCompilation
`public void SetForceShaderCompilation(bool value)`

**用途 / Purpose:** 设置 `force shader compilation` 的值或状态。

### CheckSceneReadyToRender
`public bool CheckSceneReadyToRender()`

**用途 / Purpose:** 处理 `check scene ready to render` 相关逻辑。

### SetDoQuickExposure
`public void SetDoQuickExposure(bool value)`

**用途 / Purpose:** 设置 `do quick exposure` 的值或状态。

### SetCamera
`public void SetCamera(Camera camera)`

**用途 / Purpose:** 设置 `camera` 的值或状态。

### SetResolutionScaling
`public void SetResolutionScaling(bool value)`

**用途 / Purpose:** 设置 `resolution scaling` 的值或状态。

### SetPostfxFromConfig
`public void SetPostfxFromConfig()`

**用途 / Purpose:** 设置 `postfx from config` 的值或状态。

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position)`

**用途 / Purpose:** 处理 `world point to screen point` 相关逻辑。

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position)`

**用途 / Purpose:** 处理 `screen point to viewport point` 相关逻辑。

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**用途 / Purpose:** 处理 `projected mouse position on ground` 相关逻辑。

### ProjectedMousePositionOnWater
`public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)`

**用途 / Purpose:** 处理 `projected mouse position on water` 相关逻辑。

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)`

**用途 / Purpose:** 处理 `translate mouse` 相关逻辑。

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value)`

**用途 / Purpose:** 设置 `scene uses skybox` 的值或状态。

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value)`

**用途 / Purpose:** 设置 `scene uses shadows` 的值或状态。

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value)`

**用途 / Purpose:** 设置 `scene uses contour` 的值或状态。

### DoNotClear
`public void DoNotClear(bool value)`

**用途 / Purpose:** 处理 `do not clear` 相关逻辑。

### AddClearTask
`public void AddClearTask(bool clearOnlySceneview = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `clear task`。

### ReadyToRender
`public bool ReadyToRender()`

**用途 / Purpose:** 处理 `ready to render` 相关逻辑。

### SetClearAndDisableAfterSucessfullRender
`public void SetClearAndDisableAfterSucessfullRender(bool value)`

**用途 / Purpose:** 设置 `clear and disable after sucessfull render` 的值或状态。

### SetClearGbuffer
`public void SetClearGbuffer(bool value)`

**用途 / Purpose:** 设置 `clear gbuffer` 的值或状态。

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**用途 / Purpose:** 设置 `shadowmap resolution multiplier` 的值或状态。

### SetPointlightResolutionMultiplier
`public void SetPointlightResolutionMultiplier(float value)`

**用途 / Purpose:** 设置 `pointlight resolution multiplier` 的值或状态。

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**用途 / Purpose:** 设置 `clean screen until loading done` 的值或状态。

### ClearAll
`public void ClearAll(bool clearScene, bool removeTerrain)`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**用途 / Purpose:** 设置 `focused shadowmap` 的值或状态。

### GetScene
`public Scene GetScene()`

**用途 / Purpose:** 获取 `scene` 的当前值。

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain` 相关逻辑。

## 使用示例

```csharp
var view = new SceneView();
```

## 参见

- [完整类目录](../catalog)