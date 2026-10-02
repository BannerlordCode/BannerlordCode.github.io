---
title: "BoundingBox"
description: "BoundingBox：TaleWorlds.Engine 的 public 结构体；公开成员 17 个（方法 14、属性 1、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/BoundingBox.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoundingBox

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct BoundingBox`
**File:** `TaleWorlds.Engine/BoundingBox.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

BoundingBox 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/BoundingBox.cs。它是一个 public 结构体，继承链为 BoundingBox。public/protected 成员共 17 个：14 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoundingBox 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 BoundingBox。成员构成以方法为主（方法 14/17，属性 1/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/BoundingBox.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `this[...]` | `public Vec3 this[int index]` | 索引器 |
| `BoundingBox` | `public BoundingBox(in Vec3 point)` | 构造函数 |
| `RelaxMinMaxWithPoint` | `public void RelaxMinMaxWithPoint(in Vec3 point)` | 方法 |
| `RelaxMinMaxWithPointAndRadius` | `public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)` | 方法 |
| `RecomputeRadius` | `public void RecomputeRadius()` | 方法 |
| `GetTransformedTipPointsToParent` | `public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)` | 方法 |
| `GetTransformedTipPointsToChild` | `public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)` | 方法 |
| `RelaxWithBoundingBox` | `public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)` | 方法 |
| `RelaxWithArbitraryBoundingBox` | `public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)` | 方法 |
| `RelaxWithChildBoundingBox` | `public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)` | 方法 |
| `BeginRelaxation` | `public void BeginRelaxation()` | 方法 |
| `ArrangeWithAnotherBoundingBox` | `public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)` | 方法 |
| `PointInsideBox` | `public bool PointInsideBox(Vec3 point, float epsilon)` | 方法 |
| `GetLongestHalfDimensionOfBoundingBox` | `public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)` | 方法 |
| `RenderBoundingBox` | `public void RenderBoundingBox()` | 方法 |
| `TransformedBoundingBoxPointsContainer` | `public struct TransformedBoundingBoxPointsContainer` | 属性 |
| `TransformedBoundingBoxPointsContainer` | `public struct TransformedBoundingBoxPointsContainer` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
