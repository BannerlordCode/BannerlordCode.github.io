<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyFriendGroupToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendGroupToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendGroupToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs`

## Overview

`MultiplayerLobbyFriendGroupToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CollapseIndicator` | `public Widget CollapseIndicator { get; set; }` |
| `TitleContainer` | `public Widget TitleContainer { get; set; }` |
| `PlayerCountText` | `public TextWidget PlayerCountText { get; set; }` |
| `PlayerCount` | `public int PlayerCount { get; set; }` |
| `InitialClosedState` | `public bool InitialClosedState { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyFriendGroupToggleWidget (Widget)
// 声明/访问一个 MultiplayerLobbyFriendGroupToggleWidget
var widget = root.GetChild("multiplayerLobbyFriendGroupToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)