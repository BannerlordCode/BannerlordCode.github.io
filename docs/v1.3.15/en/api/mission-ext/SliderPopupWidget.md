<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SliderPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SliderPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SliderPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs`

## Overview

`SliderPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupParentWidget` | `public Widget PopupParentWidget { get; set; }` |
| `ClosePopupWidget` | `public ButtonWidget ClosePopupWidget { get; set; }` |
| `SliderValueTextWidget` | `public TextWidget SliderValueTextWidget { get; set; }` |
| `ReserveAmountSlider` | `public SliderWidget ReserveAmountSlider { get; set; }` |

## Usage Example

```csharp
// Typical usage of SliderPopupWidget (Widget)
// 声明/访问一个 SliderPopupWidget
var widget = root.GetChild("sliderPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)