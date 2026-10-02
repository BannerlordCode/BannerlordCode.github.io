---
title: "CubicBezier"
description: "CubicBezier：TaleWorlds.Library 的 public 类；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.Library/CubicBezier.cs。"
---
# CubicBezier

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class CubicBezier`
**File:** `TaleWorlds.Library/CubicBezier.cs`

## 概述

CubicBezier 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/CubicBezier.cs。它是一个 public 类，继承链为 CubicBezier。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CubicBezier 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 CubicBezier。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/CubicBezier.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateEase` | `public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)` | 方法 |
| `CreateYBeginToYEndWithRelativeControlDirs` | `public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)` | 方法 |
| `CreateYBeginToYEnd` | `public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)` | 方法 |
| `Sample` | `public double Sample(double x)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
