---
title: "SceneLayer"
description: "SceneLayer 的自动生成类参考。"
---
# SceneLayer

**Namespace:** TaleWorlds.Engine.Screens
**Module:** TaleWorlds.Engine
**Type:** `public class SceneLayer : ScreenLayer `
**Base:** ScreenLayer
**Source:** TaleWorlds.Engine/Screens/SceneLayer.cs

## 概述

`SceneLayer` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Screens/SceneLayer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnActivate
`protected override void OnActivate() `

### OnDeactivate
`protected override void OnDeactivate() `

### OnFinalize
`protected override void OnFinalize() `

### SetScene
`public void SetScene(Scene scene) `

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value) `

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value) `

### SetCamera
`public void SetCamera(Camera camera) `

### SetPostfxFromConfig
`public void SetPostfxFromConfig() `

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position) `

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position) `

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition,out Vec3 groundNormal,bool mouseVisible,BodyFlags excludeBodyOwnerFlags,bool checkOccludedSurface) `

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear,ref Vec3 worldMouseFar,float maxDistance = -1f) `

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value) `

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value) `

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value) `

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value) `

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable,ref Vec3 center,float radius) `

### DoNotClear
`public void DoNotClear(bool value) `

### ReadyToRender
`public bool ReadyToRender() `

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value) `

### ClearAll
`public void ClearAll() `

### ClearRuntimeGPUMemory
`public void ClearRuntimeGPUMemory(bool remove_terrain) `

### RefreshGlobalOrder
`protected override void RefreshGlobalOrder(ref int currentOrder) `

### HitTest
`public override bool HitTest(Vector2 position) `
`public override bool HitTest() `

### FocusTest
`public override bool FocusTest() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
