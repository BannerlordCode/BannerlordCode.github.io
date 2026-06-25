---
title: "OrderReturnButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderReturnButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderReturnButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderReturnButtonWidget : OrderItemButtonWidget`
**Base:** `OrderItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderReturnButtonWidget.cs`

## Overview

`OrderReturnButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderReturnButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InputVisualParent` | `public Widget InputVisualParent { get; set; }` |
| `IsHolding` | `public bool IsHolding { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; set; }` |
| `IsDeployment` | `public bool IsDeployment { get; set; }` |

## Usage Example

```csharp
var widget = new OrderReturnButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)