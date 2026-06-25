---
title: "MultiplayerLobbyFriendsPanelWidget"
description: "Auto-generated class reference for MultiplayerLobbyFriendsPanelWidget."
---
# MultiplayerLobbyFriendsPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendsPanelWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend/MultiplayerLobbyFriendsPanelWidget.cs`

## Overview

`MultiplayerLobbyFriendsPanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyFriendsPanelWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsForcedOpen` | `public bool IsForcedOpen { get; set; }` |
| `FriendsListPanel` | `public Widget FriendsListPanel { get; set; }` |
| `ShowListToggle` | `public ToggleStateButtonWidget ShowListToggle { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyFriendsPanelWidget widget = ...;
```

## See Also

- [Area Index](../)