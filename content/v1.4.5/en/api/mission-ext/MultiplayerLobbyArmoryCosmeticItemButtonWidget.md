---
title: "MultiplayerLobbyArmoryCosmeticItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyArmoryCosmeticItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`

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
var widget = new MultiplayerLobbyArmoryCosmeticItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)