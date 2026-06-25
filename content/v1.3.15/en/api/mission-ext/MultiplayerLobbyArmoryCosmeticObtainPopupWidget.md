---
title: "MultiplayerLobbyArmoryCosmeticObtainPopupWidget"
description: "Auto-generated class reference for MultiplayerLobbyArmoryCosmeticObtainPopupWidget."
---
# MultiplayerLobbyArmoryCosmeticObtainPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticObtainPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticObtainPopupWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticObtainPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyArmoryCosmeticObtainPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObtainState` | `public int ObtainState { get; set; }` |
| `CancelButtonWidget` | `public ButtonWidget CancelButtonWidget { get; set; }` |
| `ItemPreviewListPanel` | `public ListPanel ItemPreviewListPanel { get; set; }` |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget { get; set; }` |
| `ResultSuccessfulIconWidget` | `public Widget ResultSuccessfulIconWidget { get; set; }` |
| `ResultFailedIconWidget` | `public Widget ResultFailedIconWidget { get; set; }` |
| `ResultTextWidget` | `public TextWidget ResultTextWidget { get; set; }` |
| `LoadingAnimationWidget` | `public Widget LoadingAnimationWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyArmoryCosmeticObtainPopupWidget widget = ...;
```

## See Also

- [Area Index](../)