<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTroopItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderTroopItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderTroopItemBrushWidget.cs`

## Overview

`OrderTroopItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderTroopItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new OrderTroopItemBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)