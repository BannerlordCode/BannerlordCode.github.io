---
title: "Color"
description: "Color：TaleWorlds.Library 的 public 结构体；公开成员 23 个（方法 20、属性 2、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Color.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Color

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Color`
**File:** `TaleWorlds.Library/Color.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

Color 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Color.cs。它是一个 public 结构体，继承链为 Color。public/protected 成员共 23 个：20 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Color 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 Color。成员构成以方法为主（方法 20/23，属性 2/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Color.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Color` | `public Color(float red, float green, float blue, float alpha = 1f)` | 构造函数 |
| `ToVector3` | `public Vector3 ToVector3()` | 方法 |
| `ToVec3` | `public Vec3 ToVec3()` | 方法 |
| `*` | `public static Color operator *(Color c, float f)` | 运算符 |
| `*` | `public static Color operator *(Color c1, Color c2)` | 运算符 |
| `+` | `public static Color operator +(Color c1, Color c2)` | 运算符 |
| `-` | `public static Color operator -(Color c1, Color c2)` | 运算符 |
| `Black` | `public static Color Black` | 属性 |
| `White` | `public static Color White` | 属性 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `FromVector3` | `public static Color FromVector3(Vector3 vector3)` | 方法 |
| `FromVector3` | `public static Color FromVector3(Vec3 vector3)` | 方法 |
| `Length` | `public float Length()` | 方法 |
| `ToUnsignedInteger` | `public uint ToUnsignedInteger()` | 方法 |
| `FromUint` | `public static Color FromUint(uint color)` | 方法 |
| `FromHSV` | `public static Color FromHSV(float h, float s, float v)` | 方法 |
| `ConvertStringToColor` | `public static Color ConvertStringToColor(string color)` | 方法 |
| `Lerp` | `public static Color Lerp(Color start, Color end, float ratio)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `UIntToColorString` | `public static string UIntToColorString(uint color)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
