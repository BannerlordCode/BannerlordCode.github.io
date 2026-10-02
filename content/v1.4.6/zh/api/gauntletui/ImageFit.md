---
title: "ImageFit"
description: "ImageFit：TaleWorlds.GauntletUI 的 public 类；公开成员 13 个（方法 1、属性 8、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs。"
---
# ImageFit

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ImageFit`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs`

## 概述

ImageFit 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs。它是一个 public 类，继承链为 ImageFit。public/protected 成员共 13 个：1 方法、8 属性、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageFit 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 ImageFit。成员构成以属性为主（属性 8/13，方法 1/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public ImageFit.ImageFitTypes Type` | 属性 |
| `HorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments HorizontalAlignment` | 属性 |
| `VerticalAlignment` | `public ImageFit.ImageVerticalAlignments VerticalAlignment` | 属性 |
| `OffsetX` | `public float OffsetX` | 属性 |
| `OffsetY` | `public float OffsetY` | 属性 |
| `ImageFit` | `public ImageFit()` | 构造函数 |
| `GetFittedRectangle` | `public ImageFitResult GetFittedRectangle(in Vector2 containerSize, in Vector2 imageSize)` | 方法 |
| `byte` | `public enum ImageFitTypes : byte` | 属性 |
| `byte` | `public enum ImageHorizontalAlignments : byte` | 属性 |
| `byte` | `public enum ImageVerticalAlignments : byte` | 属性 |
| `byte` | `public enum ImageFitTypes : byte` | 嵌套类型 |
| `byte` | `public enum ImageHorizontalAlignments : byte` | 嵌套类型 |
| `byte` | `public enum ImageVerticalAlignments : byte` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
