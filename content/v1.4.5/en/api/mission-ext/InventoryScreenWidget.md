---
title: "InventoryScreenWidget"
description: "Auto-generated class reference for InventoryScreenWidget."
---
# InventoryScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryScreenWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryScreenWidget.cs`

## Overview

`InventoryScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### InventoryScreenWidget
`public class InventoryScreenWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the InventoryScreenWidget logic.

```csharp
// Obtain an instance of InventoryScreenWidget from the subsystem API first
InventoryScreenWidget inventoryScreenWidget = ...;
var result = inventoryScreenWidget.InventoryScreenWidget(context);
```

### ItemWidgetDragBegin
`public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)`

**Purpose:** **Purpose:** Executes the ItemWidgetDragBegin logic.

```csharp
// Obtain an instance of InventoryScreenWidget from the subsystem API first
InventoryScreenWidget inventoryScreenWidget = ...;
inventoryScreenWidget.ItemWidgetDragBegin(itemWidget);
```

### ItemWidgetDrop
`public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)`

**Purpose:** **Purpose:** Executes the ItemWidgetDrop logic.

```csharp
// Obtain an instance of InventoryScreenWidget from the subsystem API first
InventoryScreenWidget inventoryScreenWidget = ...;
inventoryScreenWidget.ItemWidgetDrop(itemWidget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryScreenWidget widget = ...;
```

## See Also

- [Area Index](../)