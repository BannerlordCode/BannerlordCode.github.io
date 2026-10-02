---
title: "SpritePart"
description: "SpritePart：TaleWorlds.TwoDimension 的 public 类；公开成员 16 个（方法 1、属性 14、字段 0）。源文件 TaleWorlds.TwoDimension/SpritePart.cs。"
---
# SpritePart

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SpritePart`
**File:** `TaleWorlds.TwoDimension/SpritePart.cs`

## 概述

SpritePart 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/SpritePart.cs。它是一个 public 类，继承链为 SpritePart。public/protected 成员共 16 个：1 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpritePart 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 SpritePart。成员构成以属性为主（属性 14/16，方法 1/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/SpritePart.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `Width` | `public int Width` | 属性 |
| `Height` | `public int Height` | 属性 |
| `SheetID` | `public int SheetID` | 属性 |
| `SheetX` | `public int SheetX` | 属性 |
| `SheetY` | `public int SheetY` | 属性 |
| `MinU` | `public float MinU` | 属性 |
| `MinV` | `public float MinV` | 属性 |
| `MaxU` | `public float MaxU` | 属性 |
| `MaxV` | `public float MaxV` | 属性 |
| `SheetWidth` | `public int SheetWidth` | 属性 |
| `SheetHeight` | `public int SheetHeight` | 属性 |
| `Texture` | `public Texture Texture` | 属性 |
| `Category` | `public SpriteCategory Category` | 属性 |
| `SpritePart` | `public SpritePart(string name, SpriteCategory category, int width, int height)` | 构造函数 |
| `UpdateInitValues` | `public void UpdateInitValues()` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
