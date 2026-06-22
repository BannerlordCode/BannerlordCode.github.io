<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiSelectionElementsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiSelectionElementsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiSelectionElementsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/MultiSelectionElementsWidget.cs`

## Overview

`MultiSelectionElementsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneButtonWidget` | `public ButtonWidget DoneButtonWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiSelectionElementsWidget (Widget)
// 声明/访问一个 MultiSelectionElementsWidget
var widget = root.GetChild("multiSelectionElementsWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)