---
title: "MultiplayerLobbyAfterBattleExperiencePanelWidget"
description: "Auto-generated class reference for MultiplayerLobbyAfterBattleExperiencePanelWidget."
---
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## Overview

`MultiplayerLobbyAfterBattleExperiencePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyAfterBattleExperiencePanelWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GainedExperience` | `public int GainedExperience { get; set; }` |
| `ExperienceFillBar` | `public MultiplayerScoreboardAnimatedFillBarWidget ExperienceFillBar { get; set; }` |
| `EarnedExperienceCounterTextWidget` | `public CounterTextBrushWidget EarnedExperienceCounterTextWidget { get; set; }` |
| `CurrentLevelTextWidget` | `public TextWidget CurrentLevelTextWidget { get; set; }` |
| `NextLevelTextWidget` | `public TextWidget NextLevelTextWidget { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Starts the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerLobbyAfterBattleExperiencePanelWidget from the subsystem API first
MultiplayerLobbyAfterBattleExperiencePanelWidget multiplayerLobbyAfterBattleExperiencePanelWidget = ...;
multiplayerLobbyAfterBattleExperiencePanelWidget.StartAnimation();
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MultiplayerLobbyAfterBattleExperiencePanelWidget from the subsystem API first
MultiplayerLobbyAfterBattleExperiencePanelWidget multiplayerLobbyAfterBattleExperiencePanelWidget = ...;
multiplayerLobbyAfterBattleExperiencePanelWidget.Reset();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyAfterBattleExperiencePanelWidget widget = ...;
```

## See Also

- [Area Index](../)