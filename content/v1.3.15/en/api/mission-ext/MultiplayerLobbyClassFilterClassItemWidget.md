---
title: "MultiplayerLobbyClassFilterClassItemWidget"
description: "Auto-generated class reference for MultiplayerLobbyClassFilterClassItemWidget."
---
# MultiplayerLobbyClassFilterClassItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyClassFilterClassItemWidget : ToggleStateButtonWidget`
**Base:** `ToggleStateButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyClassFilterClassItemWidget.cs`

## Overview

`MultiplayerLobbyClassFilterClassItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyClassFilterClassItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public string TroopType { get; set; }` |
| `CultureColor` | `public Color CultureColor { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |
| `FactionColorWidget` | `public Widget FactionColorWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyClassFilterClassItemWidget widget = ...;
```

## See Also

- [Area Index](../)