<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RelationTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RelationTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RelationTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/RelationTextWidget.cs`

## Overview

`RelationTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `ZeroColor` | `public Color ZeroColor { get; set; }` |
| `PositiveColor` | `public Color PositiveColor { get; set; }` |
| `NegativeColor` | `public Color NegativeColor { get; set; }` |

## Usage Example

```csharp
// Typical usage of RelationTextWidget (Widget)
// 声明/访问一个 RelationTextWidget
var widget = root.GetChild("relationTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)