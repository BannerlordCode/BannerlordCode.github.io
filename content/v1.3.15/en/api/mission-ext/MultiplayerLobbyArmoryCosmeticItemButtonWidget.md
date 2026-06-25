---
title: "MultiplayerLobbyArmoryCosmeticItemButtonWidget"
description: "Auto-generated class reference for MultiplayerLobbyArmoryCosmeticItemButtonWidget."
---
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyArmoryCosmeticItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public int ItemType { get; set; }` |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `SelectableStateAnimationDuration` | `public float SelectableStateAnimationDuration { get; set; }` |
| `SelectableStateAlpha` | `public float SelectableStateAlpha { get; set; }` |
| `NonSelectableStateAlpha` | `public float NonSelectableStateAlpha { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyArmoryCosmeticItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)