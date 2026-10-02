---
title: "PhysicsMaterial"
description: "PhysicsMaterial：TaleWorlds.Engine 的 public 结构体；公开成员 20 个（方法 17、属性 2、字段 1）。源文件 TaleWorlds.Engine/PhysicsMaterial.cs。"
---
# PhysicsMaterial

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public readonly struct PhysicsMaterial`
**File:** `TaleWorlds.Engine/PhysicsMaterial.cs`

## 概述

PhysicsMaterial 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/PhysicsMaterial.cs。它是一个 public 结构体，继承链为 PhysicsMaterial。public/protected 成员共 20 个：17 方法、2 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PhysicsMaterial 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 PhysicsMaterial。成员构成以方法为主（方法 17/20，属性 2/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/PhysicsMaterial.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `GetFlags` | `public PhysicsMaterialFlags GetFlags()` | 方法 |
| `GetDynamicFriction` | `public float GetDynamicFriction()` | 方法 |
| `GetStaticFriction` | `public float GetStaticFriction()` | 方法 |
| `GetRestitution` | `public float GetRestitution()` | 方法 |
| `GetLinearDamping` | `public float GetLinearDamping()` | 方法 |
| `GetAngularDamping` | `public float GetAngularDamping()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `Equals` | `public bool Equals(PhysicsMaterial m)` | 方法 |
| `GetMaterialCount` | `public static int GetMaterialCount()` | 方法 |
| `GetFromName` | `public static PhysicsMaterial GetFromName(string id)` | 方法 |
| `GetNameAtIndex` | `public static string GetNameAtIndex(int index)` | 方法 |
| `GetFlagsAtIndex` | `public static PhysicsMaterialFlags GetFlagsAtIndex(int index)` | 方法 |
| `GetRestitutionAtIndex` | `public static float GetRestitutionAtIndex(int index)` | 方法 |
| `GetDynamicFrictionAtIndex` | `public static float GetDynamicFrictionAtIndex(int index)` | 方法 |
| `GetStaticFrictionAtIndex` | `public static float GetStaticFrictionAtIndex(int index)` | 方法 |
| `GetLinearDampingAtIndex` | `public static float GetLinearDampingAtIndex(int index)` | 方法 |
| `GetAngularDampingAtIndex` | `public static float GetAngularDampingAtIndex(int index)` | 方法 |
| `GetFromIndex` | `public static PhysicsMaterial GetFromIndex(int index)` | 方法 |
| `InvalidPhysicsMaterial` | `public static readonly PhysicsMaterial InvalidPhysicsMaterial` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
