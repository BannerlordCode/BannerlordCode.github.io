<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoundingBox`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoundingBox

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct BoundingBox`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/BoundingBox.cs`

## 概述

`BoundingBox` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; set; }` |

## 主要方法

### RelaxMinMaxWithPoint
`public void RelaxMinMaxWithPoint(in Vec3 point)`

**用途 / Purpose:** 处理 `relax min max with point` 相关逻辑。

### RelaxMinMaxWithPointAndRadius
`public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)`

**用途 / Purpose:** 处理 `relax min max with point and radius` 相关逻辑。

### RecomputeRadius
`public void RecomputeRadius()`

**用途 / Purpose:** 处理 `recompute radius` 相关逻辑。

### GetTransformedTipPointsToParent
`public TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)`

**用途 / Purpose:** 获取 `transformed tip points to parent` 的当前值。

### GetTransformedTipPointsToChild
`public TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)`

**用途 / Purpose:** 获取 `transformed tip points to child` 的当前值。

### RelaxWithBoundingBox
`public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)`

**用途 / Purpose:** 处理 `relax with bounding box` 相关逻辑。

### RelaxWithArbitraryBoundingBox
`public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)`

**用途 / Purpose:** 处理 `relax with arbitrary bounding box` 相关逻辑。

### RelaxWithChildBoundingBox
`public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)`

**用途 / Purpose:** 处理 `relax with child bounding box` 相关逻辑。

### BeginRelaxation
`public void BeginRelaxation()`

**用途 / Purpose:** 处理 `begin relaxation` 相关逻辑。

### ArrangeWithAnotherBoundingBox
`public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)`

**用途 / Purpose:** 处理 `arrange with another bounding box` 相关逻辑。

### PointInsideBox
`public bool PointInsideBox(Vec3 point, float epsilon)`

**用途 / Purpose:** 处理 `point inside box` 相关逻辑。

### GetLongestHalfDimensionOfBoundingBox
`public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)`

**用途 / Purpose:** 获取 `longest half dimension of bounding box` 的当前值。

### RenderBoundingBox
`public void RenderBoundingBox()`

**用途 / Purpose:** 处理 `render bounding box` 相关逻辑。

## 使用示例

```csharp
var value = new BoundingBox();
value.RelaxMinMaxWithPoint(point);
```

## 参见

- [完整类目录](../catalog)