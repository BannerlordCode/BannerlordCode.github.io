---
title: "MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget"
description: "Auto-generated class reference for MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget."
---
# MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget.cs`

## Overview

`MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConnectionQualityLevel` | `public int ConnectionQualityLevel { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget widget = ...;
```

## See Also

- [Area Index](../)