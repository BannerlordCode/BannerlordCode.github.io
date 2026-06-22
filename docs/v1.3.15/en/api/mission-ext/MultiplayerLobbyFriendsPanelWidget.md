<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyFriendsPanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendsPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendsPanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendsPanelWidget.cs`

## Overview

`MultiplayerLobbyFriendsPanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsForcedOpen` | `public bool IsForcedOpen { get; set; }` |
| `FriendsListPanel` | `public Widget FriendsListPanel { get; set; }` |
| `ShowListToggle` | `public ToggleStateButtonWidget ShowListToggle { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyFriendsPanelWidget (Widget)
// 声明/访问一个 MultiplayerLobbyFriendsPanelWidget
var widget = root.GetChild("multiplayerLobbyFriendsPanelWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)