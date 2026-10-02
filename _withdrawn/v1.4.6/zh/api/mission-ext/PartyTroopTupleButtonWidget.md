---
title: "PartyTroopTupleButtonWidget"
description: "PartyTroopTupleButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party 的 public 类，继承 ButtonWidget；公开成员 13 个（方法 1、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTroopTupleButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyTroopTupleButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PartyTroopTupleButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 PartyTroopTupleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 13 个：1 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyTroopTupleButtonWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`，继承链 PartyTroopTupleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 11/13，方法 1/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterID` | `public string CharacterID` | 属性 |
| `PartyTroopTupleButtonWidget` | `public PartyTroopTupleButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `ScreenWidget` | `public PartyScreenWidget ScreenWidget` | 属性 |
| `IsTupleLeftSide` | `public bool IsTupleLeftSide` | 属性 |
| `TransferSlider` | `public InventoryTwoWaySliderWidget TransferSlider` | 属性 |
| `IsTransferable` | `public bool IsTransferable` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `IsPrisoner` | `public bool IsPrisoner` | 属性 |
| `TransferAmount` | `public int TransferAmount` | 属性 |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer` | 属性 |
| `Main` | `public Widget Main` | 属性 |
| `UpgradesPanel` | `public Widget UpgradesPanel` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ButtonWidget](../../gui/ButtonWidget/)
- [同命名空间 PartyFormationDropdownWidget](../PartyFormationDropdownWidget/)
- [同命名空间 PartyHeaderToggleWidget](../PartyHeaderToggleWidget/)
- [同命名空间 PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [同命名空间 PartyListPanel](../PartyListPanel/)
