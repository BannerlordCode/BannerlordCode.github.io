---
title: "MultiplayerLobbyProfileScreenWidget"
description: "Auto-generated class reference for MultiplayerLobbyProfileScreenWidget."
---
# MultiplayerLobbyProfileScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyProfileScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyProfileScreenWidget.cs`

## Overview

`MultiplayerLobbyProfileScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyProfileScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedModeIndex` | `public int SelectedModeIndex { get; set; }` |
| `FindGameButton` | `public ButtonWidget FindGameButton { get; set; }` |
| `SelectionInfo` | `public Widget SelectionInfo { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |

## Key Methods

### LobbyStateChanged
`public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerLobbyProfileScreenWidget from the subsystem API first
MultiplayerLobbyProfileScreenWidget multiplayerLobbyProfileScreenWidget = ...;
multiplayerLobbyProfileScreenWidget.LobbyStateChanged(false, false, false, false, false, false);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyProfileScreenWidget widget = ...;
```

## See Also

- [Area Index](../)