---
title: "Camera"
description: "Camera: a public class in TaleWorlds.Engine, inheriting NativeObject; 28 exposed members (21 methods, 7 properties, 0 fields). Source: TaleWorlds.Engine/Camera.cs."
---
# Camera

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Camera : NativeObject`
**File:** `TaleWorlds.Engine/Camera.cs`

## Overview

Camera lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Camera.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is Camera → NativeObject. It exposes 28 public/protected members: 21 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Camera is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Camera → NativeObject. The surface is method-led (methods 21/28, properties 7/28), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Camera.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateCamera` | `public static Camera CreateCamera()` | method |
| `ReleaseCamera` | `public void ReleaseCamera()` | method |
| `ReleaseCameraEntity` | `public void ReleaseCameraEntity()` | method |
| `LookAt` | `public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)` | method |
| `ScreenSpaceRayProjection` | `public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)` | method |
| `CheckEntityVisibility` | `public bool CheckEntityVisibility(GameEntity entity)` | method |
| `SetViewVolume` | `public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)` | method |
| `GetNearPlanePointsStatic` | `public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3[]nearPlanePoints)` | method |
| `GetNearPlanePoints` | `public void GetNearPlanePoints(Vec3[]nearPlanePoints)` | method |
| `SetFovVertical` | `public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)` | method |
| `SetFovHorizontal` | `public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)` | method |
| `GetViewProjMatrix` | `public void GetViewProjMatrix(ref MatrixFrame viewProj)` | method |
| `GetFovVertical` | `public float GetFovVertical()` | method |
| `GetFovHorizontal` | `public float GetFovHorizontal()` | method |
| `GetAspectRatio` | `public float GetAspectRatio()` | method |
| `FillParametersFrom` | `public void FillParametersFrom(Camera otherCamera)` | method |
| `RenderFrustrum` | `public void RenderFrustrum()` | method |
| `Entity` | `public GameEntity Entity` | property |
| `Position` | `public Vec3 Position` | property |
| `Direction` | `public Vec3 Direction` | property |
| `Frame` | `public MatrixFrame Frame` | property |
| `Near` | `public float Near` | property |
| `Far` | `public float Far` | property |
| `HorizontalFov` | `public float HorizontalFov` | property |
| `ViewportPointToWorldRay` | `public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)` | method |
| `WorldPointToViewPortPoint` | `public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)` | method |
| `EnclosesPoint` | `public bool EnclosesPoint(Vec3 pointInWorldSpace)` | method |
| `ConstructCameraFromPositionElevationBearing` | `public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position, float elevation, float bearing)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
