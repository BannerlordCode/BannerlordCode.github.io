<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoWaySliderWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoWaySliderWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TwoWaySliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs`

## Overview

`TwoWaySliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ChangeFillWidget` | `public BrushWidget ChangeFillWidget { get { return this._changeFillWidget; }` |
| `BaseValueInt` | `public int BaseValueInt { get { return this._baseValueInt; }` |

## Usage Example

```csharp
// Typical usage of TwoWaySliderWidget (Widget)
// 声明/访问一个 TwoWaySliderWidget
var widget = root.GetChild("twoWaySliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)