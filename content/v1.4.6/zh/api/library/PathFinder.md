---
title: "PathFinder"
description: "PathFinder：TaleWorlds.Library 的 public 类；公开成员 7 个（方法 3、属性 0、字段 3）。源文件 TaleWorlds.Library/PathFinder.cs。"
---
# PathFinder

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class PathFinder`
**File:** `TaleWorlds.Library/PathFinder.cs`

## 概述

PathFinder 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/PathFinder.cs。它是一个 public 类（abstract），继承链为 PathFinder。public/protected 成员共 7 个：3 方法、3 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PathFinder 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 PathFinder。成员构成以方法为主（方法 3/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/PathFinder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PathFinder` | `public PathFinder()` | 构造函数 |
| `Destroy` | `public virtual void Destroy()` | 方法 |
| `Initialize` | `public abstract void Initialize(Vec3 bbSize);` | 方法 |
| `FindPath` | `public abstract bool FindPath(Vec3 wSource, Vec3 wDestination, List<Vec3>path, float craftWidth = 5f);` | 方法 |
| `BuildingCost` | `public static float BuildingCost` | 字段 |
| `WaterCost` | `public static float WaterCost` | 字段 |
| `ShallowWaterCost` | `public static float ShallowWaterCost` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
