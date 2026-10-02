---
title: "ClanFinancePaymentSliderWidget"
description: "ClanFinancePaymentSliderWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 SliderWidget；公开成员 9 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs。"
---
# ClanFinancePaymentSliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanFinancePaymentSliderWidget : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs`

## 概述

ClanFinancePaymentSliderWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs。它是一个 public 类，实现/继承 SliderWidget，继承链为 ClanFinancePaymentSliderWidget → SliderWidget。public/protected 成员共 9 个：1 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinancePaymentSliderWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan），继承链 ClanFinancePaymentSliderWidget → SliderWidget。成员构成以属性为主（属性 7/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 SliderWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinancePaymentSliderWidget` | `public ClanFinancePaymentSliderWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `InitialFillWidget` | `public Widget InitialFillWidget` | 属性 |
| `NewIncreaseFillWidget` | `public Widget NewIncreaseFillWidget` | 属性 |
| `NewDecreaseFillWidget` | `public Widget NewDecreaseFillWidget` | 属性 |
| `CurrentRatioIndicatorWidget` | `public Widget CurrentRatioIndicatorWidget` | 属性 |
| `CurrentSize` | `public int CurrentSize` | 属性 |
| `TargetSize` | `public int TargetSize` | 属性 |
| `SizeLimit` | `public int SizeLimit` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClanFinanceTextWidget](../ClanFinanceTextWidget)
- [同命名空间 ClanLordStatusWidget](../ClanLordStatusWidget)
- [同命名空间 ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [同命名空间 ClanPartyRoleSelectionToggleWidget](../ClanPartyRoleSelectionToggleWidget)
