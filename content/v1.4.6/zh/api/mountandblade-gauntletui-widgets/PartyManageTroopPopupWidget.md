---
title: "PartyManageTroopPopupWidget"
description: "PartyManageTroopPopupWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 8 个（方法 1、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs。"
---
# PartyManageTroopPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs`

## 概述

PartyManageTroopPopupWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 PartyManageTroopPopupWidget → Widget。public/protected 成员共 8 个：1 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyManageTroopPopupWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party），继承链 PartyManageTroopPopupWidget → Widget。成员构成以属性为主（属性 6/8，方法 1/8），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent` | 属性 |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent` | 属性 |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent` | 属性 |
| `PartyManageTroopPopupWidget` | `public PartyManageTroopPopupWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable` | 属性 |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable` | 属性 |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [同命名空间 PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [同命名空间 PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [同命名空间 PartyListPanel](../PartyListPanel)
