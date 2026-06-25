---
title: "MultiplayerLobbyArmoryCosmeticItemBrushWidget"
description: "Auto-generated class reference for MultiplayerLobbyArmoryCosmeticItemBrushWidget."
---
# MultiplayerLobbyArmoryCosmeticItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemBrushWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyArmoryCosmeticItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Assigns a new value to `state` and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerLobbyArmoryCosmeticItemBrushWidget from the subsystem API first
MultiplayerLobbyArmoryCosmeticItemBrushWidget multiplayerLobbyArmoryCosmeticItemBrushWidget = ...;
multiplayerLobbyArmoryCosmeticItemBrushWidget.SetState("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyArmoryCosmeticItemBrushWidget widget = ...;
```

## See Also

- [Area Index](../)