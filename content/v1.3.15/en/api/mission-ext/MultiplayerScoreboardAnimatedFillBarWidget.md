---
title: "MultiplayerScoreboardAnimatedFillBarWidget"
description: "Auto-generated class reference for MultiplayerScoreboardAnimatedFillBarWidget."
---
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## Overview

`MultiplayerScoreboardAnimatedFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardAnimatedFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsStartRequested` | `public bool IsStartRequested { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TimesOfFullFill` | `public int TimesOfFullFill { get; set; }` |
| `ChangeOverlayWidget` | `public Widget ChangeOverlayWidget { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Starts the `animation` flow or state machine.

```csharp
// Obtain an instance of MultiplayerScoreboardAnimatedFillBarWidget from the subsystem API first
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.StartAnimation();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of MultiplayerScoreboardAnimatedFillBarWidget from the subsystem API first
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.Reset();
```

### FullFillFinishedHandler
`public delegate void FullFillFinishedHandler()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerScoreboardAnimatedFillBarWidget from the subsystem API first
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.FullFillFinishedHandler();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerScoreboardAnimatedFillBarWidget widget = ...;
```

## See Also

- [Area Index](../)