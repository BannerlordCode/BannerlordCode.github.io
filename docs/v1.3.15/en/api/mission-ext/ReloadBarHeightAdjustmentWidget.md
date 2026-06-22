<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReloadBarHeightAdjustmentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReloadBarHeightAdjustmentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReloadBarHeightAdjustmentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/ReloadBarHeightAdjustmentWidget.cs`

## Overview

`ReloadBarHeightAdjustmentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `RelativeDurationToMaxDuration` | `public float RelativeDurationToMaxDuration { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ReloadBarHeightAdjustmentWidget (Widget)
// 声明/访问一个 ReloadBarHeightAdjustmentWidget
var widget = root.GetChild("reloadBarHeightAdjustmentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)