---
title: "MultiplayerLobbyClassFilterFactionItemButtonWidget"
description: "Auto-generated class reference for MultiplayerLobbyClassFilterFactionItemButtonWidget."
---
# MultiplayerLobbyClassFilterFactionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyClassFilterFactionItemButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerLobbyClassFilterFactionItemButtonWidget.cs`

## Overview

`MultiplayerLobbyClassFilterFactionItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyClassFilterFactionItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseBrushName` | `public string BaseBrushName { get; set; }` |
| `Culture` | `public string Culture { get; set; }` |

## Key Methods

### MultiplayerLobbyClassFilterFactionItemButtonWidget
`public class MultiplayerLobbyClassFilterFactionItemButtonWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the MultiplayerLobbyClassFilterFactionItemButtonWidget logic.

```csharp
// Obtain an instance of MultiplayerLobbyClassFilterFactionItemButtonWidget from the subsystem API first
MultiplayerLobbyClassFilterFactionItemButtonWidget multiplayerLobbyClassFilterFactionItemButtonWidget = ...;
var result = multiplayerLobbyClassFilterFactionItemButtonWidget.MultiplayerLobbyClassFilterFactionItemButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyClassFilterFactionItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)