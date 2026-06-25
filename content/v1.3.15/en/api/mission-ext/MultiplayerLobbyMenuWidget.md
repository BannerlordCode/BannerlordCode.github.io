---
title: "MultiplayerLobbyMenuWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyMenuWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMenuWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyMenuWidget.cs`

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

**Purpose:** Handles logic related to `lobby state changed`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyMenuWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)