<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyArmoryCosmeticItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerLobbyArmoryCosmeticItemBrushWidget.cs`

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

**Purpose:** Sets the value or state of `state`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyArmoryCosmeticItemBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)