<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyFriendGroupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendGroupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendGroupWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend/MultiplayerLobbyFriendGroupWidget.cs`

## Overview

`MultiplayerLobbyFriendGroupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyFriendGroupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `List` | `public ListPanel List { get; set; }` |
| `Toggle` | `public MultiplayerLobbyFriendGroupToggleWidget Toggle { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyFriendGroupWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)