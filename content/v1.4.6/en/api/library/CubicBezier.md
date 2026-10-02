---
title: "CubicBezier"
description: "CubicBezier: a public class in TaleWorlds.Library; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/CubicBezier.cs."
---
# CubicBezier

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class CubicBezier`
**File:** `TaleWorlds.Library/CubicBezier.cs`

## Overview

CubicBezier lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CubicBezier.cs. It is a public class; the inheritance chain is CubicBezier. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CubicBezier is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain CubicBezier. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CubicBezier.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateEase` | `public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)` | method |
| `CreateYBeginToYEndWithRelativeControlDirs` | `public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)` | method |
| `CreateYBeginToYEnd` | `public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)` | method |
| `Sample` | `public double Sample(double x)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
