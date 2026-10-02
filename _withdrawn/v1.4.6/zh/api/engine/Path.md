---
title: "Path"
description: "Path：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 16 个（方法 14、属性 2、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Path.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Path

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Path : NativeObject`
**File:** `TaleWorlds.Engine/Path.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Path 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Path.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 Path → NativeObject。public/protected 成员共 16 个：14 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Path 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Path → NativeObject。成员构成以方法为主（方法 14/16，属性 2/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Path.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfPoints` | `public int NumberOfPoints` | 属性 |
| `TotalDistance` | `public float TotalDistance` | 属性 |
| `GetHermiteFrameForDt` | `public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)` | 方法 |
| `GetFrameForDistance` | `public MatrixFrame GetFrameForDistance(float distance)` | 方法 |
| `GetNearestFrameWithValidAlphaForDistance` | `public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)` | 方法 |
| `GetFrameAndColorForDistance` | `public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)` | 方法 |
| `GetArcLength` | `public float GetArcLength(int first_point)` | 方法 |
| `GetPoints` | `public void GetPoints(MatrixFrame[]points)` | 方法 |
| `GetTotalLength` | `public float GetTotalLength()` | 方法 |
| `GetVersion` | `public int GetVersion()` | 方法 |
| `SetFrameOfPoint` | `public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)` | 方法 |
| `SetTangentPositionOfPoint` | `public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)` | 方法 |
| `AddPathPoint` | `public int AddPathPoint(int newNodeIndex)` | 方法 |
| `DeletePathPoint` | `public void DeletePathPoint(int nodeIndex)` | 方法 |
| `HasValidAlphaAtPathPoint` | `public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)` | 方法 |
| `GetName` | `public string GetName()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../../core-extra/NativeObject/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
