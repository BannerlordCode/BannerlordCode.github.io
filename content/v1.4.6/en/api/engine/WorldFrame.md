---
title: "WorldFrame"
description: "WorldFrame: a public struct in TaleWorlds.Engine; 6 exposed members (3 methods, 1 properties, 1 fields). Source: TaleWorlds.Engine/WorldFrame.cs."
---
# WorldFrame

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WorldFrame`
**File:** `TaleWorlds.Engine/WorldFrame.cs`

## Overview

WorldFrame lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/WorldFrame.cs. It is a public struct; the inheritance chain is WorldFrame. It exposes 6 public/protected members: 3 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorldFrame is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain WorldFrame. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/WorldFrame.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WorldFrame` | `public WorldFrame(Mat3 rotation, WorldPosition origin)` | constructor |
| `IsValid` | `public bool IsValid` | property |
| `ToGroundMatrixFrame` | `public MatrixFrame ToGroundMatrixFrame()` | method |
| `ToGroundMatrixFrameMT` | `public MatrixFrame ToGroundMatrixFrameMT()` | method |
| `ToNavMeshMatrixFrame` | `public MatrixFrame ToNavMeshMatrixFrame()` | method |
| `Invalid` | `public static readonly WorldFrame Invalid` | field |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
