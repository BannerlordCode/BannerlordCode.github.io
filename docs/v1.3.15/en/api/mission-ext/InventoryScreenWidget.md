<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs`

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

### ItemWidgetDragBegin
`public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)`

**Purpose:** Handles logic related to `item widget drag begin`.

### ItemWidgetDrop
`public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)`

**Purpose:** Handles logic related to `item widget drop`.

## Usage Example

```csharp
var widget = new InventoryScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)