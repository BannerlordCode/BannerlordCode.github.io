---
title: "Mathf"
description: "Mathf 的自动生成类参考。"
---
# Mathf

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Mathf`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/Mathf.cs`

## 概述

`Mathf` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Sqrt
`public static float Sqrt(float f)`

**用途 / Purpose:** 调用 Sqrt 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Sqrt(0);
```

### Abs
`public static float Abs(float f)`

**用途 / Purpose:** 调用 Abs 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Abs(0);
```

### Floor
`public static float Floor(float f)`

**用途 / Purpose:** 调用 Floor 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Floor(0);
```

### Cos
`public static float Cos(float radian)`

**用途 / Purpose:** 调用 Cos 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Cos(0);
```

### Sin
`public static float Sin(float radian)`

**用途 / Purpose:** 调用 Sin 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Sin(0);
```

### Acos
`public static float Acos(float f)`

**用途 / Purpose:** 调用 Acos 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Acos(0);
```

### Atan2
`public static float Atan2(float y, float x)`

**用途 / Purpose:** 调用 Atan2 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Atan2(0, 0);
```

### Clamp
`public static float Clamp(float value, float min, float max)`

**用途 / Purpose:** 调用 Clamp 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Clamp(0, 0, 0);
```

### Clamp
`public static int Clamp(int value, int min, int max)`

**用途 / Purpose:** 调用 Clamp 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Clamp(0, 0, 0);
```

### Min
`public static float Min(float a, float b)`

**用途 / Purpose:** 调用 Min 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Min(0, 0);
```

### Max
`public static float Max(float a, float b)`

**用途 / Purpose:** 调用 Max 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Max(0, 0);
```

### IsZero
`public static bool IsZero(float f)`

**用途 / Purpose:** 判断当前对象是否处于 zero 状态或条件。

```csharp
// 静态调用，不需要实例
Mathf.IsZero(0);
```

### IsZero
`public static bool IsZero(Vector2 vector2)`

**用途 / Purpose:** 判断当前对象是否处于 zero 状态或条件。

```csharp
// 静态调用，不需要实例
Mathf.IsZero(vector2);
```

### Sign
`public static float Sign(float f)`

**用途 / Purpose:** 调用 Sign 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Sign(0);
```

### Ceil
`public static float Ceil(float f)`

**用途 / Purpose:** 调用 Ceil 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Ceil(0);
```

### Round
`public static float Round(float f)`

**用途 / Purpose:** 调用 Round 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Round(0);
```

### Lerp
`public static float Lerp(float start, float end, float amount)`

**用途 / Purpose:** 调用 Lerp 对应的操作。

```csharp
// 静态调用，不需要实例
Mathf.Lerp(0, 0, 0);
```

### GetClosestPointInLineSegmentToLine
`public static Vec3 GetClosestPointInLineSegmentToLine(Vec3 linePosition, Vec3 lineDirection, Vec3 lineSegmentBegin, Vec3 lineSegmentEnd)`

**用途 / Purpose:** 读取并返回当前对象中 closest point in line segment to line 的结果。

```csharp
// 静态调用，不需要实例
Mathf.GetClosestPointInLineSegmentToLine(linePosition, lineDirection, lineSegmentBegin, lineSegmentEnd);
```

## 使用示例

```csharp
Mathf.Sqrt(0);
```

## 参见

- [本区域目录](../)