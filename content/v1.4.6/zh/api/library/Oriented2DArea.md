---
title: "Oriented2DArea"
description: "Oriented2DArea：TaleWorlds.Library 的 public 结构体；公开成员 11 个（方法 5、属性 4、字段 0）。源文件 TaleWorlds.Library/Oriented2DArea.cs。"
---
# Oriented2DArea

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Oriented2DArea`
**File:** `TaleWorlds.Library/Oriented2DArea.cs`

## 概述

Oriented2DArea 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Oriented2DArea.cs。它是一个 public 结构体，继承链为 Oriented2DArea。public/protected 成员共 11 个：5 方法、4 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Oriented2DArea 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Oriented2DArea。成员构成以方法为主（方法 5/11，属性 4/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Oriented2DArea.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GlobalCenter` | `public Vec2 GlobalCenter` | 属性 |
| `GlobalForward` | `public Vec2 GlobalForward` | 属性 |
| `LocalDimensions` | `public Vec2 LocalDimensions` | 属性 |
| `Oriented2DArea` | `public Oriented2DArea(in Vec2 globalCenter, in Vec2 globalForward, in Vec2 localDimensions)` | 构造函数 |
| `SetGlobalCenter` | `public void SetGlobalCenter(in Vec2 globalCenter)` | 方法 |
| `SetLocalDimensions` | `public void SetLocalDimensions(in Vec2 localDimensions)` | 方法 |
| `Overlaps` | `public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)` | 方法 |
| `Intersects` | `public bool Intersects(in LineSegment2D line, float clearanceMargin)` | 方法 |
| `GetCorners` | `public Oriented2DArea.Corners GetCorners()` | 方法 |
| `Corners` | `public struct Corners` | 属性 |
| `Corners` | `public struct Corners` | 嵌套类型 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
