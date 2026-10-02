---
title: "InventoryScreenWidget"
description: "InventoryScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory 的 public 类，继承 Widget；公开成员 21 个（方法 4、属性 16、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InventoryScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 InventoryScreenWidget → Widget → PropertyOwnerObject。public/protected 成员共 21 个：4 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryScreenWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，继承链 InventoryScreenWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 16/21，方法 4/21），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryScreenWidget` | `public InventoryScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `ItemWidgetDragBegin` | `public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)` | 方法 |
| `ItemWidgetDrop` | `public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)` | 方法 |
| `TransferInputKeyVisualWidget` | `public InputKeyVisualWidget TransferInputKeyVisualWidget` | 属性 |
| `PreviousCharacterInputVisualParent` | `public Widget PreviousCharacterInputVisualParent` | 属性 |
| `NextCharacterInputVisualParent` | `public Widget NextCharacterInputVisualParent` | 属性 |
| `TradeLabel` | `public RichTextWidget TradeLabel` | 属性 |
| `InventoryTooltip` | `public Widget InventoryTooltip` | 属性 |
| `ItemPreviewWidget` | `public InventoryItemPreviewWidget ItemPreviewWidget` | 属性 |
| `TransactionCount` | `public int TransactionCount` | 属性 |
| `EquipmentMode` | `public int EquipmentMode` | 属性 |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex` | 属性 |
| `OtherInventoryListWidget` | `public ScrollablePanel OtherInventoryListWidget` | 属性 |
| `PlayerInventoryListWidget` | `public ScrollablePanel PlayerInventoryListWidget` | 属性 |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList` | 属性 |
| `IsBannerTutorialActive` | `public bool IsBannerTutorialActive` | 属性 |
| `BannerTypeName` | `public string BannerTypeName` | 属性 |
| `ScrollToItem` | `public bool ScrollToItem` | 属性 |
| `ScrollItemId` | `public string ScrollItemId` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer/)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [同命名空间 InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget/)
