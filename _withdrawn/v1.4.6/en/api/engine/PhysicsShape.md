---
title: "PhysicsShape"
description: "PhysicsShape: a public class in TaleWorlds.Engine, inheriting Resource; 25 exposed members (25 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/PhysicsShape.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PhysicsShape

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class PhysicsShape : Resource`
**File:** `TaleWorlds.Engine/PhysicsShape.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

PhysicsShape lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/PhysicsShape.cs. It is a public class (sealed), implementing/inheriting Resource; the inheritance chain is PhysicsShape → Resource → NativeObject. It exposes 25 public/protected members: 25 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PhysicsShape lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain PhysicsShape → Resource → NativeObject. The surface is method-led (methods 25/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/PhysicsShape.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetFromResource` | `public static PhysicsShape GetFromResource(string bodyName, bool mayReturnNull = false)` | method |
| `AddPreloadQueueWithName` | `public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)` | method |
| `ProcessPreloadQueue` | `public static void ProcessPreloadQueue()` | method |
| `UnloadDynamicBodies` | `public static void UnloadDynamicBodies()` | method |
| `CreateCopy` | `public PhysicsShape CreateCopy()` | method |
| `SphereCount` | `public int SphereCount()` | method |
| `GetSphere` | `public void GetSphere(ref SphereData data, int index)` | method |
| `GetSphere` | `public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)` | method |
| `GetDominantMaterialForTriangleMesh` | `public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)` | method |
| `GetName` | `public string GetName()` | method |
| `TriangleMeshCount` | `public int TriangleMeshCount()` | method |
| `TriangleCountInTriangleMesh` | `public int TriangleCountInTriangleMesh(int meshIndex)` | method |
| `GetTriangle` | `public void GetTriangle(Vec3[]triangle, int meshIndex, int triangleIndex)` | method |
| `Prepare` | `public void Prepare()` | method |
| `CapsuleCount` | `public int CapsuleCount()` | method |
| `AddCapsule` | `public void AddCapsule(CapsuleData data)` | method |
| `InitDescription` | `public void InitDescription()` | method |
| `AddSphere` | `public void AddSphere(SphereData data)` | method |
| `SetCapsule` | `public void SetCapsule(CapsuleData data, int index)` | method |
| `GetCapsule` | `public void GetCapsule(ref CapsuleData data, int index)` | method |
| `GetCapsule` | `public void GetCapsule(ref CapsuleData data, out PhysicsMaterial material, int index)` | method |
| `GetBoundingBox` | `public void GetBoundingBox(out BoundingBox boundingBox)` | method |
| `GetBoundingBoxCenter` | `public Vec3 GetBoundingBoxCenter()` | method |
| `Transform` | `public void Transform(ref MatrixFrame frame)` | method |
| `Clear` | `public void Clear()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Resource](../Resource/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
