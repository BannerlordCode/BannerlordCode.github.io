<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsBrightnessImageSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsBrightnessImageSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsBrightnessImageSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options/OptionsBrightnessImageSliderWidget.cs`

## Overview

`OptionsBrightnessImageSliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsBrightnessImageSliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMax` | `public bool IsMax { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |

## Usage Example

```csharp
var widget = new OptionsBrightnessImageSliderWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)