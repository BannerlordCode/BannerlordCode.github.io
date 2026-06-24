<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DecisionSupporterGridWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionSupporterGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DecisionSupporterGridWidget : GridWidget`
**Base:** `GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupporterGridWidget.cs`

## Overview

`DecisionSupporterGridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DecisionSupporterGridWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisibleCount` | `public int VisibleCount { get; set; }` |
| `MoreTextWidget` | `public TextWidget MoreTextWidget { get; set; }` |

## Usage Example

```csharp
var widget = new DecisionSupporterGridWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)