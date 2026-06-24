<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderFormationClassVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderFormationClassVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderFormationClassVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Order/OrderFormationClassVisualBrushWidget.cs`

## Overview

`OrderFormationClassVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderFormationClassVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationClassValue` | `public int FormationClassValue { get; set; }` |

## Usage Example

```csharp
var widget = new OrderFormationClassVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)