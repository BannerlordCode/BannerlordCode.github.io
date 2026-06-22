<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyQuestProgressWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyQuestProgressWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyQuestProgressWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs`

## Overview

`PartyQuestProgressWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemCount` | `public int ItemCount { get; set; }` |
| `DividerContainer` | `public ListPanel DividerContainer { get; set; }` |
| `DividerBrush` | `public Brush DividerBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyQuestProgressWidget (Widget)
// 声明/访问一个 PartyQuestProgressWidget
var widget = root.GetChild("partyQuestProgressWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)