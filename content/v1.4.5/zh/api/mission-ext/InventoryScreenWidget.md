---
title: "InventoryScreenWidget"
description: "InventoryScreenWidget 的自动生成类参考。"
---
# InventoryScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryScreenWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryScreenWidget.cs`

## 概述

`InventoryScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TransferInputKeyVisualWidget` | `public InputKeyVisualWidget TransferInputKeyVisualWidget { get; set; }` |
| `PreviousCharacterInputVisualParent` | `public Widget PreviousCharacterInputVisualParent { get; set; }` |
| `NextCharacterInputVisualParent` | `public Widget NextCharacterInputVisualParent { get; set; }` |
| `TradeLabel` | `public RichTextWidget TradeLabel { get; set; }` |
| `InventoryTooltip` | `public Widget InventoryTooltip { get; set; }` |
| `ItemPreviewWidget` | `public InventoryItemPreviewWidget ItemPreviewWidget { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `EquipmentMode` | `public int EquipmentMode { get; set; }` |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex { get; set; }` |
| `OtherInventoryListWidget` | `public ScrollablePanel OtherInventoryListWidget { get; set; }` |
| `PlayerInventoryListWidget` | `public ScrollablePanel PlayerInventoryListWidget { get; set; }` |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList { get; set; }` |
| `IsBannerTutorialActive` | `public bool IsBannerTutorialActive { get; set; }` |
| `BannerTypeName` | `public string BannerTypeName { get; set; }` |
| `ScrollToItem` | `public bool ScrollToItem { get; set; }` |
| `ScrollItemId` | `public string ScrollItemId { get; set; }` |

## 主要方法

### InventoryScreenWidget
`public class InventoryScreenWidget(UIContext context)`

**用途 / Purpose:** 调用 InventoryScreenWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 InventoryScreenWidget 实例
InventoryScreenWidget inventoryScreenWidget = ...;
var result = inventoryScreenWidget.InventoryScreenWidget(context);
```

### ItemWidgetDragBegin
`public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)`

**用途 / Purpose:** 调用 ItemWidgetDragBegin 对应的操作。

```csharp
// 先通过子系统 API 拿到 InventoryScreenWidget 实例
InventoryScreenWidget inventoryScreenWidget = ...;
inventoryScreenWidget.ItemWidgetDragBegin(itemWidget);
```

### ItemWidgetDrop
`public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)`

**用途 / Purpose:** 调用 ItemWidgetDrop 对应的操作。

```csharp
// 先通过子系统 API 拿到 InventoryScreenWidget 实例
InventoryScreenWidget inventoryScreenWidget = ...;
inventoryScreenWidget.ItemWidgetDrop(itemWidget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
InventoryScreenWidget widget = ...;
```

## 参见

- [本区域目录](../)