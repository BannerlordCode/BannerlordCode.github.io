<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardScreenWidget.cs`

## Overview

`MultiplayerScoreboardScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `SingleColumnedWidth` | `public int SingleColumnedWidth { get; set; }` |
| `DoubleColumnedWidth` | `public int DoubleColumnedWidth { get; set; }` |
| `SidesList` | `public ListPanel SidesList { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerScoreboardScreenWidget (Widget)
// 声明/访问一个 MultiplayerScoreboardScreenWidget
var widget = root.GetChild("multiplayerScoreboardScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)