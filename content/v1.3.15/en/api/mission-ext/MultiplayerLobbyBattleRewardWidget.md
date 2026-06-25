---
title: "MultiplayerLobbyBattleRewardWidget"
description: "Auto-generated class reference for MultiplayerLobbyBattleRewardWidget."
---
# MultiplayerLobbyBattleRewardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBattleRewardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs`

## Overview

`MultiplayerLobbyBattleRewardWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyBattleRewardWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TextRevealAnimationDuration` | `public float TextRevealAnimationDuration { get; set; }` |
| `AnimationInitialScaleMultiplier` | `public float AnimationInitialScaleMultiplier { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Starts the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerLobbyBattleRewardWidget from the subsystem API first
MultiplayerLobbyBattleRewardWidget multiplayerLobbyBattleRewardWidget = ...;
multiplayerLobbyBattleRewardWidget.StartAnimation();
```

### StartPreAnimation
`public void StartPreAnimation()`

**Purpose:** Starts the pre animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerLobbyBattleRewardWidget from the subsystem API first
MultiplayerLobbyBattleRewardWidget multiplayerLobbyBattleRewardWidget = ...;
multiplayerLobbyBattleRewardWidget.StartPreAnimation();
```

### EndAnimation
`public void EndAnimation()`

**Purpose:** Executes the EndAnimation logic.

```csharp
// Obtain an instance of MultiplayerLobbyBattleRewardWidget from the subsystem API first
MultiplayerLobbyBattleRewardWidget multiplayerLobbyBattleRewardWidget = ...;
multiplayerLobbyBattleRewardWidget.EndAnimation();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyBattleRewardWidget widget = ...;
```

## See Also

- [Area Index](../)