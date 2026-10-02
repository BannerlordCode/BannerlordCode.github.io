---
title: "MeshBuilder"
description: "MeshBuilder: a public class in TaleWorlds.Engine; 12 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/MeshBuilder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MeshBuilder

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class MeshBuilder`
**File:** `TaleWorlds.Engine/MeshBuilder.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

MeshBuilder lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MeshBuilder.cs. It is a public class; the inheritance chain is MeshBuilder. It exposes 12 public/protected members: 7 methods, 2 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MeshBuilder lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain MeshBuilder. The surface is method-led (methods 7/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MeshBuilder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MeshBuilder` | `public MeshBuilder()` | constructor |
| `AddFaceCorner` | `public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)` | method |
| `AddFace` | `public int AddFace(int patchNode0, int patchNode1, int patchNode2)` | method |
| `Clear` | `public void Clear()` | method |
| `Finalize` | `public new Mesh Finalize()` | method |
| `CreateUnitMesh` | `public static Mesh CreateUnitMesh()` | method |
| `CreateTilingWindowMesh` | `public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)` | method |
| `CreateTilingButtonMesh` | `public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)` | method |
| `FaceCorner` | `public struct FaceCorner` | property |
| `Face` | `public struct Face` | property |
| `FaceCorner` | `public struct FaceCorner` | nested type |
| `Face` | `public struct Face` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
