---
title: "Path"
description: "Path: a public class in TaleWorlds.Engine, inheriting NativeObject; 16 exposed members (14 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Path.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Path

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Path : NativeObject`
**File:** `TaleWorlds.Engine/Path.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Path lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Path.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is Path → NativeObject. It exposes 16 public/protected members: 14 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Path lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Path → NativeObject. The surface is method-led (methods 14/16, properties 2/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Path.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NumberOfPoints` | `public int NumberOfPoints` | property |
| `TotalDistance` | `public float TotalDistance` | property |
| `GetHermiteFrameForDt` | `public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)` | method |
| `GetFrameForDistance` | `public MatrixFrame GetFrameForDistance(float distance)` | method |
| `GetNearestFrameWithValidAlphaForDistance` | `public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)` | method |
| `GetFrameAndColorForDistance` | `public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)` | method |
| `GetArcLength` | `public float GetArcLength(int first_point)` | method |
| `GetPoints` | `public void GetPoints(MatrixFrame[]points)` | method |
| `GetTotalLength` | `public float GetTotalLength()` | method |
| `GetVersion` | `public int GetVersion()` | method |
| `SetFrameOfPoint` | `public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)` | method |
| `SetTangentPositionOfPoint` | `public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)` | method |
| `AddPathPoint` | `public int AddPathPoint(int newNodeIndex)` | method |
| `DeletePathPoint` | `public void DeletePathPoint(int nodeIndex)` | method |
| `HasValidAlphaAtPathPoint` | `public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)` | method |
| `GetName` | `public string GetName()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../../core-extra/NativeObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
