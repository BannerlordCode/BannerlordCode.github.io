---
title: "MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Rarity` | `public int Rarity { get; set; }` |

## Key Methods

### MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget
`public class MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `multiplayer lobby armory cosmetic tier visual brush widget`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyArmoryCosmeticTierVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)