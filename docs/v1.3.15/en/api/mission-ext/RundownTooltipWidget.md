<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownTooltipWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownTooltipWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownTooltipWidget : TooltipWidget`
**Base:** `TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs`

## Overview

`RundownTooltipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RundownTooltipWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LineContainerWidget` | `public GridWidget LineContainerWidget { get; set; }` |
| `DividerCollectionWidget` | `public RundownColumnDividerCollectionWidget DividerCollectionWidget { get; set; }` |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt { get; set; }` |

## Usage Example

```csharp
var widget = new RundownTooltipWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)