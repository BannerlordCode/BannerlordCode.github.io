---
title: "ClanPartyRoleSelectionToggleWidget"
description: "ClanPartyRoleSelectionToggleWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 4 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs。"
---
# ClanPartyRoleSelectionToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanPartyRoleSelectionToggleWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs`

## 概述

ClanPartyRoleSelectionToggleWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 ClanPartyRoleSelectionToggleWidget → ButtonWidget。public/protected 成员共 4 个：2 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanPartyRoleSelectionToggleWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan），继承链 ClanPartyRoleSelectionToggleWidget → ButtonWidget。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanPartyRoleSelectionToggleWidget` | `public ClanPartyRoleSelectionToggleWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnClick` | `protected virtual void OnClick(Widget widget)` | 方法 |
| `Popup` | `public ClanPartyRoleSelectionPopupWidget Popup` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [同命名空间 ClanFinanceTextWidget](../ClanFinanceTextWidget)
- [同命名空间 ClanLordStatusWidget](../ClanLordStatusWidget)
- [同命名空间 ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
