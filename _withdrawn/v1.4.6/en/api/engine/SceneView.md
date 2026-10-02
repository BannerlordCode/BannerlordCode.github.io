---
title: "SceneView"
description: "SceneView: a public class in TaleWorlds.Engine, inheriting View; 31 exposed members (31 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/SceneView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SceneView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class SceneView : View`
**File:** `TaleWorlds.Engine/SceneView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

SceneView lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/SceneView.cs. It is a public class, implementing/inheriting View; the inheritance chain is SceneView → View → NativeObject. It exposes 31 public/protected members: 31 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneView lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain SceneView → View → NativeObject. The surface is method-led (methods 31/31, properties 0/31), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/SceneView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateSceneView` | `public static SceneView CreateSceneView()` | method |
| `SetScene` | `public void SetScene(Scene scene)` | method |
| `SetAcceptGlobalDebugRenderObjects` | `public void SetAcceptGlobalDebugRenderObjects(bool value)` | method |
| `SetRenderWithPostfx` | `public void SetRenderWithPostfx(bool value)` | method |
| `SetPostfxConfigParams` | `public void SetPostfxConfigParams(int value)` | method |
| `SetForceShaderCompilation` | `public void SetForceShaderCompilation(bool value)` | method |
| `CheckSceneReadyToRender` | `public bool CheckSceneReadyToRender()` | method |
| `SetDoQuickExposure` | `public void SetDoQuickExposure(bool value)` | method |
| `SetCamera` | `public void SetCamera(Camera camera)` | method |
| `SetResolutionScaling` | `public void SetResolutionScaling(bool value)` | method |
| `SetPostfxFromConfig` | `public void SetPostfxFromConfig()` | method |
| `WorldPointToScreenPoint` | `public Vec2 WorldPointToScreenPoint(Vec3 position)` | method |
| `ScreenPointToViewportPoint` | `public Vec2 ScreenPointToViewportPoint(Vec2 position)` | method |
| `ProjectedMousePositionOnGround` | `public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)` | method |
| `ProjectedMousePositionOnWater` | `public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)` | method |
| `TranslateMouse` | `public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)` | method |
| `SetSceneUsesSkybox` | `public void SetSceneUsesSkybox(bool value)` | method |
| `SetSceneUsesShadows` | `public void SetSceneUsesShadows(bool value)` | method |
| `SetSceneUsesContour` | `public void SetSceneUsesContour(bool value)` | method |
| `DoNotClear` | `public void DoNotClear(bool value)` | method |
| `AddClearTask` | `public void AddClearTask(bool clearOnlySceneview = false)` | method |
| `ReadyToRender` | `public bool ReadyToRender()` | method |
| `SetClearAndDisableAfterSucessfullRender` | `public void SetClearAndDisableAfterSucessfullRender(bool value)` | method |
| `SetClearGbuffer` | `public void SetClearGbuffer(bool value)` | method |
| `SetShadowmapResolutionMultiplier` | `public void SetShadowmapResolutionMultiplier(float value)` | method |
| `SetPointlightResolutionMultiplier` | `public void SetPointlightResolutionMultiplier(float value)` | method |
| `SetCleanScreenUntilLoadingDone` | `public void SetCleanScreenUntilLoadingDone(bool value)` | method |
| `ClearAll` | `public void ClearAll(bool clearScene, bool removeTerrain)` | method |
| `SetFocusedShadowmap` | `public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)` | method |
| `GetScene` | `public Scene GetScene()` | method |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface View](../View/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
