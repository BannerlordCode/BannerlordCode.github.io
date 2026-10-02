---
title: "CapsuleData"
description: "CapsuleData: a public struct in TaleWorlds.Engine; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.Engine/CapsuleData.cs."
---
# CapsuleData

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct CapsuleData`
**File:** `TaleWorlds.Engine/CapsuleData.cs`

## Overview

CapsuleData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/CapsuleData.cs. It is a public struct; the inheritance chain is CapsuleData. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CapsuleData is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain CapsuleData. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/CapsuleData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `P1` | `public Vec3 P1` | property |
| `P2` | `public Vec3 P2` | property |
| `Radius` | `public float Radius` | property |
| `CapsuleData` | `public CapsuleData(float radius, Vec3 p1, Vec3 p2)` | constructor |
| `Vec3>GetBoxMinMax` | `public ValueTuple<Vec3, Vec3>GetBoxMinMax()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
