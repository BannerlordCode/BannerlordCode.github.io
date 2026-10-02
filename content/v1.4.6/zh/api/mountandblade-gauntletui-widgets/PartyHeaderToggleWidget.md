---
title: "PartyHeaderToggleWidget"
description: "PartyHeaderToggleWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ToggleButtonWidget；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs。"
---
# PartyHeaderToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs`

## 概述

PartyHeaderToggleWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs。它是一个 public 类，实现/继承 ToggleButtonWidget，继承链为 PartyHeaderToggleWidget → ToggleButtonWidget → ButtonWidget。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyHeaderToggleWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party），继承链 PartyHeaderToggleWidget → ToggleButtonWidget → ButtonWidget。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState` | 属性 |
| `PartyHeaderToggleWidget` | `public PartyHeaderToggleWidget(UIContext context) : base(context)` | 构造函数 |
| `OnClick` | `protected override void OnClick(Widget widget)` | 方法 |
| `SetState` | `public override void SetState(string stateName)` | 方法 |
| `ListPanel` | `public ListPanel ListPanel` | 属性 |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget` | 属性 |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator` | 属性 |
| `IsRelevant` | `public bool IsRelevant` | 属性 |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ToggleButtonWidget](../ToggleButtonWidget)
- [同命名空间 PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [同命名空间 PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [同命名空间 PartyListPanel](../PartyListPanel)
- [同命名空间 PartyManageTroopPopupWidget](../PartyManageTroopPopupWidget)
