---
title: "OrderSiegeDeploymentItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSiegeDeploymentItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderSiegeDeploymentItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentItemButtonWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderSiegeDeploymentItemButtonWidget.cs`

## Overview

`OrderSiegeDeploymentItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderSiegeDeploymentItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreachedTextWidget` | `public TextWidget BreachedTextWidget { get; set; }` |
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `PointType` | `public int PointType { get; set; }` |
| `IsInsideWindow` | `public bool IsInsideWindow { get; set; }` |
| `IsInFront` | `public bool IsInFront { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `ScreenWidget` | `public OrderSiegeDeploymentScreenWidget ScreenWidget { get; set; }` |

## Key Methods

### OrderSiegeDeploymentItemButtonWidget
`public class OrderSiegeDeploymentItemButtonWidget(UIContext context)`

**Purpose:** Handles logic related to `order siege deployment item button widget`.

## Usage Example

```csharp
var widget = new OrderSiegeDeploymentItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)