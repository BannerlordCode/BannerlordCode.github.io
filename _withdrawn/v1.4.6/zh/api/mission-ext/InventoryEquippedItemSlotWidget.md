---
title: "InventoryEquippedItemSlotWidget"
description: "InventoryEquippedItemSlotWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory 的 public 类，继承 InventoryItemButtonWidget；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemSlotWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryEquippedItemSlotWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryEquippedItemSlotWidget : InventoryItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemSlotWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InventoryEquippedItemSlotWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemSlotWidget.cs。它是一个 public 类，实现/继承 InventoryItemButtonWidget，继承链为 InventoryEquippedItemSlotWidget → InventoryItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryEquippedItemSlotWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，继承链 InventoryEquippedItemSlotWidget → InventoryItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemSlotWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryEquippedItemSlotWidget` | `public InventoryEquippedItemSlotWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier` | 属性 |
| `Background` | `public Widget Background` | 属性 |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 InventoryItemButtonWidget](../InventoryItemButtonWidget/)
- [同命名空间 InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer/)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [同命名空间 InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget/)
