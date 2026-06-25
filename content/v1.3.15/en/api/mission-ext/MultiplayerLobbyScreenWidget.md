---
title: "MultiplayerLobbyScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyScreenWidget.cs`

## Overview

`MultiplayerLobbyScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLoggedIn` | `public bool IsLoggedIn { get; set; }` |
| `IsSearchGameRequested` | `public bool IsSearchGameRequested { get; set; }` |
| `IsSearchingGame` | `public bool IsSearchingGame { get; set; }` |
| `IsCustomBattleEnabled` | `public bool IsCustomBattleEnabled { get; set; }` |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `MenuWidget` | `public MultiplayerLobbyMenuWidget MenuWidget { get; set; }` |
| `HomeScreenWidget` | `public MultiplayerLobbyHomeScreenWidget HomeScreenWidget { get; set; }` |
| `MatchmakingScreenWidget` | `public MultiplayerLobbyMatchmakingScreenWidget MatchmakingScreenWidget { get; set; }` |
| `ProfileScreenWidget` | `public MultiplayerLobbyProfileScreenWidget ProfileScreenWidget { get; set; }` |
| `FriendsPanelWidget` | `public MultiplayerLobbyFriendsPanelWidget FriendsPanelWidget { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)