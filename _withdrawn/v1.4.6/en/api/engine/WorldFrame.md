---
title: "WorldFrame"
description: "WorldFrame: a public struct in TaleWorlds.Engine; 6 exposed members (3 methods, 1 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Engine/WorldFrame.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WorldFrame

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WorldFrame`
**File:** `TaleWorlds.Engine/WorldFrame.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

WorldFrame lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/WorldFrame.cs. It is a public struct; the inheritance chain is WorldFrame. It exposes 6 public/protected members: 3 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorldFrame lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain WorldFrame. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/WorldFrame.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WorldFrame` | `public WorldFrame(Mat3 rotation, WorldPosition origin)` | constructor |
| `IsValid` | `public bool IsValid` | property |
| `ToGroundMatrixFrame` | `public MatrixFrame ToGroundMatrixFrame()` | method |
| `ToGroundMatrixFrameMT` | `public MatrixFrame ToGroundMatrixFrameMT()` | method |
| `ToNavMeshMatrixFrame` | `public MatrixFrame ToNavMeshMatrixFrame()` | method |
| `Invalid` | `public static readonly WorldFrame Invalid` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
