<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryEquippedItemControlsBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryEquippedItemControlsBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs`

## Overview

`InventoryEquippedItemControlsBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryEquippedItemControlsBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget { get; set; }` |

## Key Methods

### ShowPanel
`public void ShowPanel()`

**Purpose:** Handles logic related to `show panel`.

### HidePanel
`public void HidePanel()`

**Purpose:** Handles logic related to `hide panel`.

### ButtonClickEventHandler
`public delegate void ButtonClickEventHandler(Widget itemWidget)`

**Purpose:** Handles logic related to `button click event handler`.

## Usage Example

```csharp
var widget = new InventoryEquippedItemControlsBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)