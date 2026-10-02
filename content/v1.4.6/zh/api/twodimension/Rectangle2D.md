---
title: "Rectangle2D"
description: "Rectangle2D：TaleWorlds.TwoDimension 的 public 结构体；公开成员 26 个（方法 25、属性 1、字段 0）。源文件 TaleWorlds.TwoDimension/Rectangle2D.cs。"
---
# Rectangle2D

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct Rectangle2D`
**File:** `TaleWorlds.TwoDimension/Rectangle2D.cs`

## 概述

Rectangle2D 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/Rectangle2D.cs。它是一个 public 结构体，继承链为 Rectangle2D。public/protected 成员共 26 个：25 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Rectangle2D 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 Rectangle2D。成员构成以方法为主（方法 25/26，属性 1/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/Rectangle2D.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Invalid` | `public static Rectangle2D Invalid` | 属性 |
| `Create` | `public static Rectangle2D Create()` | 方法 |
| `FillLocalValuesFrom` | `public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)` | 方法 |
| `GetVisualScale` | `public Vector2 GetVisualScale()` | 方法 |
| `AddVisualOffset` | `public void AddVisualOffset(float offsetX, float offsetY)` | 方法 |
| `SetVisualOffset` | `public void SetVisualOffset(float offsetX, float offsetY)` | 方法 |
| `AddVisualScale` | `public void AddVisualScale(float scaleX, float scaleY)` | 方法 |
| `SetVisualScale` | `public void SetVisualScale(float scaleX, float scaleY)` | 方法 |
| `AddVisualRotationOffset` | `public void AddVisualRotationOffset(float rotationOffset)` | 方法 |
| `SetVisualRotationOffset` | `public void SetVisualRotationOffset(float rotationOffset)` | 方法 |
| `ValidateVisuals` | `public void ValidateVisuals()` | 方法 |
| `DrawBoundingBox` | `public void DrawBoundingBox()` | 方法 |
| `DrawCorners` | `public void DrawCorners()` | 方法 |
| `CalculateMatrixFrame` | `public void CalculateMatrixFrame(in Rectangle2D parentRectangle)` | 方法 |
| `CalculateVisualMatrixFrame` | `public void CalculateVisualMatrixFrame()` | 方法 |
| `GetCachedOrigin` | `public Vector2 GetCachedOrigin()` | 方法 |
| `GetCachedMatrixFrame` | `public MatrixFrame GetCachedMatrixFrame()` | 方法 |
| `GetCachedVisualMatrixFrame` | `public MatrixFrame GetCachedVisualMatrixFrame()` | 方法 |
| `GetCenter` | `public Vector2 GetCenter()` | 方法 |
| `GetBoundingBox` | `public SimpleRectangle GetBoundingBox()` | 方法 |
| `IsIdentical` | `public bool IsIdentical(in Rectangle2D other)` | 方法 |
| `IsCollide` | `public bool IsCollide(in Rectangle2D other)` | 方法 |
| `IsSubRectOf` | `public bool IsSubRectOf(in Rectangle2D other)` | 方法 |
| `IsPointInside` | `public bool IsPointInside(in Vector2 point)` | 方法 |
| `TransformScreenPositionToLocal` | `public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)` | 方法 |
| `TransformLocalPositionToScreen` | `public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
