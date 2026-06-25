---
title: "CubicBezier"
description: "CubicBezier 的自动生成类参考。"
---
# CubicBezier

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CubicBezier`
**Base:** 无
**File:** `TaleWorlds.Library/CubicBezier.cs`

## 概述

`CubicBezier` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateEase
`public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**用途 / Purpose:** 构建一个新的 「ease」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CubicBezier.CreateEase(0, 0, 0, 0);
```

### CreateYBeginToYEndWithRelativeControlDirs
`public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)`

**用途 / Purpose:** 构建一个新的 「y begin to y end with relative control dirs」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CubicBezier.CreateYBeginToYEndWithRelativeControlDirs(0, 0, 0, 0, 0, 0);
```

### CreateYBeginToYEnd
`public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**用途 / Purpose:** 构建一个新的 「y begin to y end」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CubicBezier.CreateYBeginToYEnd(0, 0, 0, 0, 0, 0);
```

### Sample
`public double Sample(double x)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CubicBezier 实例
CubicBezier cubicBezier = ...;
var result = cubicBezier.Sample(0);
```

## 使用示例

```csharp
CubicBezier.CreateEase(0, 0, 0, 0);
```

## 参见

- [本区域目录](../)