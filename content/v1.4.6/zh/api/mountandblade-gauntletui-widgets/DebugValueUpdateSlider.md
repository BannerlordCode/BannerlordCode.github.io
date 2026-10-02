---
title: "DebugValueUpdateSlider"
description: "DebugValueUpdateSlider：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 SliderWidget；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs。"
---
# DebugValueUpdateSlider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DebugValueUpdateSlider : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs`

## 概述

DebugValueUpdateSlider 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs。它是一个 public 类，实现/继承 SliderWidget，继承链为 DebugValueUpdateSlider → SliderWidget。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DebugValueUpdateSlider 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 DebugValueUpdateSlider → SliderWidget。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 SliderWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DebugValueUpdateSlider` | `public DebugValueUpdateSlider(UIContext context) : base(context)` | 构造函数 |
| `OnValueIntChanged` | `protected override void OnValueIntChanged(int value)` | 方法 |
| `OnValueFloatChanged` | `protected override void OnValueFloatChanged(float value)` | 方法 |
| `WidgetToUpdate` | `public TextWidget WidgetToUpdate` | 属性 |
| `ValueToUpdate` | `public FillBarVerticalWidget ValueToUpdate` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
