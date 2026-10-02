---
title: "SliderPopupWidget"
description: "SliderPopupWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs。"
---
# SliderPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SliderPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs`

## 概述

SliderPopupWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 SliderPopupWidget → Widget。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SliderPopupWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement），继承链 SliderPopupWidget → Widget。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SliderPopupWidget` | `public SliderPopupWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `PopupParentWidget` | `public Widget PopupParentWidget` | 属性 |
| `ClosePopupWidget` | `public ButtonWidget ClosePopupWidget` | 属性 |
| `SliderValueTextWidget` | `public TextWidget SliderValueTextWidget` | 属性 |
| `ReserveAmountSlider` | `public SliderWidget ReserveAmountSlider` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [同命名空间 AutoClosePopupWidget](../AutoClosePopupWidget)
- [同命名空间 DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [同命名空间 DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget)
