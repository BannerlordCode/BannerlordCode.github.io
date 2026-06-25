---
title: "MathF"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MathF`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MathF

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MathF`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/MathF.cs`

## 概述

`MathF` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Sqrt
`public static float Sqrt(float x)`

**用途 / Purpose:** 处理 `sqrt` 相关逻辑。

### Sin
`public static float Sin(float x)`

**用途 / Purpose:** 处理 `sin` 相关逻辑。

### Asin
`public static float Asin(float x)`

**用途 / Purpose:** 处理 `asin` 相关逻辑。

### Cos
`public static float Cos(float x)`

**用途 / Purpose:** 处理 `cos` 相关逻辑。

### Acos
`public static float Acos(float x)`

**用途 / Purpose:** 处理 `acos` 相关逻辑。

### Tan
`public static float Tan(float x)`

**用途 / Purpose:** 处理 `tan` 相关逻辑。

### Tanh
`public static float Tanh(float x)`

**用途 / Purpose:** 处理 `tanh` 相关逻辑。

### Atan
`public static float Atan(float x)`

**用途 / Purpose:** 处理 `atan` 相关逻辑。

### Atan2
`public static float Atan2(float y, float x)`

**用途 / Purpose:** 处理 `atan2` 相关逻辑。

### Pow
`public static double Pow(double x, double y)`

**用途 / Purpose:** 处理 `pow` 相关逻辑。

### Pow
`public static double Pow(float x, double y)`

**用途 / Purpose:** 处理 `pow` 相关逻辑。

### Pow
`public static double Pow(double x, float y)`

**用途 / Purpose:** 处理 `pow` 相关逻辑。

### Pow
`public static float Pow(float x, float y)`

**用途 / Purpose:** 处理 `pow` 相关逻辑。

### PowTwo32
`public static int PowTwo32(int x)`

**用途 / Purpose:** 处理 `pow two32` 相关逻辑。

### PowTwo64
`public static ulong PowTwo64(int x)`

**用途 / Purpose:** 处理 `pow two64` 相关逻辑。

### IsValidValue
`public static bool IsValidValue(float f)`

**用途 / Purpose:** 处理 `is valid value` 相关逻辑。

### Clamp
`public static float Clamp(float value, float minValue, float maxValue)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

### AngleClamp
`public static float AngleClamp(float angle)`

**用途 / Purpose:** 处理 `angle clamp` 相关逻辑。

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Lerp
`public static float Lerp(float valueFrom, float valueTo, int amount, float minimumDifference = 1E-05f)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### AngleLerp
`public static float AngleLerp(float angleFrom, float angleTo, float amount, float minimumDifference = 1E-05f)`

**用途 / Purpose:** 处理 `angle lerp` 相关逻辑。

### Round
`public static int Round(double f)`

**用途 / Purpose:** 处理 `round` 相关逻辑。

### Round
`public static int Round(float f)`

**用途 / Purpose:** 处理 `round` 相关逻辑。

### Round
`public static float Round(float f, int digits)`

**用途 / Purpose:** 处理 `round` 相关逻辑。

### Round
`public static int Round(int f)`

**用途 / Purpose:** 处理 `round` 相关逻辑。

### Floor
`public static int Floor(double f)`

**用途 / Purpose:** 处理 `floor` 相关逻辑。

### Floor
`public static int Floor(float f)`

**用途 / Purpose:** 处理 `floor` 相关逻辑。

### Floor
`public static int Floor(int f)`

**用途 / Purpose:** 处理 `floor` 相关逻辑。

### Ceiling
`public static int Ceiling(double f)`

**用途 / Purpose:** 处理 `ceiling` 相关逻辑。

### Ceiling
`public static int Ceiling(float f)`

**用途 / Purpose:** 处理 `ceiling` 相关逻辑。

### Ceiling
`public static int Ceiling(int f)`

**用途 / Purpose:** 处理 `ceiling` 相关逻辑。

### Abs
`public static double Abs(double f)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### Abs
`public static float Abs(float f)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### Abs
`public static int Abs(int f)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### Max
`public static double Max(double a, double b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static float Max(float a, float b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static float Max(float a, int b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static float Max(int a, float b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static int Max(int a, int b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static long Max(long a, long b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static uint Max(uint a, uint b)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static float Max(float a, float b, float c)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Min
`public static double Min(double a, double b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static float Min(float a, float b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static short Min(short a, short b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static int Min(int a, int b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static long Min(long a, long b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static uint Min(uint a, uint b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static int Min(int a, float b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static int Min(float a, int b)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static float Min(float a, float b, float c)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### PingPong
`public static float PingPong(float min, float max, float time)`

**用途 / Purpose:** 处理 `ping pong` 相关逻辑。

### GreatestCommonDivisor
`public static int GreatestCommonDivisor(int a, int b)`

**用途 / Purpose:** 处理 `greatest common divisor` 相关逻辑。

### Log
`public static float Log(float a)`

**用途 / Purpose:** 处理 `log` 相关逻辑。

### Log
`public static float Log(float a, float newBase)`

**用途 / Purpose:** 处理 `log` 相关逻辑。

### Sign
`public static int Sign(float f)`

**用途 / Purpose:** 处理 `sign` 相关逻辑。

### Sign
`public static int Sign(int f)`

**用途 / Purpose:** 处理 `sign` 相关逻辑。

### SinCos
`public static void SinCos(float a, out float sa, out float ca)`

**用途 / Purpose:** 处理 `sin cos` 相关逻辑。

### Log10
`public static float Log10(float val)`

**用途 / Purpose:** 处理 `log10` 相关逻辑。

## 使用示例

```csharp
MathF.Sqrt(0);
```

## 参见

- [完整类目录](../catalog)