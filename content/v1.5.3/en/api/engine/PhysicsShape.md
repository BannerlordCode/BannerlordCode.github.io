---
title: "PhysicsShape"
description: "Auto-generated class reference for PhysicsShape."
---
# PhysicsShape

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class PhysicsShape : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/PhysicsShape.cs

## Overview

Auto-generated stub for `PhysicsShape`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetFromResource
`public static PhysicsShape GetFromResource(string bodyName,bool mayReturnNull = false)`

### AddPreloadQueueWithName
`public static void AddPreloadQueueWithName(string bodyName,Vec3 scale)`

### ProcessPreloadQueue
`public static void ProcessPreloadQueue()`

### UnloadDynamicBodies
`public static void UnloadDynamicBodies()`

### CreateCopy
`public PhysicsShape CreateCopy()`

### SphereCount
`public int SphereCount()`

### GetSphere
`public void GetSphere(ref SphereData data,int index)`

### GetDominantMaterialForTriangleMesh
`public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)`

### GetName
`public string GetName()`

### TriangleMeshCount
`public int TriangleMeshCount()`

### TriangleCountInTriangleMesh
`public int TriangleCountInTriangleMesh(int meshIndex)`

### GetTriangle
`public void GetTriangle(Vec3[] triangle,int meshIndex,int triangleIndex)`

### Prepare
`public void Prepare()`

### CapsuleCount
`public int CapsuleCount()`

### AddCapsule
`public void AddCapsule(CapsuleData data)`

### InitDescription
`public void InitDescription()`

### AddSphere
`public void AddSphere(SphereData data)`

### SetCapsule
`public void SetCapsule(CapsuleData data,int index)`

### GetCapsule
`public void GetCapsule(ref CapsuleData data,int index)`

### GetBoundingBox
`public void GetBoundingBox(out BoundingBox boundingBox)`

### GetBoundingBoxCenter
`public Vec3 GetBoundingBoxCenter()`

### Transform
`public void Transform(ref MatrixFrame frame)`

### Clear
`public void Clear()`

## See Also

- [Section index](../)
