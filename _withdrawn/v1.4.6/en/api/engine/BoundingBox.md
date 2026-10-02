---
title: "BoundingBox"
description: "BoundingBox: a public struct in TaleWorlds.Engine; 17 exposed members (14 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/BoundingBox.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoundingBox

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct BoundingBox`
**File:** `TaleWorlds.Engine/BoundingBox.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

BoundingBox lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/BoundingBox.cs. It is a public struct; the inheritance chain is BoundingBox. It exposes 17 public/protected members: 14 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoundingBox lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain BoundingBox. The surface is method-led (methods 14/17, properties 1/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/BoundingBox.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `this[...]` | `public Vec3 this[int index]` | indexer |
| `BoundingBox` | `public BoundingBox(in Vec3 point)` | constructor |
| `RelaxMinMaxWithPoint` | `public void RelaxMinMaxWithPoint(in Vec3 point)` | method |
| `RelaxMinMaxWithPointAndRadius` | `public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)` | method |
| `RecomputeRadius` | `public void RecomputeRadius()` | method |
| `GetTransformedTipPointsToParent` | `public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)` | method |
| `GetTransformedTipPointsToChild` | `public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)` | method |
| `RelaxWithBoundingBox` | `public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)` | method |
| `RelaxWithArbitraryBoundingBox` | `public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)` | method |
| `RelaxWithChildBoundingBox` | `public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)` | method |
| `BeginRelaxation` | `public void BeginRelaxation()` | method |
| `ArrangeWithAnotherBoundingBox` | `public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)` | method |
| `PointInsideBox` | `public bool PointInsideBox(Vec3 point, float epsilon)` | method |
| `GetLongestHalfDimensionOfBoundingBox` | `public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)` | method |
| `RenderBoundingBox` | `public void RenderBoundingBox()` | method |
| `TransformedBoundingBoxPointsContainer` | `public struct TransformedBoundingBoxPointsContainer` | property |
| `TransformedBoundingBoxPointsContainer` | `public struct TransformedBoundingBoxPointsContainer` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
