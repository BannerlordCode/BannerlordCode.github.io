---
title: "ScoreboardScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs`

## Overview

`ScoreboardScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowScoreboard` | `public bool ShowScoreboard { get; set; }` |
| `IsOver` | `public bool IsOver { get; set; }` |
| `BattleResult` | `public int BattleResult { get; set; }` |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead { get; set; }` |
| `IsSimulation` | `public bool IsSimulation { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `ScrollGradient` | `public Widget ScrollGradient { get; set; }` |
| `ControlButtonsPanel` | `public Widget ControlButtonsPanel { get; set; }` |
| `InputKeysPanel` | `public ListPanel InputKeysPanel { get; set; }` |
| `ShowMouseIconWidget` | `public Widget ShowMouseIconWidget { get; set; }` |
| `FastForwardWidget` | `public Widget FastForwardWidget { get; set; }` |
| `QuitButton` | `public ButtonWidget QuitButton { get; set; }` |
| `ShowScoreboardToggle` | `public ButtonWidget ShowScoreboardToggle { get; set; }` |
| `BattleRewardsWidget` | `public ScoreboardBattleRewardsWidget BattleRewardsWidget { get; set; }` |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess { get; set; }` |
| `FlagsRetreat` | `public DelayedStateChanger FlagsRetreat { get; set; }` |
| `FlagsDefeat` | `public DelayedStateChanger FlagsDefeat { get; set; }` |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger { get; set; }` |
| `ShipsStateChanger` | `public DelayedStateChanger ShipsStateChanger { get; set; }` |
| `TitleStateChanger` | `public DelayedStateChanger TitleStateChanger { get; set; }` |
| `TitleBackgroundStateChanger` | `public DelayedStateChanger TitleBackgroundStateChanger { get; set; }` |

## Usage Example

```csharp
var widget = new ScoreboardScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)