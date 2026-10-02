---
title: "PrimitivePolygonMaterial"
description: "PrimitivePolygonMaterial：TaleWorlds.TwoDimension 的 public 类，继承 Material；公开成员 4 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs。"
---
# PrimitivePolygonMaterial

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class PrimitivePolygonMaterial : Material`
**File:** `TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs`

## 概述

PrimitivePolygonMaterial 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs。它是一个 public 类，实现/继承 Material，继承链为 PrimitivePolygonMaterial → Material。public/protected 成员共 4 个：1 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PrimitivePolygonMaterial 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 PrimitivePolygonMaterial → Material。成员构成以属性为主（属性 1/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Color` | `public Color Color` | 属性 |
| `PrimitivePolygonMaterial` | `public PrimitivePolygonMaterial(Color color) : this(color, 0)` | 构造函数 |
| `PrimitivePolygonMaterial` | `public PrimitivePolygonMaterial(Color color, int renderOrder) : this(color, renderOrder, true)` | 构造函数 |
| `PrimitivePolygonMaterial` | `public PrimitivePolygonMaterial(Color color, int renderOrder, bool blending) : base(blending, renderOrder)` | 构造函数 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Material](../Material)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
