---
title: "BoostItemButtonWidget"
description: "BoostItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy 的 public 类，继承 ButtonWidget；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoostItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BoostItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BoostItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 BoostItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoostItemButtonWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy`，继承链 BoostItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ParentPopupWidget` | `public BoostCohesionPopupWidget ParentPopupWidget` | 属性 |
| `BoostItemButtonWidget` | `public BoostItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `BoostCurrencyType` | `public int BoostCurrencyType` | 属性 |
| `BoostCurrencyIconWidget` | `public Widget BoostCurrencyIconWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ButtonWidget](../../gui/ButtonWidget/)
- [同命名空间 BoostCohesionPopupWidget](../BoostCohesionPopupWidget/)
- [同命名空间 GatherArmyTupleButtonWidget](../GatherArmyTupleButtonWidget/)
