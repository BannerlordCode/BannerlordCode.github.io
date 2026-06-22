<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingItemStatSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingItemStatSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingItemStatSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingItemStatSliderWidget.cs`

## Overview

`CraftingItemStatSliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueText` | `public TextWidget ValueText { get; set; }` |
| `LabelTextWidget` | `public TextWidget LabelTextWidget { get; set; }` |
| `HasValidTarget` | `public bool HasValidTarget { get; set; }` |
| `HasValidValue` | `public bool HasValidValue { get; set; }` |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `TargetFill` | `public BrushWidget TargetFill { get; set; }` |

## Usage Example

```csharp
// Typical usage of CraftingItemStatSliderWidget (Widget)
// 声明/访问一个 CraftingItemStatSliderWidget
var widget = root.GetChild("craftingItemStatSliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)