<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownTooltipWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `LineContainerWidget` | `public GridWidget LineContainerWidget { get; set; }` |
| `DividerCollectionWidget` | `public RundownColumnDividerCollectionWidget DividerCollectionWidget { get; set; }` |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt { get; set; }` |

## Usage Example

```csharp
// Typical usage of RundownTooltipWidget (Widget)
// 声明/访问一个 RundownTooltipWidget
var widget = root.GetChild("rundownTooltipWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)