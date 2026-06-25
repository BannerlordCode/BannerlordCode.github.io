---
title: "ScoreboardBattleResultTitleBackgroundWidget"
description: "Auto-generated class reference for ScoreboardBattleResultTitleBackgroundWidget."
---
# ScoreboardBattleResultTitleBackgroundWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleResultTitleBackgroundWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleResultTitleBackgroundWidget.cs`

## Overview

`ScoreboardBattleResultTitleBackgroundWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardBattleResultTitleBackgroundWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `VictoryWidget` | `public Widget VictoryWidget { get; set; }` |
| `DefeatWidget` | `public Widget DefeatWidget { get; set; }` |
| `RetreatWidget` | `public Widget RetreatWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScoreboardBattleResultTitleBackgroundWidget widget = ...;
```

## See Also

- [Area Index](../)