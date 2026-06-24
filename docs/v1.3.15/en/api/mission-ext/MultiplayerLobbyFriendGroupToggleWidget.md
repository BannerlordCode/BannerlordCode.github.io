<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyFriendGroupToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MultiplayerLobbyFriendGroupToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new MultiplayerLobbyFriendGroupToggleWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)