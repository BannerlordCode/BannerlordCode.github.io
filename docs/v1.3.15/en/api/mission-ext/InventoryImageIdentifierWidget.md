<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryImageIdentifierWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryImageIdentifierWidget : ImageIdentifierWidget`
**Base:** `ImageIdentifierWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryImageIdentifierWidget.cs`

## Overview

`InventoryImageIdentifierWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryImageIdentifierWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetRenderRequestedPreviousFrame
`public void SetRenderRequestedPreviousFrame(bool isRequested)`

**Purpose:** Sets the value or state of `render requested previous frame`.

## Usage Example

```csharp
var widget = new InventoryImageIdentifierWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)