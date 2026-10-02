---
title: "SceneView"
description: "SceneView：TaleWorlds.Engine 的 public 类，继承 View；公开成员 31 个（方法 31、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/SceneView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SceneView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class SceneView : View`
**File:** `TaleWorlds.Engine/SceneView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

SceneView 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/SceneView.cs。它是一个 public 类，实现/继承 View，继承链为 SceneView → View → NativeObject。public/protected 成员共 31 个：31 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneView 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 SceneView → View → NativeObject。成员构成以方法为主（方法 31/31，属性 0/31），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/SceneView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateSceneView` | `public static SceneView CreateSceneView()` | 方法 |
| `SetScene` | `public void SetScene(Scene scene)` | 方法 |
| `SetAcceptGlobalDebugRenderObjects` | `public void SetAcceptGlobalDebugRenderObjects(bool value)` | 方法 |
| `SetRenderWithPostfx` | `public void SetRenderWithPostfx(bool value)` | 方法 |
| `SetPostfxConfigParams` | `public void SetPostfxConfigParams(int value)` | 方法 |
| `SetForceShaderCompilation` | `public void SetForceShaderCompilation(bool value)` | 方法 |
| `CheckSceneReadyToRender` | `public bool CheckSceneReadyToRender()` | 方法 |
| `SetDoQuickExposure` | `public void SetDoQuickExposure(bool value)` | 方法 |
| `SetCamera` | `public void SetCamera(Camera camera)` | 方法 |
| `SetResolutionScaling` | `public void SetResolutionScaling(bool value)` | 方法 |
| `SetPostfxFromConfig` | `public void SetPostfxFromConfig()` | 方法 |
| `WorldPointToScreenPoint` | `public Vec2 WorldPointToScreenPoint(Vec3 position)` | 方法 |
| `ScreenPointToViewportPoint` | `public Vec2 ScreenPointToViewportPoint(Vec2 position)` | 方法 |
| `ProjectedMousePositionOnGround` | `public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)` | 方法 |
| `ProjectedMousePositionOnWater` | `public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)` | 方法 |
| `TranslateMouse` | `public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)` | 方法 |
| `SetSceneUsesSkybox` | `public void SetSceneUsesSkybox(bool value)` | 方法 |
| `SetSceneUsesShadows` | `public void SetSceneUsesShadows(bool value)` | 方法 |
| `SetSceneUsesContour` | `public void SetSceneUsesContour(bool value)` | 方法 |
| `DoNotClear` | `public void DoNotClear(bool value)` | 方法 |
| `AddClearTask` | `public void AddClearTask(bool clearOnlySceneview = false)` | 方法 |
| `ReadyToRender` | `public bool ReadyToRender()` | 方法 |
| `SetClearAndDisableAfterSucessfullRender` | `public void SetClearAndDisableAfterSucessfullRender(bool value)` | 方法 |
| `SetClearGbuffer` | `public void SetClearGbuffer(bool value)` | 方法 |
| `SetShadowmapResolutionMultiplier` | `public void SetShadowmapResolutionMultiplier(float value)` | 方法 |
| `SetPointlightResolutionMultiplier` | `public void SetPointlightResolutionMultiplier(float value)` | 方法 |
| `SetCleanScreenUntilLoadingDone` | `public void SetCleanScreenUntilLoadingDone(bool value)` | 方法 |
| `ClearAll` | `public void ClearAll(bool clearScene, bool removeTerrain)` | 方法 |
| `SetFocusedShadowmap` | `public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)` | 方法 |
| `GetScene` | `public Scene GetScene()` | 方法 |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 View](../View/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
