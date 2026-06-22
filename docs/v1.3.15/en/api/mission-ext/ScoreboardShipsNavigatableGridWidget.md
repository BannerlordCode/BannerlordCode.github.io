<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardShipsNavigatableGridWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardShipsNavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardShipsNavigatableGridWidget : NavigatableGridWidget`
**Base:** `NavigatableGridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardShipsNavigatableGridWidget.cs`

## Overview

`ScoreboardShipsNavigatableGridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularHorizontalAlignment` | `public HorizontalAlignment RegularHorizontalAlignment { get; set; }` |
| `OverflowHorizontalAlignment` | `public HorizontalAlignment OverflowHorizontalAlignment { get; set; }` |

## Usage Example

```csharp
// Typical usage of ScoreboardShipsNavigatableGridWidget (Widget)
// 声明/访问一个 ScoreboardShipsNavigatableGridWidget
var widget = root.GetChild("scoreboardShipsNavigatableGridWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)