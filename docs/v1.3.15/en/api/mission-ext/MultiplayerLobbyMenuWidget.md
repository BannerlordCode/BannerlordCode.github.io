<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyMenuWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedItemIndex` | `public int SelectedItemIndex { get; set; }` |
| `MenuItemListPanel` | `public ListPanel MenuItemListPanel { get; set; }` |
| `MatchmakingButtonWidget` | `public ButtonWidget MatchmakingButtonWidget { get; set; }` |

## Key Methods

### LobbyStateChanged
```csharp
public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)
```

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyMenuWidget (Widget)
// 声明/访问一个 MultiplayerLobbyMenuWidget
var widget = root.GetChild("multiplayerLobbyMenuWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)