---
title: "TournamentScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `TournamentScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new TournamentScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)