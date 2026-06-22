<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardBattleResultTitleBackgroundWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardBattleResultTitleBackgroundWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleResultTitleBackgroundWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleResultTitleBackgroundWidget.cs`

## Overview

`ScoreboardBattleResultTitleBackgroundWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `VictoryWidget` | `public Widget VictoryWidget { get; set; }` |
| `DefeatWidget` | `public Widget DefeatWidget { get; set; }` |
| `RetreatWidget` | `public Widget RetreatWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ScoreboardBattleResultTitleBackgroundWidget (Widget)
// 声明/访问一个 ScoreboardBattleResultTitleBackgroundWidget
var widget = root.GetChild("scoreboardBattleResultTitleBackgroundWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)