<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinancePaymentSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ClanFinancePaymentSliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new ClanFinancePaymentSliderWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)