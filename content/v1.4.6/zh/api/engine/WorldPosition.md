---
title: "WorldPosition"
description: "WorldPosition：TaleWorlds.Engine 的 public 结构体；公开成员 25 个（方法 16、属性 5、字段 1）。源文件 TaleWorlds.Engine/WorldPosition.cs。"
---
# WorldPosition

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WorldPosition`
**File:** `TaleWorlds.Engine/WorldPosition.cs`

## 概述

WorldPosition 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/WorldPosition.cs。它是一个 public 结构体，继承链为 WorldPosition。public/protected 成员共 25 个：16 方法、5 属性、1 字段、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WorldPosition 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 WorldPosition。成员构成以方法为主（方法 16/25，属性 5/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/WorldPosition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AsVec2` | `public Vec2 AsVec2` | 属性 |
| `X` | `public float X` | 属性 |
| `Y` | `public float Y` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `WorldPosition` | `public WorldPosition(Scene scene, Vec3 position)` | 构造函数 |
| `WorldPosition` | `public WorldPosition(Scene scene, UIntPtr navMesh, Vec3 position, bool hasValidZ)` | 构造函数 |
| `SetVec3` | `public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)` | 方法 |
| `GetNavMesh` | `public UIntPtr GetNavMesh()` | 方法 |
| `GetNavMeshMT` | `public UIntPtr GetNavMeshMT()` | 方法 |
| `GetNearestNavMesh` | `public UIntPtr GetNearestNavMesh()` | 方法 |
| `GetNavMeshZ` | `public float GetNavMeshZ()` | 方法 |
| `GetNavMeshZMT` | `public float GetNavMeshZMT()` | 方法 |
| `GetGroundZ` | `public float GetGroundZ()` | 方法 |
| `GetGroundZMT` | `public float GetGroundZMT()` | 方法 |
| `GetNavMeshVec3` | `public Vec3 GetNavMeshVec3()` | 方法 |
| `GetNavMeshVec3MT` | `public Vec3 GetNavMeshVec3MT()` | 方法 |
| `GetGroundVec3` | `public Vec3 GetGroundVec3()` | 方法 |
| `GetGroundVec3MT` | `public Vec3 GetGroundVec3MT()` | 方法 |
| `GetVec3WithoutValidity` | `public Vec3 GetVec3WithoutValidity()` | 方法 |
| `SetVec2MT` | `public void SetVec2MT(Vec2 value)` | 方法 |
| `SetVec2` | `public void SetVec2(Vec2 value)` | 方法 |
| `DistanceSquaredWithLimit` | `public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)` | 方法 |
| `Invalid` | `public static readonly WorldPosition Invalid` | 字段 |
| `WorldPositionEnforcedCache` | `public enum WorldPositionEnforcedCache` | 属性 |
| `WorldPositionEnforcedCache` | `public enum WorldPositionEnforcedCache` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
