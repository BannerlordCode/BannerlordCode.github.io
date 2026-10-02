---
title: "Mathf"
description: "Mathf：TaleWorlds.TwoDimension 的 public 类；公开成员 22 个（方法 18、属性 0、字段 4）。源文件 TaleWorlds.TwoDimension/Mathf.cs。"
---
# Mathf

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public static class Mathf`
**File:** `TaleWorlds.TwoDimension/Mathf.cs`

## 概述

Mathf 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/Mathf.cs。它是一个 public 类，继承链为 Mathf。public/protected 成员共 22 个：18 方法、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Mathf 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 Mathf。成员构成以方法为主（方法 18/22，属性 0/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/Mathf.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Sqrt` | `public static float Sqrt(float f)` | 方法 |
| `Abs` | `public static float Abs(float f)` | 方法 |
| `Floor` | `public static float Floor(float f)` | 方法 |
| `Cos` | `public static float Cos(float radian)` | 方法 |
| `Sin` | `public static float Sin(float radian)` | 方法 |
| `Acos` | `public static float Acos(float f)` | 方法 |
| `Atan2` | `public static float Atan2(float y, float x)` | 方法 |
| `Clamp` | `public static float Clamp(float value, float min, float max)` | 方法 |
| `Clamp` | `public static int Clamp(int value, int min, int max)` | 方法 |
| `Min` | `public static float Min(float a, float b)` | 方法 |
| `Max` | `public static float Max(float a, float b)` | 方法 |
| `IsZero` | `public static bool IsZero(float f)` | 方法 |
| `IsZero` | `public static bool IsZero(Vector2 vector2)` | 方法 |
| `Sign` | `public static float Sign(float f)` | 方法 |
| `Ceil` | `public static float Ceil(float f)` | 方法 |
| `Round` | `public static float Round(float f)` | 方法 |
| `Lerp` | `public static float Lerp(float start, float end, float amount)` | 方法 |
| `GetClosestPointInLineSegmentToLine` | `public static Vec3 GetClosestPointInLineSegmentToLine(Vec3 linePosition, Vec3 lineDirection, Vec3 lineSegmentBegin, Vec3 lineSegmentEnd)` | 方法 |
| `PI` | `public const float PI` | 字段 |
| `Deg2Rad` | `public const float Deg2Rad` | 字段 |
| `Rad2Deg` | `public const float Rad2Deg` | 字段 |
| `Epsilon` | `public const float Epsilon` | 字段 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
