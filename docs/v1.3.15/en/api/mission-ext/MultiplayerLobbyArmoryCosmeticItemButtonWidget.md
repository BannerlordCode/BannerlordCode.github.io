<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyArmoryCosmeticItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of MultiplayerLobbyArmoryCosmeticItemButtonWidget (Widget)
// 声明/访问一个 MultiplayerLobbyArmoryCosmeticItemButtonWidget
var widget = root.GetChild("multiplayerLobbyArmoryCosmeticItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)