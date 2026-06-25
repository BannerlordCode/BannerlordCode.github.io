---
title: "SceneLayer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneLayer`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneLayer

**Namespace:** TaleWorlds.Engine.Screens
**Module:** TaleWorlds.Engine
**Type:** `public class SceneLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `TaleWorlds.Engine/Screens/SceneLayer.cs`

## 概述

`SceneLayer` 位于 `TaleWorlds.Engine.Screens`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize { get; }` |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |

## 主要方法

### SetScene
`public void SetScene(Scene scene)`

**用途 / Purpose:** 设置 `scene` 的值或状态。

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**用途 / Purpose:** 设置 `render with postfx` 的值或状态。

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**用途 / Purpose:** 设置 `postfx config params` 的值或状态。

### SetCamera
`public void SetCamera(Camera camera)`

**用途 / Purpose:** 设置 `camera` 的值或状态。

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

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**用途 / Purpose:** 设置 `shadowmap resolution multiplier` 的值或状态。

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**用途 / Purpose:** 设置 `focused shadowmap` 的值或状态。

### DoNotClear
`public void DoNotClear(bool value)`

**用途 / Purpose:** 处理 `do not clear` 相关逻辑。

### ReadyToRender
`public bool ReadyToRender()`

**用途 / Purpose:** 处理 `ready to render` 相关逻辑。

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**用途 / Purpose:** 设置 `clean screen until loading done` 的值或状态。

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### ClearRuntimeGPUMemory
`public void ClearRuntimeGPUMemory(bool remove_terrain)`

**用途 / Purpose:** 处理 `clear runtime g p u memory` 相关逻辑。

### HitTest
`public override bool HitTest(Vector2 position)`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### HitTest
`public override bool HitTest()`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### FocusTest
`public override bool FocusTest()`

**用途 / Purpose:** 处理 `focus test` 相关逻辑。

## 使用示例

```csharp
var value = new SceneLayer();
value.SetScene(scene);
```

## 参见

- [完整类目录](../catalog)