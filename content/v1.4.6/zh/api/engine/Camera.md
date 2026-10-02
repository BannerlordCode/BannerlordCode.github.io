---
title: "Camera"
description: "Camera：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 28 个（方法 21、属性 7、字段 0）。源文件 TaleWorlds.Engine/Camera.cs。"
---
# Camera

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Camera : NativeObject`
**File:** `TaleWorlds.Engine/Camera.cs`

## 概述

Camera 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Camera.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 Camera → NativeObject。public/protected 成员共 28 个：21 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Camera 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Camera → NativeObject。成员构成以方法为主（方法 21/28，属性 7/28），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Camera.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateCamera` | `public static Camera CreateCamera()` | 方法 |
| `ReleaseCamera` | `public void ReleaseCamera()` | 方法 |
| `ReleaseCameraEntity` | `public void ReleaseCameraEntity()` | 方法 |
| `LookAt` | `public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)` | 方法 |
| `ScreenSpaceRayProjection` | `public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)` | 方法 |
| `CheckEntityVisibility` | `public bool CheckEntityVisibility(GameEntity entity)` | 方法 |
| `SetViewVolume` | `public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)` | 方法 |
| `GetNearPlanePointsStatic` | `public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3[]nearPlanePoints)` | 方法 |
| `GetNearPlanePoints` | `public void GetNearPlanePoints(Vec3[]nearPlanePoints)` | 方法 |
| `SetFovVertical` | `public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)` | 方法 |
| `SetFovHorizontal` | `public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)` | 方法 |
| `GetViewProjMatrix` | `public void GetViewProjMatrix(ref MatrixFrame viewProj)` | 方法 |
| `GetFovVertical` | `public float GetFovVertical()` | 方法 |
| `GetFovHorizontal` | `public float GetFovHorizontal()` | 方法 |
| `GetAspectRatio` | `public float GetAspectRatio()` | 方法 |
| `FillParametersFrom` | `public void FillParametersFrom(Camera otherCamera)` | 方法 |
| `RenderFrustrum` | `public void RenderFrustrum()` | 方法 |
| `Entity` | `public GameEntity Entity` | 属性 |
| `Position` | `public Vec3 Position` | 属性 |
| `Direction` | `public Vec3 Direction` | 属性 |
| `Frame` | `public MatrixFrame Frame` | 属性 |
| `Near` | `public float Near` | 属性 |
| `Far` | `public float Far` | 属性 |
| `HorizontalFov` | `public float HorizontalFov` | 属性 |
| `ViewportPointToWorldRay` | `public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)` | 方法 |
| `WorldPointToViewPortPoint` | `public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)` | 方法 |
| `EnclosesPoint` | `public bool EnclosesPoint(Vec3 pointInWorldSpace)` | 方法 |
| `ConstructCameraFromPositionElevationBearing` | `public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position, float elevation, float bearing)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
