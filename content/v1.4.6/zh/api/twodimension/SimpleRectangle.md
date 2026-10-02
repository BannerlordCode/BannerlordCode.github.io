---
title: "SimpleRectangle"
description: "SimpleRectangle：TaleWorlds.TwoDimension 的 public 结构体；公开成员 10 个（方法 7、属性 2、字段 0）。源文件 TaleWorlds.TwoDimension/SimpleRectangle.cs。"
---
# SimpleRectangle

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct SimpleRectangle`
**File:** `TaleWorlds.TwoDimension/SimpleRectangle.cs`

## 概述

SimpleRectangle 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/SimpleRectangle.cs。它是一个 public 结构体，继承链为 SimpleRectangle。public/protected 成员共 10 个：7 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SimpleRectangle 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 SimpleRectangle。成员构成以方法为主（方法 7/10，属性 2/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/SimpleRectangle.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `public float Width` | 属性 |
| `Height` | `public float Height` | 属性 |
| `SimpleRectangle` | `public SimpleRectangle(float x, float y, float width, float height)` | 构造函数 |
| `IsCollide` | `public bool IsCollide(SimpleRectangle other)` | 方法 |
| `GetCenter` | `public Vector2 GetCenter()` | 方法 |
| `IsSubRectOf` | `public bool IsSubRectOf(SimpleRectangle other)` | 方法 |
| `IsValid` | `public bool IsValid()` | 方法 |
| `IsPointInside` | `public bool IsPointInside(Vector2 point)` | 方法 |
| `ReduceToIntersection` | `public void ReduceToIntersection(SimpleRectangle other)` | 方法 |
| `Lerp` | `public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
