<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderCircleActionSelectorParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInFreeCameraMode` | `public bool IsInFreeCameraMode { get; set; }` |
| `CircleActionSelectorWidget` | `public CircleActionSelectorWidget CircleActionSelectorWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderCircleActionSelectorParentWidget (Widget)
// 声明/访问一个 OrderCircleActionSelectorParentWidget
var widget = root.GetChild("orderCircleActionSelectorParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)