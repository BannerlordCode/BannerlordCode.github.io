---
title: "MultiplayerScoreboardSideWidget"
description: "Auto-generated class reference for MultiplayerScoreboardSideWidget."
---
# MultiplayerScoreboardSideWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardSideWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs`

## Overview

`MultiplayerScoreboardSideWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardSideWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerScoreboardSideWidget widget = ...;
```

## See Also

- [Area Index](../)