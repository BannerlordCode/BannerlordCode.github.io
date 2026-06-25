---
title: "MultiplayerScoreboardAnimatedFillBarWidget"
description: "Auto-generated class reference for MultiplayerScoreboardAnimatedFillBarWidget."
---
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## Overview

`MultiplayerScoreboardAnimatedFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardAnimatedFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsStartRequested` | `public bool IsStartRequested { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationFillSpeed` | `public float AnimationFillSpeed { get; set; }` |
| `TimesOfFullFill` | `public int TimesOfFullFill { get; set; }` |

## Key Methods

### FullFillFinishedHandler
`public delegate void FullFillFinishedHandler(bool isPositive)`

**Purpose:** Executes the FullFillFinishedHandler logic.

```csharp
// Obtain an instance of MultiplayerScoreboardAnimatedFillBarWidget from the subsystem API first
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.FullFillFinishedHandler(false);
```

### StartAnimation
`public void StartAnimation(float animationDelay = 0f)`

**Purpose:** Starts the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerScoreboardAnimatedFillBarWidget from the subsystem API first
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.StartAnimation(0);
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MultiplayerScoreboardAnimatedFillBarWidget from the subsystem API first
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.Reset();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerScoreboardAnimatedFillBarWidget widget = ...;
```

## See Also

- [Area Index](../)