---
title: "Camera"
description: "Auto-generated class reference for Camera."
---
# Camera

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Camera : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Camera.cs

## Overview

Auto-generated stub for `Camera`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateCamera
`public static Camera CreateCamera()`

### ReleaseCamera
`public void ReleaseCamera()`

### ReleaseCameraEntity
`public void ReleaseCameraEntity()`

### LookAt
`public void LookAt(Vec3 position,Vec3 target,Vec3 upVector)`

### ScreenSpaceRayProjection
`public void ScreenSpaceRayProjection(Vec2 screenPosition,ref Vec3 rayBegin,ref Vec3 rayEnd)`

### CheckEntityVisibility
`public bool CheckEntityVisibility(GameEntity entity)`

### SetViewVolume
`public void SetViewVolume(bool perspective,float dLeft,float dRight,float dBottom,float dTop,float dNear,float dFar)`

### GetNearPlanePointsStatic
`public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame,float verticalFov,float aspectRatioXY,float newDNear,float newDFar,Vec3[] nearPlanePoints)`

### GetNearPlanePoints
`public void GetNearPlanePoints(Vec3[] nearPlanePoints)`

### SetFovVertical
`public void SetFovVertical(float verticalFov,float aspectRatioXY,float newDNear,float newDFar)`

### SetFovHorizontal
`public void SetFovHorizontal(float horizontalFov,float aspectRatioXY,float newDNear,float newDFar)`

### GetViewProjMatrix
`public void GetViewProjMatrix(ref MatrixFrame viewProj)`

### GetFovVertical
`public float GetFovVertical()`

### GetFovHorizontal
`public float GetFovHorizontal()`

### GetAspectRatio
`public float GetAspectRatio()`

### FillParametersFrom
`public void FillParametersFrom(Camera otherCamera)`

### RenderFrustrum
`public void RenderFrustrum()`

### ViewportPointToWorldRay
`public void ViewportPointToWorldRay(ref Vec3 rayBegin,ref Vec3 rayEnd,Vec2 viewportPoint)`

### WorldPointToViewPortPoint
`public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)`

### EnclosesPoint
`public bool EnclosesPoint(Vec3 pointInWorldSpace)`

### ConstructCameraFromPositionElevationBearing
`public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position,float elevation,float bearing)`

## See Also

- [Section index](../)
