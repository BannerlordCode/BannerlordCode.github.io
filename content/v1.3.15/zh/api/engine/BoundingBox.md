---
title: "BoundingBox"
description: "BoundingBox 的自动生成类参考。"
---
# BoundingBox

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct BoundingBox`
**Base:** 无
**File:** `TaleWorlds.Engine/BoundingBox.cs`

## 概述

`BoundingBox` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |
| `this` | `public Vec3 this { get; }` |

## 主要方法

### RelaxMinMaxWithPoint
`public void RelaxMinMaxWithPoint(in Vec3 point)`

**用途 / Purpose:** 处理与 「relax min max with point」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RelaxMinMaxWithPoint(point);
```

### RelaxMinMaxWithPointAndRadius
`public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)`

**用途 / Purpose:** 处理与 「relax min max with point and radius」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RelaxMinMaxWithPointAndRadius(point, 0);
```

### RecomputeRadius
`public void RecomputeRadius()`

**用途 / Purpose:** 重新执行「radius」相关的计算并返回结果。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RecomputeRadius();
```

### GetTransformedTipPointsToParent
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)`

**用途 / Purpose:** 读取并返回当前对象中 「transformed tip points to parent」 的结果。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
var result = boundingBox.GetTransformedTipPointsToParent(parentFrame);
```

### GetTransformedTipPointsToChild
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)`

**用途 / Purpose:** 读取并返回当前对象中 「transformed tip points to child」 的结果。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
var result = boundingBox.GetTransformedTipPointsToChild(childFrame);
```

### RelaxWithBoundingBox
`public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)`

**用途 / Purpose:** 处理与 「relax with bounding box」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RelaxWithBoundingBox(modifiedBoundingBox);
```

### RelaxWithArbitraryBoundingBox
`public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)`

**用途 / Purpose:** 处理与 「relax with arbitrary bounding box」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RelaxWithArbitraryBoundingBox(otherBoundingBox, otherGlobalFrame, globalFrameOfThisBoundingBox);
```

### RelaxWithChildBoundingBox
`public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)`

**用途 / Purpose:** 处理与 「relax with child bounding box」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RelaxWithChildBoundingBox(childBoundingBox, childFrame);
```

### BeginRelaxation
`public void BeginRelaxation()`

**用途 / Purpose:** 处理与 「begin relaxation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.BeginRelaxation();
```

### ArrangeWithAnotherBoundingBox
`public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)`

**用途 / Purpose:** 处理与 「arrange with another bounding box」 相关的逻辑。

```csharp
// 静态调用，不需要实例
BoundingBox.ArrangeWithAnotherBoundingBox(boundingBox, otherBoundingBox, 0);
```

### PointInsideBox
`public bool PointInsideBox(Vec3 point, float epsilon)`

**用途 / Purpose:** 处理与 「point inside box」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
var result = boundingBox.PointInsideBox(point, 0);
```

### GetLongestHalfDimensionOfBoundingBox
`public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)`

**用途 / Purpose:** 读取并返回当前对象中 「longest half dimension of bounding box」 的结果。

```csharp
// 静态调用，不需要实例
BoundingBox.GetLongestHalfDimensionOfBoundingBox(boundingBox);
```

### RenderBoundingBox
`public void RenderBoundingBox()`

**用途 / Purpose:** 处理与 「render bounding box」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
boundingBox.RenderBoundingBox();
```

### ComputeTransformedMinMax
`public ValueTuple<Vec3, Vec3> ComputeTransformedMinMax()`

**用途 / Purpose:** 处理与 「compute transformed min max」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoundingBox 实例
BoundingBox boundingBox = ...;
var result = boundingBox.ComputeTransformedMinMax();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoundingBox boundingBox = ...;
boundingBox.RelaxMinMaxWithPoint(point);
```

## 参见

- [本区域目录](../)