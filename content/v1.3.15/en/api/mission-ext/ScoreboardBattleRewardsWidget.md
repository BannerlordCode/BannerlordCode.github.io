---
title: "ScoreboardBattleRewardsWidget"
description: "Auto-generated class reference for ScoreboardBattleRewardsWidget."
---
# ScoreboardBattleRewardsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleRewardsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs`

## Overview

`ScoreboardBattleRewardsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardBattleRewardsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationInterval` | `public float AnimationInterval { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Starts the `animation` flow or state machine.

```csharp
// Obtain an instance of ScoreboardBattleRewardsWidget from the subsystem API first
ScoreboardBattleRewardsWidget scoreboardBattleRewardsWidget = ...;
scoreboardBattleRewardsWidget.StartAnimation();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of ScoreboardBattleRewardsWidget from the subsystem API first
ScoreboardBattleRewardsWidget scoreboardBattleRewardsWidget = ...;
scoreboardBattleRewardsWidget.Reset();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScoreboardBattleRewardsWidget widget = ...;
```

## See Also

- [Area Index](../)