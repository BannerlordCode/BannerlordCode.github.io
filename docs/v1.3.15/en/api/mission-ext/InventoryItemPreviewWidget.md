<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryItemPreviewWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemPreviewWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemPreviewWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemPreviewWidget.cs`

## Overview

`InventoryItemPreviewWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPreviewOpen` | `public bool IsPreviewOpen { get; set; }` |
| `ItemTableau` | `public ItemTableauWidget ItemTableau { get; set; }` |

## Usage Example

```csharp
// Typical usage of InventoryItemPreviewWidget (Widget)
// 声明/访问一个 InventoryItemPreviewWidget
var widget = root.GetChild("inventoryItemPreviewWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)