<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DecisionSupporterGridWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `VisibleCount` | `public int VisibleCount { get; set; }` |
| `MoreTextWidget` | `public TextWidget MoreTextWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of DecisionSupporterGridWidget (Widget)
// 声明/访问一个 DecisionSupporterGridWidget
var widget = root.GetChild("decisionSupporterGridWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)