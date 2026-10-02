---
title: "PhysicsShape"
description: "PhysicsShape：TaleWorlds.Engine 的 public 类，继承 Resource；公开成员 25 个（方法 25、属性 0、字段 0）。源文件 TaleWorlds.Engine/PhysicsShape.cs。"
---
# PhysicsShape

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class PhysicsShape : Resource`
**File:** `TaleWorlds.Engine/PhysicsShape.cs`

## 概述

PhysicsShape 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/PhysicsShape.cs。它是一个 public 类（sealed），实现/继承 Resource，继承链为 PhysicsShape → Resource → NativeObject。public/protected 成员共 25 个：25 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PhysicsShape 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 PhysicsShape → Resource → NativeObject。成员构成以方法为主（方法 25/25，属性 0/25），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/PhysicsShape.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetFromResource` | `public static PhysicsShape GetFromResource(string bodyName, bool mayReturnNull = false)` | 方法 |
| `AddPreloadQueueWithName` | `public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)` | 方法 |
| `ProcessPreloadQueue` | `public static void ProcessPreloadQueue()` | 方法 |
| `UnloadDynamicBodies` | `public static void UnloadDynamicBodies()` | 方法 |
| `CreateCopy` | `public PhysicsShape CreateCopy()` | 方法 |
| `SphereCount` | `public int SphereCount()` | 方法 |
| `GetSphere` | `public void GetSphere(ref SphereData data, int index)` | 方法 |
| `GetSphere` | `public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)` | 方法 |
| `GetDominantMaterialForTriangleMesh` | `public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)` | 方法 |
| `GetName` | `public string GetName()` | 方法 |
| `TriangleMeshCount` | `public int TriangleMeshCount()` | 方法 |
| `TriangleCountInTriangleMesh` | `public int TriangleCountInTriangleMesh(int meshIndex)` | 方法 |
| `GetTriangle` | `public void GetTriangle(Vec3[]triangle, int meshIndex, int triangleIndex)` | 方法 |
| `Prepare` | `public void Prepare()` | 方法 |
| `CapsuleCount` | `public int CapsuleCount()` | 方法 |
| `AddCapsule` | `public void AddCapsule(CapsuleData data)` | 方法 |
| `InitDescription` | `public void InitDescription()` | 方法 |
| `AddSphere` | `public void AddSphere(SphereData data)` | 方法 |
| `SetCapsule` | `public void SetCapsule(CapsuleData data, int index)` | 方法 |
| `GetCapsule` | `public void GetCapsule(ref CapsuleData data, int index)` | 方法 |
| `GetCapsule` | `public void GetCapsule(ref CapsuleData data, out PhysicsMaterial material, int index)` | 方法 |
| `GetBoundingBox` | `public void GetBoundingBox(out BoundingBox boundingBox)` | 方法 |
| `GetBoundingBoxCenter` | `public Vec3 GetBoundingBoxCenter()` | 方法 |
| `Transform` | `public void Transform(ref MatrixFrame frame)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Resource](../Resource)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
