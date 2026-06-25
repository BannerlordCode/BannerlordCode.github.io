---
title: "MultiplayerLobbyAfterBattlePopupWidget"
description: "Auto-generated class reference for MultiplayerLobbyAfterBattlePopupWidget."
---
# MultiplayerLobbyAfterBattlePopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattlePopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs`

## Overview

`MultiplayerLobbyAfterBattlePopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyAfterBattlePopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `RewardRevealDuration` | `public float RewardRevealDuration { get; set; }` |
| `ExperiencePanel` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget ExperiencePanel { get; set; }` |
| `ClickToContinueTextWidget` | `public TextWidget ClickToContinueTextWidget { get; set; }` |
| `RewardsListPanel` | `public ListPanel RewardsListPanel { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** **Purpose:** Starts the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerLobbyAfterBattlePopupWidget from the subsystem API first
MultiplayerLobbyAfterBattlePopupWidget multiplayerLobbyAfterBattlePopupWidget = ...;
multiplayerLobbyAfterBattlePopupWidget.StartAnimation();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyAfterBattlePopupWidget widget = ...;
```

## See Also

- [Area Index](../)