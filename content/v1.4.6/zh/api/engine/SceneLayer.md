---
title: "SceneLayer"
description: "SceneLayer：TaleWorlds.Engine 的 public 类，继承 ScreenLayer；公开成员 30 个（方法 26、属性 3、字段 0）。源文件 TaleWorlds.Engine/Screens/SceneLayer.cs。"
---
# SceneLayer

**Namespace:** `TaleWorlds.Engine.Screens`
**Module:** `TaleWorlds.Engine`
**Type:** `public class SceneLayer : ScreenLayer`
**File:** `TaleWorlds.Engine/Screens/SceneLayer.cs`

## 概述

SceneLayer 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Screens/SceneLayer.cs。它是一个 public 类，实现/继承 ScreenLayer，继承链为 SceneLayer → ScreenLayer。public/protected 成员共 30 个：26 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneLayer 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录不同（TaleWorlds.Engine.Screens），继承链 SceneLayer → ScreenLayer。成员构成以方法为主（方法 26/30，属性 3/30），对外主要以操作入口暴露。继承链上的 ScreenLayer 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Screens/SceneLayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize` | 属性 |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView` | 属性 |
| `SceneView` | `public SceneView SceneView` | 属性 |
| `SceneLayer` | `public SceneLayer(bool clearSceneOnFinalize = true, bool autoToggleSceneView = true) : base(" ", -100)` | 构造函数 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `SetScene` | `public void SetScene(Scene scene)` | 方法 |
| `SetRenderWithPostfx` | `public void SetRenderWithPostfx(bool value)` | 方法 |
| `SetPostfxConfigParams` | `public void SetPostfxConfigParams(int value)` | 方法 |
| `SetCamera` | `public void SetCamera(Camera camera)` | 方法 |
| `SetPostfxFromConfig` | `public void SetPostfxFromConfig()` | 方法 |
| `WorldPointToScreenPoint` | `public Vec2 WorldPointToScreenPoint(Vec3 position)` | 方法 |
| `ScreenPointToViewportPoint` | `public Vec2 ScreenPointToViewportPoint(Vec2 position)` | 方法 |
| `ProjectedMousePositionOnGround` | `public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)` | 方法 |
| `TranslateMouse` | `public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)` | 方法 |
| `SetSceneUsesSkybox` | `public void SetSceneUsesSkybox(bool value)` | 方法 |
| `SetSceneUsesShadows` | `public void SetSceneUsesShadows(bool value)` | 方法 |
| `SetSceneUsesContour` | `public void SetSceneUsesContour(bool value)` | 方法 |
| `SetShadowmapResolutionMultiplier` | `public void SetShadowmapResolutionMultiplier(float value)` | 方法 |
| `SetFocusedShadowmap` | `public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)` | 方法 |
| `DoNotClear` | `public void DoNotClear(bool value)` | 方法 |
| `ReadyToRender` | `public bool ReadyToRender()` | 方法 |
| `SetCleanScreenUntilLoadingDone` | `public void SetCleanScreenUntilLoadingDone(bool value)` | 方法 |
| `ClearAll` | `public void ClearAll()` | 方法 |
| `ClearRuntimeGPUMemory` | `public void ClearRuntimeGPUMemory(bool remove_terrain)` | 方法 |
| `RefreshGlobalOrder` | `protected override void RefreshGlobalOrder(ref int currentOrder)` | 方法 |
| `HitTest` | `public override bool HitTest(Vector2 position)` | 方法 |
| `HitTest` | `public override bool HitTest()` | 方法 |
| `FocusTest` | `public override bool FocusTest()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
