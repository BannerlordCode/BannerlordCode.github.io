<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyArmoryCosmeticItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemBrushWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |

## Key Methods

### SetState
```csharp
public override void SetState(string stateName)
```

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyArmoryCosmeticItemBrushWidget (Widget)
// 声明/访问一个 MultiplayerLobbyArmoryCosmeticItemBrushWidget
var widget = root.GetChild("multiplayerLobbyArmoryCosmeticItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)