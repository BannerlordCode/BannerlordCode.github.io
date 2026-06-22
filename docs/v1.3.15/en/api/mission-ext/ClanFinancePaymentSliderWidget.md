<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinancePaymentSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinancePaymentSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFinancePaymentSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs`

## Overview

`ClanFinancePaymentSliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialFillWidget` | `public Widget InitialFillWidget { get; set; }` |
| `NewIncreaseFillWidget` | `public Widget NewIncreaseFillWidget { get; set; }` |
| `NewDecreaseFillWidget` | `public Widget NewDecreaseFillWidget { get; set; }` |
| `CurrentRatioIndicatorWidget` | `public Widget CurrentRatioIndicatorWidget { get; set; }` |
| `CurrentSize` | `public int CurrentSize { get; set; }` |
| `TargetSize` | `public int TargetSize { get; set; }` |
| `SizeLimit` | `public int SizeLimit { get; set; }` |

## Usage Example

```csharp
// Typical usage of ClanFinancePaymentSliderWidget (Widget)
// 声明/访问一个 ClanFinancePaymentSliderWidget
var widget = root.GetChild("clanFinancePaymentSliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)