---
title: "MathF"
description: "MathF：TaleWorlds.Library 的 public 类；公开成员 67 个（方法 60、属性 0、字段 7）。canonical 桶 core-extra。源文件 TaleWorlds.Library/MathF.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MathF

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class MathF`
**File:** `TaleWorlds.Library/MathF.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

MathF 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MathF.cs。它是一个 public 类，继承链为 MathF。public/protected 成员共 67 个：60 方法、7 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MathF 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 MathF。成员构成以方法为主（方法 60/67，属性 0/67），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MathF.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Sqrt` | `public static float Sqrt(float x)` | 方法 |
| `Sin` | `public static float Sin(float x)` | 方法 |
| `Asin` | `public static float Asin(float x)` | 方法 |
| `Cos` | `public static float Cos(float x)` | 方法 |
| `Acos` | `public static float Acos(float x)` | 方法 |
| `Tan` | `public static float Tan(float x)` | 方法 |
| `Tanh` | `public static float Tanh(float x)` | 方法 |
| `Atan` | `public static float Atan(float x)` | 方法 |
| `Atan2` | `public static float Atan2(float y, float x)` | 方法 |
| `Pow` | `public static double Pow(double x, double y)` | 方法 |
| `Pow` | `public static double Pow(float x, double y)` | 方法 |
| `Pow` | `public static double Pow(double x, float y)` | 方法 |
| `Pow` | `public static float Pow(float x, float y)` | 方法 |
| `PowTwo32` | `public static int PowTwo32(int x)` | 方法 |
| `PowTwo64` | `public static ulong PowTwo64(int x)` | 方法 |
| `IsValidValue` | `public static bool IsValidValue(float f)` | 方法 |
| `Clamp` | `public static float Clamp(float value, float minValue, float maxValue)` | 方法 |
| `AngleClamp` | `public static float AngleClamp(float angle)` | 方法 |
| `Lerp` | `public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)` | 方法 |
| `Lerp` | `public static float Lerp(float valueFrom, float valueTo, int amount, float minimumDifference = 1E-05f)` | 方法 |
| `AngleLerp` | `public static float AngleLerp(float angleFrom, float angleTo, float amount, float minimumDifference = 1E-05f)` | 方法 |
| `Round` | `public static int Round(double f)` | 方法 |
| `Round` | `public static int Round(float f)` | 方法 |
| `Round` | `public static float Round(float f, int digits)` | 方法 |
| `Round` | `public static int Round(int f)` | 方法 |
| `Floor` | `public static int Floor(double f)` | 方法 |
| `Floor` | `public static int Floor(float f)` | 方法 |
| `Floor` | `public static int Floor(int f)` | 方法 |
| `Ceiling` | `public static int Ceiling(double f)` | 方法 |
| `Ceiling` | `public static int Ceiling(float f)` | 方法 |
| `Ceiling` | `public static int Ceiling(int f)` | 方法 |
| `Abs` | `public static double Abs(double f)` | 方法 |
| `Abs` | `public static float Abs(float f)` | 方法 |
| `Abs` | `public static int Abs(int f)` | 方法 |
| `Max` | `public static double Max(double a, double b)` | 方法 |
| `Max` | `public static float Max(float a, float b)` | 方法 |
| `float>MinMax` | `public static ValueTuple<float, float>MinMax(float a, float b)` | 方法 |
| `Max` | `public static float Max(float a, int b)` | 方法 |
| `Max` | `public static float Max(int a, float b)` | 方法 |
| `Max` | `public static int Max(int a, int b)` | 方法 |
| `Max` | `public static long Max(long a, long b)` | 方法 |
| `Max` | `public static uint Max(uint a, uint b)` | 方法 |
| `Max` | `public static float Max(float a, float b, float c)` | 方法 |
| `Min` | `public static double Min(double a, double b)` | 方法 |
| `Min` | `public static float Min(float a, float b)` | 方法 |
| `Min` | `public static short Min(short a, short b)` | 方法 |
| `Min` | `public static int Min(int a, int b)` | 方法 |
| `Min` | `public static long Min(long a, long b)` | 方法 |
| `Min` | `public static uint Min(uint a, uint b)` | 方法 |
| `Min` | `public static int Min(int a, float b)` | 方法 |
| `Min` | `public static int Min(float a, int b)` | 方法 |
| `Min` | `public static float Min(float a, float b, float c)` | 方法 |
| `PingPong` | `public static float PingPong(float min, float max, float time)` | 方法 |
| `GreatestCommonDivisor` | `public static int GreatestCommonDivisor(int a, int b)` | 方法 |
| `Log` | `public static float Log(float a)` | 方法 |
| `Log` | `public static float Log(float a, float newBase)` | 方法 |
| `Sign` | `public static int Sign(float f)` | 方法 |
| `Sign` | `public static int Sign(int f)` | 方法 |
| `SinCos` | `public static void SinCos(float a, out float sa, out float ca)` | 方法 |
| `Log10` | `public static float Log10(float val)` | 方法 |
| `DegToRad` | `public const float DegToRad` | 字段 |
| `RadToDeg` | `public const float RadToDeg` | 字段 |
| `TwoPI` | `public const float TwoPI` | 字段 |
| `PI` | `public const float PI` | 字段 |
| `HalfPI` | `public const float HalfPI` | 字段 |
| `E` | `public const float E` | 字段 |
| `Epsilon` | `public const float Epsilon` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
