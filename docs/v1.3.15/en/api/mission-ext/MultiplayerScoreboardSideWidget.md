<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardSideWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardSideWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardSideWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs`

## Overview

`MultiplayerScoreboardSideWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureColor` | `public Color CultureColor { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `UseSecondary` | `public bool UseSecondary { get; set; }` |
| `NameColumnWidthRatio` | `public float NameColumnWidthRatio { get; set; }` |
| `TitlesListPanel` | `public ListPanel TitlesListPanel { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerScoreboardSideWidget (Widget)
// 声明/访问一个 MultiplayerScoreboardSideWidget
var widget = root.GetChild("multiplayerScoreboardSideWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)