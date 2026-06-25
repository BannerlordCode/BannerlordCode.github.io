---
title: "MultiplayerLobbyMenuWidget"
description: "Auto-generated class reference for MultiplayerLobbyMenuWidget."
---
# MultiplayerLobbyMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMenuWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyMenuWidget.cs`

## Overview

`MultiplayerLobbyMenuWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyMenuWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedItemIndex` | `public int SelectedItemIndex { get; set; }` |
| `MenuItemListPanel` | `public ListPanel MenuItemListPanel { get; set; }` |
| `MatchmakingButtonWidget` | `public ButtonWidget MatchmakingButtonWidget { get; set; }` |

## Key Methods

### LobbyStateChanged
`public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)`

**Purpose:** Executes the LobbyStateChanged logic.

```csharp
// Obtain an instance of MultiplayerLobbyMenuWidget from the subsystem API first
MultiplayerLobbyMenuWidget multiplayerLobbyMenuWidget = ...;
multiplayerLobbyMenuWidget.LobbyStateChanged(false, false, false, false, false, false);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyMenuWidget widget = ...;
```

## See Also

- [Area Index](../)