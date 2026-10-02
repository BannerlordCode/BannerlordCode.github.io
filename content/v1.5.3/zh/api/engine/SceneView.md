---
title: "SceneView"
description: "SceneView 的自动生成类参考。"
---
# SceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SceneView : View `
**Base:** View
**Source:** TaleWorlds.Engine/SceneView.cs

## 概述

`SceneView` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/SceneView.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateSceneView
`public static SceneView CreateSceneView() `

### SetScene
`public void SetScene(Scene scene) `

### SetAcceptGlobalDebugRenderObjects
`public void SetAcceptGlobalDebugRenderObjects(bool value) `

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value) `

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value) `

### SetForceShaderCompilation
`public void SetForceShaderCompilation(bool value) `

### CheckSceneReadyToRender
`public bool CheckSceneReadyToRender() `

### SetDoQuickExposure
`public void SetDoQuickExposure(bool value) `

### SetCamera
`public void SetCamera(Camera camera) `

### SetResolutionScaling
`public void SetResolutionScaling(bool value) `

### SetPostfxFromConfig
`public void SetPostfxFromConfig() `

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position) `

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position) `

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition,out Vec3 groundNormal,bool mouseVisible,BodyFlags excludeBodyOwnerFlags,bool checkOccludedSurface) `

### ProjectedMousePositionOnWater
`public bool ProjectedMousePositionOnWater(out Vec3 waterPosition,bool mouseVisible) `

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear,ref Vec3 worldMouseFar,float maxDistance = -1f) `

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value) `

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value) `

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value) `

### DoNotClear
`public void DoNotClear(bool value) `

### AddClearTask
`public void AddClearTask(bool clearOnlySceneview = false) `

### ReadyToRender
`public bool ReadyToRender() `

### SetClearAndDisableAfterSucessfullRender
`public void SetClearAndDisableAfterSucessfullRender(bool value) `

### SetClearGbuffer
`public void SetClearGbuffer(bool value) `

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value) `

### SetPointlightResolutionMultiplier
`public void SetPointlightResolutionMultiplier(float value) `

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value) `

### ClearAll
`public void ClearAll(bool clearScene,bool removeTerrain) `

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable,ref Vec3 center,float radius) `

### GetScene
`public Scene GetScene() `

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out Vec3 closestPoint,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
