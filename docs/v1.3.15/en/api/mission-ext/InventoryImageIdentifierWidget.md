<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryImageIdentifierWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Methods

### SetRenderRequestedPreviousFrame
```csharp
public void SetRenderRequestedPreviousFrame(bool isRequested)
```

## Usage Example

```csharp
// Typical usage of InventoryImageIdentifierWidget (Widget)
// 声明/访问一个 InventoryImageIdentifierWidget
var widget = root.GetChild("inventoryImageIdentifierWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)