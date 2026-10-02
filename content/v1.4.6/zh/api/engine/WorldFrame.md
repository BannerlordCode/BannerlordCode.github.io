---
title: "WorldFrame"
description: "WorldFrame：TaleWorlds.Engine 的 public 结构体；公开成员 6 个（方法 3、属性 1、字段 1）。源文件 TaleWorlds.Engine/WorldFrame.cs。"
---
# WorldFrame

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WorldFrame`
**File:** `TaleWorlds.Engine/WorldFrame.cs`

## 概述

WorldFrame 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/WorldFrame.cs。它是一个 public 结构体，继承链为 WorldFrame。public/protected 成员共 6 个：3 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WorldFrame 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 WorldFrame。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/WorldFrame.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WorldFrame` | `public WorldFrame(Mat3 rotation, WorldPosition origin)` | 构造函数 |
| `IsValid` | `public bool IsValid` | 属性 |
| `ToGroundMatrixFrame` | `public MatrixFrame ToGroundMatrixFrame()` | 方法 |
| `ToGroundMatrixFrameMT` | `public MatrixFrame ToGroundMatrixFrameMT()` | 方法 |
| `ToNavMeshMatrixFrame` | `public MatrixFrame ToNavMeshMatrixFrame()` | 方法 |
| `Invalid` | `public static readonly WorldFrame Invalid` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
