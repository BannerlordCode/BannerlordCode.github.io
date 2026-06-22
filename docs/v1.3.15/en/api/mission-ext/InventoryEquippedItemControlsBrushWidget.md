<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryEquippedItemControlsBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget { get; set; }` |

## Key Methods

### ShowPanel
```csharp
public void ShowPanel()
```

### HidePanel
```csharp
public void HidePanel()
```

### ButtonClickEventHandler
```csharp
public delegate void ButtonClickEventHandler(Widget itemWidget)
```

## Usage Example

```csharp
// Typical usage of InventoryEquippedItemControlsBrushWidget (Widget)
// 声明/访问一个 InventoryEquippedItemControlsBrushWidget
var widget = root.GetChild("inventoryEquippedItemControlsBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)