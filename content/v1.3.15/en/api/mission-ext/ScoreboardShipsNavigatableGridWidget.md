---
title: "ScoreboardShipsNavigatableGridWidget"
description: "Auto-generated class reference for ScoreboardShipsNavigatableGridWidget."
---
# ScoreboardShipsNavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardShipsNavigatableGridWidget : NavigatableGridWidget`
**Base:** `NavigatableGridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardShipsNavigatableGridWidget.cs`

## Overview

`ScoreboardShipsNavigatableGridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardShipsNavigatableGridWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularHorizontalAlignment` | `public HorizontalAlignment RegularHorizontalAlignment { get; set; }` |
| `OverflowHorizontalAlignment` | `public HorizontalAlignment OverflowHorizontalAlignment { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScoreboardShipsNavigatableGridWidget widget = ...;
```

## See Also

- [Area Index](../)