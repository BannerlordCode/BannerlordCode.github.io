<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyFriendGroupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendGroupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendGroupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupWidget.cs`

## Overview

`MultiplayerLobbyFriendGroupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `List` | `public ListPanel List { get; set; }` |
| `Toggle` | `public MultiplayerLobbyFriendGroupToggleWidget Toggle { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyFriendGroupWidget (Widget)
// 声明/访问一个 MultiplayerLobbyFriendGroupWidget
var widget = root.GetChild("multiplayerLobbyFriendGroupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)