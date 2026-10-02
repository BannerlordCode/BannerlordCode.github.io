---
title: "PhysicsShape"
description: "PhysicsShape 的自动生成类参考。"
---
# PhysicsShape

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class PhysicsShape : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/PhysicsShape.cs

## 概述

`PhysicsShape` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/PhysicsShape.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetFromResource
`public static PhysicsShape GetFromResource(string bodyName,bool mayReturnNull = false) `

### AddPreloadQueueWithName
`public static void AddPreloadQueueWithName(string bodyName,Vec3 scale) `

### ProcessPreloadQueue
`public static void ProcessPreloadQueue() `

### UnloadDynamicBodies
`public static void UnloadDynamicBodies() `

### CreateCopy
`public PhysicsShape CreateCopy() `

### SphereCount
`public int SphereCount() `

### GetSphere
`public void GetSphere(ref SphereData data,int index) `
`public void GetSphere(ref SphereData data,out PhysicsMaterial material,int index) `

### GetDominantMaterialForTriangleMesh
`public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex) `

### GetName
`public string GetName() `

### TriangleMeshCount
`public int TriangleMeshCount() `

### TriangleCountInTriangleMesh
`public int TriangleCountInTriangleMesh(int meshIndex) `

### GetTriangle
`public void GetTriangle(Vec3[] triangle,int meshIndex,int triangleIndex) `

### Prepare
`public void Prepare() `

### CapsuleCount
`public int CapsuleCount() `

### AddCapsule
`public void AddCapsule(CapsuleData data) `

### InitDescription
`public void InitDescription() `

### AddSphere
`public void AddSphere(SphereData data) `

### SetCapsule
`public void SetCapsule(CapsuleData data,int index) `

### GetCapsule
`public void GetCapsule(ref CapsuleData data,int index) `
`public void GetCapsule(ref CapsuleData data,out PhysicsMaterial material,int index) `

### GetBoundingBox
`public void GetBoundingBox(out BoundingBox boundingBox) `

### GetBoundingBoxCenter
`public Vec3 GetBoundingBoxCenter() `

### Transform
`public void Transform(ref MatrixFrame frame) `

### Clear
`public void Clear() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
