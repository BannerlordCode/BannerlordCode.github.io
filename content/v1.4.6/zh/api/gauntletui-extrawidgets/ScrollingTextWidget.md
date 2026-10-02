---
title: "ScrollingTextWidget"
description: "ScrollingTextWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 TextWidget；公开成员 10 个（方法 3、属性 6、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs。"
---
# ScrollingTextWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class ScrollingTextWidget : TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs`

## 概述

ScrollingTextWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs。它是一个 public 类，实现/继承 TextWidget，继承链为 ScrollingTextWidget → TextWidget。public/protected 成员共 10 个：3 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScrollingTextWidget 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录一致，继承链 ScrollingTextWidget → TextWidget。成员构成以属性为主（属性 6/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 TextWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActualText` | `public string ActualText` | 属性 |
| `ScrollingTextWidget` | `public ScrollingTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnBrushChanged` | `public override void OnBrushChanged()` | 方法 |
| `SetText` | `protected override void SetText(string value)` | 方法 |
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget` | 属性 |
| `IsAutoScrolling` | `public bool IsAutoScrolling` | 属性 |
| `ScrollPerTick` | `public float ScrollPerTick` | 属性 |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration` | 属性 |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment` | 属性 |

## 参见

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget)
