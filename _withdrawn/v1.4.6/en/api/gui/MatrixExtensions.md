---
title: "MatrixExtensions"
description: "MatrixExtensions: a public class in TaleWorlds.TwoDimension.Standalone; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatrixExtensions

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class MatrixExtensions`
**File:** `TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

MatrixExtensions lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs. It is a public class; the inheritance chain is MatrixExtensions. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MatrixExtensions lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain MatrixExtensions. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ToMatrix4x4` | `public static Matrix4x4 ToMatrix4x4(this MatrixFrame matrixFrame)` | method |
| `ToMatrixFrame` | `public static MatrixFrame ToMatrixFrame(this Matrix4x4 matrix)` | method |
| `AreAllComponentsValid` | `public static bool AreAllComponentsValid(this Matrix4x4 matrix)` | method |
| `AreAllComponentsValid` | `public static bool AreAllComponentsValid(this MatrixFrame matrix)` | method |
| `CreateOrthographicOffCenter` | `public static MatrixFrame CreateOrthographicOffCenter(float left, float right, float bottom, float top, float zNearPlane, float zFarPlane)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
