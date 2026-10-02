---
title: "Transformation"
description: "Transformation: a public struct in TaleWorlds.Library; 16 exposed members (13 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/Transformation.cs."
---
# Transformation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Transformation`
**File:** `TaleWorlds.Library/Transformation.cs`

## Overview

Transformation lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Transformation.cs. It is a public struct; the inheritance chain is Transformation. It exposes 16 public/protected members: 13 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Transformation is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Transformation. The surface is method-led (methods 13/16, properties 2/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Transformation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Identity` | `public static Transformation Identity` | property |
| `Transformation` | `public Transformation(Vec3 origin, Mat3 rotation, Vec3 scale)` | constructor |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame` | property |
| `CreateFromMatrixFrame` | `public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)` | method |
| `CreateFromRotation` | `public static Transformation CreateFromRotation(Mat3 rotation)` | method |
| `TransformToParent` | `public Vec3 TransformToParent(Vec3 v)` | method |
| `TransformToParent` | `public Transformation TransformToParent(Transformation t)` | method |
| `TransformToLocal` | `public Vec3 TransformToLocal(Vec3 v)` | method |
| `TransformToLocal` | `public Transformation TransformToLocal(Transformation t)` | method |
| `Rotate` | `public void Rotate(float radian, Vec3 axis)` | method |
| `operator` | `public static bool operator` | operator |
| `ApplyScale` | `public void ApplyScale(Vec3 vec3)` | method |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
