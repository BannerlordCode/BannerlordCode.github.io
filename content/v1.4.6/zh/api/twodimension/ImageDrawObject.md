---
title: "ImageDrawObject"
description: "ImageDrawObject：TaleWorlds.TwoDimension 的 public 结构体，继承 IDrawObject；公开成员 2 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.TwoDimension/ImageDrawObject.cs。"
---
# ImageDrawObject

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct ImageDrawObject : IDrawObject`
**File:** `TaleWorlds.TwoDimension/ImageDrawObject.cs`

## 概述

ImageDrawObject 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/ImageDrawObject.cs。它是一个 public 结构体，实现/继承 IDrawObject，继承链为 ImageDrawObject → IDrawObject。public/protected 成员共 2 个：1 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageDrawObject 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 ImageDrawObject → IDrawObject。成员构成以方法为主（方法 1/2，属性 1/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/ImageDrawObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Invalid` | `public static ImageDrawObject Invalid` | 属性 |
| `Create` | `public static ImageDrawObject Create(in Rectangle2D rectangle, in Vec2 uvMin, in Vec2 uvMax)` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IDrawObject](../IDrawObject)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
