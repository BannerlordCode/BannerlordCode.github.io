---
title: "MultiplayerLobbyFriendGroupWidget"
description: "Auto-generated class reference for MultiplayerLobbyFriendGroupWidget."
---
# MultiplayerLobbyFriendGroupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendGroupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupWidget.cs`

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
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyFriendGroupWidget widget = ...;
```

## See Also

- [Area Index](../)