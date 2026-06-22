<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTroopItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderTroopItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderTroopItemBrushWidget.cs`

## Overview

`OrderTroopItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentMemberCount` | `public int CurrentMemberCount { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAmmo` | `public bool HasAmmo { get; set; }` |
| `RangedCardBrush` | `public Brush RangedCardBrush { get; set; }` |
| `MeleeCardBrush` | `public Brush MeleeCardBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderTroopItemBrushWidget (Widget)
// 声明/访问一个 OrderTroopItemBrushWidget
var widget = root.GetChild("orderTroopItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)