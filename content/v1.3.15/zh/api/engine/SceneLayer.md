---
title: "SceneLayer"
description: "SceneLayer 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 为 scene 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetScene(scene);
```

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 render with postfx 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetRenderWithPostfx(false);
```

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 postfx config params 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetPostfxConfigParams(0);
```

### SetCamera
`public void SetCamera(Camera camera)`

**用途 / Purpose:** **用途 / Purpose:** 为 camera 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetCamera(camera);
```

### SetPostfxFromConfig
`public void SetPostfxFromConfig()`

**用途 / Purpose:** **用途 / Purpose:** 为 postfx from config 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetPostfxFromConfig();
```

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position)`

**用途 / Purpose:** **用途 / Purpose:** 调用 WorldPointToScreenPoint 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.WorldPointToScreenPoint(position);
```

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ScreenPointToViewportPoint 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.ScreenPointToViewportPoint(position);
```

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProjectedMousePositionOnGround 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.ProjectedMousePositionOnGround(groundPosition, groundNormal, false, excludeBodyOwnerFlags, false);
```

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TranslateMouse 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.TranslateMouse(worldMouseNear, worldMouseFar, 0);
```

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene uses skybox 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetSceneUsesSkybox(false);
```

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene uses shadows 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetSceneUsesShadows(false);
```

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 scene uses contour 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetSceneUsesContour(false);
```

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 shadowmap resolution multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetShadowmapResolutionMultiplier(0);
```

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**用途 / Purpose:** **用途 / Purpose:** 为 focused shadowmap 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetFocusedShadowmap(false, center, 0);
```

### DoNotClear
`public void DoNotClear(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoNotClear 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.DoNotClear(false);
```

### ReadyToRender
`public bool ReadyToRender()`

**用途 / Purpose:** **用途 / Purpose:** 读取y to render的数据或状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.ReadyToRender();
```

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 clean screen until loading done 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.SetCleanScreenUntilLoadingDone(false);
```

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的all。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.ClearAll();
```

### ClearRuntimeGPUMemory
`public void ClearRuntimeGPUMemory(bool remove_terrain)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的runtime g p u memory。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
sceneLayer.ClearRuntimeGPUMemory(false);
```

### HitTest
`public override bool HitTest(Vector2 position)`

**用途 / Purpose:** **用途 / Purpose:** 调用 HitTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.HitTest(position);
```

### HitTest
`public override bool HitTest()`

**用途 / Purpose:** **用途 / Purpose:** 调用 HitTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.HitTest();
```

### FocusTest
`public override bool FocusTest()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FocusTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 SceneLayer 实例
SceneLayer sceneLayer = ...;
var result = sceneLayer.FocusTest();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SceneLayer sceneLayer = ...;
sceneLayer.SetScene(scene);
```

## 参见

- [本区域目录](../)