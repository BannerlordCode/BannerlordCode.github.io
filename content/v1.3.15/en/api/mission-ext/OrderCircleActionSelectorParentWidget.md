---
title: "OrderCircleActionSelectorParentWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderCircleActionSelectorParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderCircleActionSelectorParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderCircleActionSelectorParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderCircleActionSelectorParentWidget.cs`

## Overview

`OrderCircleActionSelectorParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderCircleActionSelectorParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInFreeCameraMode` | `public bool IsInFreeCameraMode { get; set; }` |
| `CircleActionSelectorWidget` | `public CircleActionSelectorWidget CircleActionSelectorWidget { get; set; }` |

## Usage Example

```csharp
var widget = new OrderCircleActionSelectorParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)