<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyBasedTooltipWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PropertyBasedTooltipWidget : TooltipWidget`
**Base:** `TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/PropertyBasedTooltipWidget.cs`

## Overview

`PropertyBasedTooltipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllyColor` | `public Color AllyColor { get; set; }` |
| `EnemyColor` | `public Color EnemyColor { get; set; }` |
| `NeutralColor` | `public Color NeutralColor { get; set; }` |
| `PropertyListBackground` | `public Widget PropertyListBackground { get; set; }` |
| `PropertyList` | `public ListPanel PropertyList { get; set; }` |
| `Mode` | `public int Mode { get; set; }` |
| `NeutralTroopsTextBrush` | `public Brush NeutralTroopsTextBrush { get; set; }` |
| `EnemyTroopsTextBrush` | `public Brush EnemyTroopsTextBrush { get; set; }` |
| `AllyTroopsTextBrush` | `public Brush AllyTroopsTextBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of PropertyBasedTooltipWidget (Widget)
// 声明/访问一个 PropertyBasedTooltipWidget
var widget = root.GetChild("propertyBasedTooltipWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)