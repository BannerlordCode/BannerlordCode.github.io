---
title: "MultiplayerScoreboardScreenWidget"
description: "Auto-generated class reference for MultiplayerScoreboardScreenWidget."
---
# MultiplayerScoreboardScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardScreenWidget.cs`

## Overview

`MultiplayerScoreboardScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `SingleColumnedWidth` | `public int SingleColumnedWidth { get; set; }` |
| `DoubleColumnedWidth` | `public int DoubleColumnedWidth { get; set; }` |
| `SidesList` | `public ListPanel SidesList { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerScoreboardScreenWidget widget = ...;
```

## See Also

- [Area Index](../)