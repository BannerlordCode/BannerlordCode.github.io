---
title: "OptionsItemWidget"
description: "OptionsItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 19 个（方法 5、属性 13、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs。"
---
# OptionsItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs`

## 概述

OptionsItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 OptionsItemWidget → Widget。public/protected 成员共 19 个：5 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OptionsItemWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options），继承链 OptionsItemWidget → Widget。成员构成以属性为主（属性 13/19，方法 5/19），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BooleanOption` | `public Widget BooleanOption` | 属性 |
| `NumericOption` | `public Widget NumericOption` | 属性 |
| `StringOption` | `public Widget StringOption` | 属性 |
| `GameKeyOption` | `public Widget GameKeyOption` | 属性 |
| `ActionOption` | `public Widget ActionOption` | 属性 |
| `InputOption` | `public Widget InputOption` | 属性 |
| `DropdownWidget` | `public AnimatedDropdownWidget DropdownWidget` | 属性 |
| `BooleanToggleButtonWidget` | `public ButtonWidget BooleanToggleButtonWidget` | 属性 |
| `OptionsItemWidget` | `public OptionsItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | 方法 |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | 方法 |
| `SetCurrentScreenWidget` | `public void SetCurrentScreenWidget(OptionsScreenWidget screenWidget)` | 方法 |
| `OnGamepadNavigationIndexUpdated` | `protected override void OnGamepadNavigationIndexUpdated(int newIndex)` | 方法 |
| `OptionTypeID` | `public int OptionTypeID` | 属性 |
| `IsOptionEnabled` | `public bool IsOptionEnabled` | 属性 |
| `OptionTitle` | `public string OptionTitle` | 属性 |
| `string[]ImageIDs` | `public string[]ImageIDs` | 属性 |
| `OptionDescription` | `public string OptionDescription` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OptionsBrightnessImageSliderWidget](../OptionsBrightnessImageSliderWidget)
- [同命名空间 OptionsKeyItemListPanel](../OptionsKeyItemListPanel)
- [同命名空间 OptionsScreenWidget](../OptionsScreenWidget)
