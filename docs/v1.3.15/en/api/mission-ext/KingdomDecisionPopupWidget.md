<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionPopupWidget.cs`

## Overview

`KingdomDecisionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DelayAfterKingsDecision` | `public int DelayAfterKingsDecision { get; set; }` |
| `IsKingsDecisionDone` | `public bool IsKingsDecisionDone { get; set; }` |

## Usage Example

```csharp
// Typical usage of KingdomDecisionPopupWidget (Widget)
// 声明/访问一个 KingdomDecisionPopupWidget
var widget = root.GetChild("kingdomDecisionPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)