<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsBrightnessImageSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsBrightnessImageSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsBrightnessImageSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsBrightnessImageSliderWidget.cs`

## Overview

`OptionsBrightnessImageSliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMax` | `public bool IsMax { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of OptionsBrightnessImageSliderWidget (Widget)
// 声明/访问一个 OptionsBrightnessImageSliderWidget
var widget = root.GetChild("optionsBrightnessImageSliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)