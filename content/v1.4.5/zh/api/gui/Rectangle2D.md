---
title: "Rectangle2D"
description: "Rectangle2D 的自动生成类参考。"
---
# Rectangle2D

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct Rectangle2D`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Rectangle2D.cs`

## 概述

`Rectangle2D` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMatrixFrame
`public static MatrixFrame CreateMatrixFrame(float posX, float posY, float pivotX, float pivotY, float scaleX, float scaleY, float rotation)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 matrix frame 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Rectangle2D.CreateMatrixFrame(0, 0, 0, 0, 0, 0, 0);
```

### GetBoundingBox
`public static SimpleRectangle GetBoundingBox(in Rectangle2D rectangle)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bounding box 的结果。

```csharp
// 静态调用，不需要实例
Rectangle2D.GetBoundingBox(rectangle);
```

### DoRectanglesIntersect
`public static bool DoRectanglesIntersect(in Rectangle2D rect1, in Rectangle2D rect2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoRectanglesIntersect 对应的操作。

```csharp
// 静态调用，不需要实例
Rectangle2D.DoRectanglesIntersect(rect1, rect2);
```

### IsPointInside
`public static bool IsPointInside(in Vector2 point, in Rectangle2D rect)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 point inside 状态或条件。

```csharp
// 静态调用，不需要实例
Rectangle2D.IsPointInside(point, rect);
```

### IsSubRectOf
`public static bool IsSubRectOf(in Rectangle2D rect1, in Rectangle2D rect2)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 sub rect of 状态或条件。

```csharp
// 静态调用，不需要实例
Rectangle2D.IsSubRectOf(rect1, rect2);
```

### Create
`public static Rectangle2D Create()`

**用途 / Purpose:** **用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
Rectangle2D.Create();
```

### FillLocalValuesFrom
`public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillLocalValuesFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.FillLocalValuesFrom(other);
```

### GetVisualScale
`public Vector2 GetVisualScale()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual scale 的结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetVisualScale();
```

### AddVisualOffset
`public void AddVisualOffset(float offsetX, float offsetY)`

**用途 / Purpose:** **用途 / Purpose:** 将 visual offset 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.AddVisualOffset(0, 0);
```

### SetVisualOffset
`public void SetVisualOffset(float offsetX, float offsetY)`

**用途 / Purpose:** **用途 / Purpose:** 为 visual offset 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.SetVisualOffset(0, 0);
```

### AddVisualScale
`public void AddVisualScale(float scaleX, float scaleY)`

**用途 / Purpose:** **用途 / Purpose:** 将 visual scale 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.AddVisualScale(0, 0);
```

### SetVisualScale
`public void SetVisualScale(float scaleX, float scaleY)`

**用途 / Purpose:** **用途 / Purpose:** 为 visual scale 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.SetVisualScale(0, 0);
```

### AddVisualRotationOffset
`public void AddVisualRotationOffset(float rotationOffset)`

**用途 / Purpose:** **用途 / Purpose:** 将 visual rotation offset 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.AddVisualRotationOffset(0);
```

### SetVisualRotationOffset
`public void SetVisualRotationOffset(float rotationOffset)`

**用途 / Purpose:** **用途 / Purpose:** 为 visual rotation offset 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.SetVisualRotationOffset(0);
```

### ValidateVisuals
`public void ValidateVisuals()`

**用途 / Purpose:** **用途 / Purpose:** 检查visuals是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.ValidateVisuals();
```

### DrawBoundingBox
`public void DrawBoundingBox()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DrawBoundingBox 对应的操作。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.DrawBoundingBox();
```

### DrawCorners
`public void DrawCorners()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DrawCorners 对应的操作。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.DrawCorners();
```

### CalculateMatrixFrame
`public void CalculateMatrixFrame(in Rectangle2D parentRectangle)`

**用途 / Purpose:** **用途 / Purpose:** 计算matrix frame的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.CalculateMatrixFrame(parentRectangle);
```

### CalculateVisualMatrixFrame
`public void CalculateVisualMatrixFrame()`

**用途 / Purpose:** **用途 / Purpose:** 计算visual matrix frame的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
rectangle2D.CalculateVisualMatrixFrame();
```

### GetCachedOrigin
`public Vector2 GetCachedOrigin()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached origin 的结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCachedOrigin();
```

### GetCachedMatrixFrame
`public MatrixFrame GetCachedMatrixFrame()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached matrix frame 的结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCachedMatrixFrame();
```

### GetCachedVisualMatrixFrame
`public MatrixFrame GetCachedVisualMatrixFrame()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached visual matrix frame 的结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCachedVisualMatrixFrame();
```

### GetCenter
`public Vector2 GetCenter()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 center 的结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCenter();
```

### GetBoundingBox
`public SimpleRectangle GetBoundingBox()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bounding box 的结果。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetBoundingBox();
```

### IsIdentical
`public bool IsIdentical(in Rectangle2D other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 identical 状态或条件。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsIdentical(other);
```

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 collide 状态或条件。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsCollide(other);
```

### IsSubRectOf
`public bool IsSubRectOf(in Rectangle2D other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 sub rect of 状态或条件。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsSubRectOf(other);
```

### IsPointInside
`public bool IsPointInside(in Vector2 point)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 point inside 状态或条件。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsPointInside(point);
```

### TransformScreenPositionToLocal
`public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformScreenPositionToLocal 对应的操作。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.TransformScreenPositionToLocal(screenPosition);
```

### TransformLocalPositionToScreen
`public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformLocalPositionToScreen 对应的操作。

```csharp
// 先通过子系统 API 拿到 Rectangle2D 实例
Rectangle2D rectangle2D = ...;
var result = rectangle2D.TransformLocalPositionToScreen(localPosition);
```

## 使用示例

```csharp
Rectangle2D.CreateMatrixFrame(0, 0, 0, 0, 0, 0, 0);
```

## 参见

- [本区域目录](../)