---
title: "TransformedBoundingBoxPointsContainer"
description: "TransformedBoundingBoxPointsContainer 的自动生成类参考。"
---
# TransformedBoundingBoxPointsContainer

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TransformedBoundingBoxPointsContainer`
**Base:** 无
**File:** `TaleWorlds.Engine/BoundingBox.cs`

## 概述

`TransformedBoundingBoxPointsContainer` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |

## 主要方法

### ComputeTransformedMinMax
`public ValueTuple<Vec3, Vec3> ComputeTransformedMinMax()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ComputeTransformedMinMax 对应的操作。

```csharp
// 先通过子系统 API 拿到 TransformedBoundingBoxPointsContainer 实例
TransformedBoundingBoxPointsContainer transformedBoundingBoxPointsContainer = ...;
var result = transformedBoundingBoxPointsContainer.ComputeTransformedMinMax();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TransformedBoundingBoxPointsContainer transformedBoundingBoxPointsContainer = ...;
transformedBoundingBoxPointsContainer.ComputeTransformedMinMax();
```

## 参见

- [本区域目录](../)