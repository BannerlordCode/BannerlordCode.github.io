---
title: "WidgetInfo"
description: "WidgetInfo：TaleWorlds.GauntletUI 的 public 类；公开成员 10 个（方法 3、属性 6、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs。"
---
# WidgetInfo

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class WidgetInfo`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs`

## 概述

WidgetInfo 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs。它是一个 public 类，继承链为 WidgetInfo。public/protected 成员共 10 个：3 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetInfo 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 WidgetInfo。成员构成以属性为主（属性 6/10，方法 3/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `Type` | `public Type Type` | 属性 |
| `GotCustomUpdate` | `public bool GotCustomUpdate` | 属性 |
| `GotCustomLateUpdate` | `public bool GotCustomLateUpdate` | 属性 |
| `GotCustomParallelUpdate` | `public bool GotCustomParallelUpdate` | 属性 |
| `GotUpdateBrushes` | `public bool GotUpdateBrushes` | 属性 |
| `WidgetInfo` | `public WidgetInfo(Type type)` | 构造函数 |
| `Refresh` | `public static void Refresh()` | 方法 |
| `GetWidgetInfo` | `public static WidgetInfo GetWidgetInfo(Type type)` | 方法 |
| `WidgetInfo[]GetWidgetInfos` | `public static WidgetInfo[]GetWidgetInfos()` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
