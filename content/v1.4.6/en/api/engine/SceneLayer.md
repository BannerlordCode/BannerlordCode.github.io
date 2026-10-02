---
title: "SceneLayer"
description: "SceneLayer: a public class in TaleWorlds.Engine, inheriting ScreenLayer; 30 exposed members (26 methods, 3 properties, 0 fields). Source: TaleWorlds.Engine/Screens/SceneLayer.cs."
---
# SceneLayer

**Namespace:** `TaleWorlds.Engine.Screens`
**Module:** `TaleWorlds.Engine`
**Type:** `public class SceneLayer : ScreenLayer`
**File:** `TaleWorlds.Engine/Screens/SceneLayer.cs`

## Overview

SceneLayer lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Screens/SceneLayer.cs. It is a public class, implementing/inheriting ScreenLayer; the inheritance chain is SceneLayer → ScreenLayer. It exposes 30 public/protected members: 26 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneLayer is a top-level type in TaleWorlds.Engine, namespace differing from (TaleWorlds.Engine.Screens) the module directory; inheritance chain SceneLayer → ScreenLayer. The surface is method-led (methods 26/30, properties 3/30), so it mostly exposes operations. ScreenLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Screens/SceneLayer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize` | property |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView` | property |
| `SceneView` | `public SceneView SceneView` | property |
| `SceneLayer` | `public SceneLayer(bool clearSceneOnFinalize = true, bool autoToggleSceneView = true) : base(" ", -100)` | constructor |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `SetScene` | `public void SetScene(Scene scene)` | method |
| `SetRenderWithPostfx` | `public void SetRenderWithPostfx(bool value)` | method |
| `SetPostfxConfigParams` | `public void SetPostfxConfigParams(int value)` | method |
| `SetCamera` | `public void SetCamera(Camera camera)` | method |
| `SetPostfxFromConfig` | `public void SetPostfxFromConfig()` | method |
| `WorldPointToScreenPoint` | `public Vec2 WorldPointToScreenPoint(Vec3 position)` | method |
| `ScreenPointToViewportPoint` | `public Vec2 ScreenPointToViewportPoint(Vec2 position)` | method |
| `ProjectedMousePositionOnGround` | `public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)` | method |
| `TranslateMouse` | `public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)` | method |
| `SetSceneUsesSkybox` | `public void SetSceneUsesSkybox(bool value)` | method |
| `SetSceneUsesShadows` | `public void SetSceneUsesShadows(bool value)` | method |
| `SetSceneUsesContour` | `public void SetSceneUsesContour(bool value)` | method |
| `SetShadowmapResolutionMultiplier` | `public void SetShadowmapResolutionMultiplier(float value)` | method |
| `SetFocusedShadowmap` | `public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)` | method |
| `DoNotClear` | `public void DoNotClear(bool value)` | method |
| `ReadyToRender` | `public bool ReadyToRender()` | method |
| `SetCleanScreenUntilLoadingDone` | `public void SetCleanScreenUntilLoadingDone(bool value)` | method |
| `ClearAll` | `public void ClearAll()` | method |
| `ClearRuntimeGPUMemory` | `public void ClearRuntimeGPUMemory(bool remove_terrain)` | method |
| `RefreshGlobalOrder` | `protected override void RefreshGlobalOrder(ref int currentOrder)` | method |
| `HitTest` | `public override bool HitTest(Vector2 position)` | method |
| `HitTest` | `public override bool HitTest()` | method |
| `FocusTest` | `public override bool FocusTest()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
