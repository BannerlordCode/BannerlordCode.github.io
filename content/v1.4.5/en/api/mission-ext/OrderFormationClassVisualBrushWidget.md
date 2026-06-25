---
title: "OrderFormationClassVisualBrushWidget"
description: "Auto-generated class reference for OrderFormationClassVisualBrushWidget."
---
# OrderFormationClassVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderFormationClassVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Order/OrderFormationClassVisualBrushWidget.cs`

## Overview

`OrderFormationClassVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderFormationClassVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationClassValue` | `public int FormationClassValue { get; set; }` |

## Key Methods

### OrderFormationClassVisualBrushWidget
`public class OrderFormationClassVisualBrushWidget(UIContext context)`

**Purpose:** Executes the OrderFormationClassVisualBrushWidget logic.

```csharp
// Obtain an instance of OrderFormationClassVisualBrushWidget from the subsystem API first
OrderFormationClassVisualBrushWidget orderFormationClassVisualBrushWidget = ...;
var result = orderFormationClassVisualBrushWidget.OrderFormationClassVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderFormationClassVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)