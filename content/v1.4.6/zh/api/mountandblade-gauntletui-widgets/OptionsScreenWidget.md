---
title: "OptionsScreenWidget"
description: "OptionsScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 10 个（方法 3、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs。"
---
# OptionsScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs`

## 概述

OptionsScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 OptionsScreenWidget → Widget。public/protected 成员共 10 个：3 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OptionsScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options），继承链 OptionsScreenWidget → Widget。成员构成以属性为主（属性 6/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget` | 属性 |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget` | 属性 |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget` | 属性 |
| `CurrentOptionExtraInformationWidget` | `public RichTextWidget CurrentOptionExtraInformationWidget` | 属性 |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget` | 属性 |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle` | 属性 |
| `OptionsScreenWidget` | `public OptionsScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `SetCurrentOption` | `public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OptionsBrightnessImageSliderWidget](../OptionsBrightnessImageSliderWidget)
- [同命名空间 OptionsItemWidget](../OptionsItemWidget)
- [同命名空间 OptionsKeyItemListPanel](../OptionsKeyItemListPanel)
