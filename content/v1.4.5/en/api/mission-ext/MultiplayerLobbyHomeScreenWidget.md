---
title: "MultiplayerLobbyHomeScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyHomeScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyHomeScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyHomeScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyHomeScreenWidget.cs`

## Overview

`MultiplayerLobbyHomeScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyHomeScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FindGameButton` | `public ButtonWidget FindGameButton { get; set; }` |
| `SelectionInfo` | `public Widget SelectionInfo { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |

## Key Methods

### LobbyStateChanged
`public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)`

**Purpose:** Handles logic related to `lobby state changed`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyHomeScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)