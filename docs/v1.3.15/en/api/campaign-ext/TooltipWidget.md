<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TooltipWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs`

## Overview

`TooltipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositioningType` | `public TooltipPositioningType PositioningType { get; set; }` |
| `AnimTime` | `public float AnimTime { get { return this._animTime; }` |

## Usage Example

```csharp
// Typical usage of TooltipWidget (Widget)
// 声明/访问一个 TooltipWidget
var widget = root.GetChild("tooltipWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)