<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TooltipWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs`

## Overview

`TooltipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TooltipWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositioningType` | `public TooltipPositioningType PositioningType { get; set; }` |
| `AnimTime` | `public float AnimTime { get; set; }` |

## Usage Example

```csharp
var widget = new TooltipWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)