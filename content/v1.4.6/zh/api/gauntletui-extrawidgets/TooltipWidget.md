---
title: "TooltipWidget"
description: "TooltipWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 Widget；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs。"
---
# TooltipWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class TooltipWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs`

## 概述

TooltipWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 TooltipWidget → Widget。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TooltipWidget 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录一致，继承链 TooltipWidget → Widget。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PositioningType` | `public TooltipPositioningType PositioningType` | 属性 |
| `TooltipWidget` | `public TooltipWidget(UIContext context) : base(context)` | 构造函数 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `AnimTime` | `public float AnimTime` | 属性 |

## 参见

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget)
