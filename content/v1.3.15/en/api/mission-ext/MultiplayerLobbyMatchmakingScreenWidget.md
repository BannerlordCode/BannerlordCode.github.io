---
title: "MultiplayerLobbyMatchmakingScreenWidget"
description: "Auto-generated class reference for MultiplayerLobbyMatchmakingScreenWidget."
---
# MultiplayerLobbyMatchmakingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMatchmakingScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingScreenWidget.cs`

## Overview

`MultiplayerLobbyMatchmakingScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyMatchmakingScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomServerParentWidget` | `public MultiplayerLobbyCustomServerScreenWidget CustomServerParentWidget { get; set; }` |
| `PremadeMatchesParentWidget` | `public MultiplayerLobbyCustomServerScreenWidget PremadeMatchesParentWidget { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `IsCustomGameFindEnabled` | `public bool IsCustomGameFindEnabled { get; set; }` |
| `SelectedModeIndex` | `public int SelectedModeIndex { get; set; }` |
| `FindGameButton` | `public ButtonWidget FindGameButton { get; set; }` |
| `SelectionInfo` | `public Widget SelectionInfo { get; set; }` |

## Key Methods

### LobbyStateChanged
`public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)`

**Purpose:** Executes the LobbyStateChanged logic.

```csharp
// Obtain an instance of MultiplayerLobbyMatchmakingScreenWidget from the subsystem API first
MultiplayerLobbyMatchmakingScreenWidget multiplayerLobbyMatchmakingScreenWidget = ...;
multiplayerLobbyMatchmakingScreenWidget.LobbyStateChanged(false, false, false, false, false, false);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyMatchmakingScreenWidget widget = ...;
```

## See Also

- [Area Index](../)