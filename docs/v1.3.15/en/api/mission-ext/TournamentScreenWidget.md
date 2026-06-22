<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs`

## Overview

`TournamentScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOver` | `public bool IsOver { get; set; }` |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess { get; set; }` |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger { get; set; }` |
| `WinnerTextContainer1` | `public DelayedStateChanger WinnerTextContainer1 { get; set; }` |
| `CharacterContainer` | `public DelayedStateChanger CharacterContainer { get; set; }` |
| `RewardsContainer` | `public DelayedStateChanger RewardsContainer { get; set; }` |
| `ScoreboardBattleRewardsWidget` | `public ScoreboardBattleRewardsWidget ScoreboardBattleRewardsWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of TournamentScreenWidget (Widget)
// 声明/访问一个 TournamentScreenWidget
var widget = root.GetChild("tournamentScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)