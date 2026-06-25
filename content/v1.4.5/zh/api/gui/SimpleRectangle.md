---
title: "SimpleRectangle"
description: "SimpleRectangle 的自动生成类参考。"
---
# SimpleRectangle

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct SimpleRectangle`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SimpleRectangle.cs`

## 概述

`SimpleRectangle` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsCollide
`public bool IsCollide(SimpleRectangle other)`

**用途 / Purpose:** 判断当前对象是否处于 「collide」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SimpleRectangle 实例
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsCollide(other);
```

### GetCenter
`public Vector2 GetCenter()`

**用途 / Purpose:** 读取并返回当前对象中 「center」 的结果。

```csharp
// 先通过子系统 API 拿到 SimpleRectangle 实例
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.GetCenter();
```

### IsSubRectOf
`public bool IsSubRectOf(SimpleRectangle other)`

**用途 / Purpose:** 判断当前对象是否处于 「sub rect of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SimpleRectangle 实例
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsSubRectOf(other);
```

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SimpleRectangle 实例
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsValid();
```

### IsPointInside
`public bool IsPointInside(Vector2 point)`

**用途 / Purpose:** 判断当前对象是否处于 「point inside」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SimpleRectangle 实例
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsPointInside(point);
```

### ReduceToIntersection
`public void ReduceToIntersection(SimpleRectangle other)`

**用途 / Purpose:** 处理与 「reduce to intersection」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SimpleRectangle 实例
SimpleRectangle simpleRectangle = ...;
simpleRectangle.ReduceToIntersection(other);
```

### Lerp
`public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SimpleRectangle.Lerp(from, to, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SimpleRectangle simpleRectangle = ...;
simpleRectangle.IsCollide(other);
```

## 参见

- [本区域目录](../)