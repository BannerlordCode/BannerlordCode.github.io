---
title: "Mathf"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mathf`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Mathf

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Mathf`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Mathf.cs`

## 概述

`Mathf` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Sqrt
`public static float Sqrt(float f)`

**用途 / Purpose:** 处理 `sqrt` 相关逻辑。

### Abs
`public static float Abs(float f)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### Floor
`public static float Floor(float f)`

**用途 / Purpose:** 处理 `floor` 相关逻辑。

### Cos
`public static float Cos(float radian)`

**用途 / Purpose:** 处理 `cos` 相关逻辑。

### Sin
`public static float Sin(float radian)`

**用途 / Purpose:** 处理 `sin` 相关逻辑。

### Acos
`public static float Acos(float f)`

**用途 / Purpose:** 处理 `acos` 相关逻辑。

### Atan2
`public static float Atan2(float y, float x)`

**用途 / Purpose:** 处理 `atan2` 相关逻辑。

### Clamp
`public static float Clamp(float value, float min, float max)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

### Clamp
`public static int Clamp(int value, int min, int max)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

### Min
`public static float Min(float a, float b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Max
`public static float Max(float a, float b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### IsZero
`public static bool IsZero(float f)`

**用途 / Purpose:** 处理 `is zero` 相关逻辑。

### IsZero
`public static bool IsZero(Vector2 vector2)`

**用途 / Purpose:** 处理 `is zero` 相关逻辑。

### Sign
`public static float Sign(float f)`

**用途 / Purpose:** 处理 `sign` 相关逻辑。

### Ceil
`public static float Ceil(float f)`

**用途 / Purpose:** 处理 `ceil` 相关逻辑。

### Round
`public static float Round(float f)`

**用途 / Purpose:** 处理 `round` 相关逻辑。

### Lerp
`public static float Lerp(float start, float end, float amount)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### GetClosestPointInLineSegmentToLine
`public static Vec3 GetClosestPointInLineSegmentToLine(Vec3 linePosition, Vec3 lineDirection, Vec3 lineSegmentBegin, Vec3 lineSegmentEnd)`

**用途 / Purpose:** 获取 `closest point in line segment to line` 的当前值。

## 使用示例

```csharp
Mathf.Sqrt(0);
```

## 参见

- [完整类目录](../catalog)