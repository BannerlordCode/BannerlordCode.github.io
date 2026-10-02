---
title: "InventoryAlternativeUsageContainer"
description: "InventoryAlternativeUsageContainer：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory 的 public 类，继承 Container；公开成员 11 个（方法 5、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryAlternativeUsageContainer

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryAlternativeUsageContainer : Container`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InventoryAlternativeUsageContainer 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs。它是一个 public 类，实现/继承 Container，继承链为 InventoryAlternativeUsageContainer → Container → Widget → PropertyOwnerObject。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryAlternativeUsageContainer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，继承链 InventoryAlternativeUsageContainer → Container → Widget → PropertyOwnerObject。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryAlternativeUsageContainer` | `public InventoryAlternativeUsageContainer(UIContext context) : base(context)` | 构造函数 |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | 方法 |
| `ColumnLimit` | `public int ColumnLimit` | 属性 |
| `CellWidth` | `public float CellWidth` | 属性 |
| `CellHeight` | `public float CellHeight` | 属性 |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | 属性 |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)` | 方法 |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)` | 方法 |
| `IsDragHovering` | `public override bool IsDragHovering` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Container](../../gui/Container/)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [同命名空间 InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget/)
- [同命名空间 InventoryEquippedItemSlotWidget](../InventoryEquippedItemSlotWidget/)
