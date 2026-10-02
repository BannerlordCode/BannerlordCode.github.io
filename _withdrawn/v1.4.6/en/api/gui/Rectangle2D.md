---
title: "Rectangle2D"
description: "Rectangle2D: a public struct in TaleWorlds.TwoDimension; 26 exposed members (25 methods, 1 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/Rectangle2D.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Rectangle2D

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct Rectangle2D`
**File:** `TaleWorlds.TwoDimension/Rectangle2D.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

Rectangle2D lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/Rectangle2D.cs. It is a public struct; the inheritance chain is Rectangle2D. It exposes 26 public/protected members: 25 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Rectangle2D lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain Rectangle2D. The surface is method-led (methods 25/26, properties 1/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/Rectangle2D.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Invalid` | `public static Rectangle2D Invalid` | property |
| `Create` | `public static Rectangle2D Create()` | method |
| `FillLocalValuesFrom` | `public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)` | method |
| `GetVisualScale` | `public Vector2 GetVisualScale()` | method |
| `AddVisualOffset` | `public void AddVisualOffset(float offsetX, float offsetY)` | method |
| `SetVisualOffset` | `public void SetVisualOffset(float offsetX, float offsetY)` | method |
| `AddVisualScale` | `public void AddVisualScale(float scaleX, float scaleY)` | method |
| `SetVisualScale` | `public void SetVisualScale(float scaleX, float scaleY)` | method |
| `AddVisualRotationOffset` | `public void AddVisualRotationOffset(float rotationOffset)` | method |
| `SetVisualRotationOffset` | `public void SetVisualRotationOffset(float rotationOffset)` | method |
| `ValidateVisuals` | `public void ValidateVisuals()` | method |
| `DrawBoundingBox` | `public void DrawBoundingBox()` | method |
| `DrawCorners` | `public void DrawCorners()` | method |
| `CalculateMatrixFrame` | `public void CalculateMatrixFrame(in Rectangle2D parentRectangle)` | method |
| `CalculateVisualMatrixFrame` | `public void CalculateVisualMatrixFrame()` | method |
| `GetCachedOrigin` | `public Vector2 GetCachedOrigin()` | method |
| `GetCachedMatrixFrame` | `public MatrixFrame GetCachedMatrixFrame()` | method |
| `GetCachedVisualMatrixFrame` | `public MatrixFrame GetCachedVisualMatrixFrame()` | method |
| `GetCenter` | `public Vector2 GetCenter()` | method |
| `GetBoundingBox` | `public SimpleRectangle GetBoundingBox()` | method |
| `IsIdentical` | `public bool IsIdentical(in Rectangle2D other)` | method |
| `IsCollide` | `public bool IsCollide(in Rectangle2D other)` | method |
| `IsSubRectOf` | `public bool IsSubRectOf(in Rectangle2D other)` | method |
| `IsPointInside` | `public bool IsPointInside(in Vector2 point)` | method |
| `TransformScreenPositionToLocal` | `public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)` | method |
| `TransformLocalPositionToScreen` | `public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
