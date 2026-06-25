---
title: "Rectangle2D"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Rectangle2D`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Rectangle2D

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct Rectangle2D`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Rectangle2D.cs`

## 概述

`Rectangle2D` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMatrixFrame
`public static MatrixFrame CreateMatrixFrame(float posX, float posY, float pivotX, float pivotY, float scaleX, float scaleY, float rotation)`

**用途 / Purpose:** 创建一个 `matrix frame` 实例或对象。

### GetBoundingBox
`public static SimpleRectangle GetBoundingBox(in Rectangle2D rectangle)`

**用途 / Purpose:** 获取 `bounding box` 的当前值。

### DoRectanglesIntersect
`public static bool DoRectanglesIntersect(in Rectangle2D rect1, in Rectangle2D rect2)`

**用途 / Purpose:** 处理 `do rectangles intersect` 相关逻辑。

### IsPointInside
`public static bool IsPointInside(in Vector2 point, in Rectangle2D rect)`

**用途 / Purpose:** 处理 `is point inside` 相关逻辑。

### IsSubRectOf
`public static bool IsSubRectOf(in Rectangle2D rect1, in Rectangle2D rect2)`

**用途 / Purpose:** 处理 `is sub rect of` 相关逻辑。

### Create
`public static Rectangle2D Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### FillLocalValuesFrom
`public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)`

**用途 / Purpose:** 处理 `fill local values from` 相关逻辑。

### GetVisualScale
`public Vector2 GetVisualScale()`

**用途 / Purpose:** 获取 `visual scale` 的当前值。

### AddVisualOffset
`public void AddVisualOffset(float offsetX, float offsetY)`

**用途 / Purpose:** 向当前集合/状态中添加 `visual offset`。

### SetVisualOffset
`public void SetVisualOffset(float offsetX, float offsetY)`

**用途 / Purpose:** 设置 `visual offset` 的值或状态。

### AddVisualScale
`public void AddVisualScale(float scaleX, float scaleY)`

**用途 / Purpose:** 向当前集合/状态中添加 `visual scale`。

### SetVisualScale
`public void SetVisualScale(float scaleX, float scaleY)`

**用途 / Purpose:** 设置 `visual scale` 的值或状态。

### AddVisualRotationOffset
`public void AddVisualRotationOffset(float rotationOffset)`

**用途 / Purpose:** 向当前集合/状态中添加 `visual rotation offset`。

### SetVisualRotationOffset
`public void SetVisualRotationOffset(float rotationOffset)`

**用途 / Purpose:** 设置 `visual rotation offset` 的值或状态。

### ValidateVisuals
`public void ValidateVisuals()`

**用途 / Purpose:** 处理 `validate visuals` 相关逻辑。

### DrawBoundingBox
`public void DrawBoundingBox()`

**用途 / Purpose:** 处理 `draw bounding box` 相关逻辑。

### DrawCorners
`public void DrawCorners()`

**用途 / Purpose:** 处理 `draw corners` 相关逻辑。

### CalculateMatrixFrame
`public void CalculateMatrixFrame(in Rectangle2D parentRectangle)`

**用途 / Purpose:** 处理 `calculate matrix frame` 相关逻辑。

### CalculateVisualMatrixFrame
`public void CalculateVisualMatrixFrame()`

**用途 / Purpose:** 处理 `calculate visual matrix frame` 相关逻辑。

### GetCachedOrigin
`public Vector2 GetCachedOrigin()`

**用途 / Purpose:** 获取 `cached origin` 的当前值。

### GetCachedMatrixFrame
`public MatrixFrame GetCachedMatrixFrame()`

**用途 / Purpose:** 获取 `cached matrix frame` 的当前值。

### GetCachedVisualMatrixFrame
`public MatrixFrame GetCachedVisualMatrixFrame()`

**用途 / Purpose:** 获取 `cached visual matrix frame` 的当前值。

### GetCenter
`public Vector2 GetCenter()`

**用途 / Purpose:** 获取 `center` 的当前值。

### GetBoundingBox
`public SimpleRectangle GetBoundingBox()`

**用途 / Purpose:** 获取 `bounding box` 的当前值。

### IsIdentical
`public bool IsIdentical(in Rectangle2D other)`

**用途 / Purpose:** 处理 `is identical` 相关逻辑。

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**用途 / Purpose:** 处理 `is collide` 相关逻辑。

### IsSubRectOf
`public bool IsSubRectOf(in Rectangle2D other)`

**用途 / Purpose:** 处理 `is sub rect of` 相关逻辑。

### IsPointInside
`public bool IsPointInside(in Vector2 point)`

**用途 / Purpose:** 处理 `is point inside` 相关逻辑。

### TransformScreenPositionToLocal
`public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)`

**用途 / Purpose:** 处理 `transform screen position to local` 相关逻辑。

### TransformLocalPositionToScreen
`public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)`

**用途 / Purpose:** 处理 `transform local position to screen` 相关逻辑。

## 使用示例

```csharp
Rectangle2D.CreateMatrixFrame(0, 0, 0, 0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)