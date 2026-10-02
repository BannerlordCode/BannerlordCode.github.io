---
title: "FillBarVerticalClipTierColorsWidget"
description: "FillBarVerticalClipTierColorsWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 FillBarVerticalWidget；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs。"
---
# FillBarVerticalClipTierColorsWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarVerticalClipTierColorsWidget : FillBarVerticalWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## 概述

FillBarVerticalClipTierColorsWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs。它是一个 public 类，实现/继承 FillBarVerticalWidget，继承链为 FillBarVerticalClipTierColorsWidget → FillBarVerticalWidget → Widget。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FillBarVerticalClipTierColorsWidget 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录一致，继承链 FillBarVerticalClipTierColorsWidget → FillBarVerticalWidget → Widget。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBarVerticalClipTierColorsWidget` | `public FillBarVerticalClipTierColorsWidget(UIContext context) : base(context)` | 构造函数 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `MaxedColor` | `public string MaxedColor` | 属性 |
| `HighColor` | `public string HighColor` | 属性 |
| `MediumColor` | `public string MediumColor` | 属性 |
| `LowColor` | `public string LowColor` | 属性 |

## 参见

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 FillBarVerticalWidget](../FillBarVerticalWidget)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget)
