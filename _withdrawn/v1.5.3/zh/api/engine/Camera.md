---
title: "Camera"
description: "Camera 的自动生成类参考。"
---
# Camera

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Camera : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Camera.cs

## 概述

`Camera` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Camera.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateCamera
`public static Camera CreateCamera() `

### ReleaseCamera
`public void ReleaseCamera() `

### ReleaseCameraEntity
`public void ReleaseCameraEntity() `

### LookAt
`public void LookAt(Vec3 position,Vec3 target,Vec3 upVector) `

### ScreenSpaceRayProjection
`public void ScreenSpaceRayProjection(Vec2 screenPosition,ref Vec3 rayBegin,ref Vec3 rayEnd) `

### CheckEntityVisibility
`public bool CheckEntityVisibility(GameEntity entity) `

### SetViewVolume
`public void SetViewVolume(bool perspective,float dLeft,float dRight,float dBottom,float dTop,float dNear,float dFar) `

### GetNearPlanePointsStatic
`public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame,float verticalFov,float aspectRatioXY,float newDNear,float newDFar,Vec3[] nearPlanePoints) `

### GetNearPlanePoints
`public void GetNearPlanePoints(Vec3[] nearPlanePoints) `

### SetFovVertical
`public void SetFovVertical(float verticalFov,float aspectRatioXY,float newDNear,float newDFar) `

### SetFovHorizontal
`public void SetFovHorizontal(float horizontalFov,float aspectRatioXY,float newDNear,float newDFar) `

### GetViewProjMatrix
`public void GetViewProjMatrix(ref MatrixFrame viewProj) `

### GetFovVertical
`public float GetFovVertical() `

### GetFovHorizontal
`public float GetFovHorizontal() `

### GetAspectRatio
`public float GetAspectRatio() `

### FillParametersFrom
`public void FillParametersFrom(Camera otherCamera) `

### RenderFrustrum
`public void RenderFrustrum() `

### ViewportPointToWorldRay
`public void ViewportPointToWorldRay(ref Vec3 rayBegin,ref Vec3 rayEnd,Vec2 viewportPoint) `

### WorldPointToViewPortPoint
`public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint) `

### EnclosesPoint
`public bool EnclosesPoint(Vec3 pointInWorldSpace) `

### ConstructCameraFromPositionElevationBearing
`public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position,float elevation,float bearing) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
