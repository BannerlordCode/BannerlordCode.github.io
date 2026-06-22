<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyArmoryCosmeticObtainPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticObtainPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticObtainPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticObtainPopupWidget.cs`

## Overview

`MultiplayerLobbyArmoryCosmeticObtainPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of MultiplayerLobbyArmoryCosmeticObtainPopupWidget (Widget)
// 声明/访问一个 MultiplayerLobbyArmoryCosmeticObtainPopupWidget
var widget = root.GetChild("multiplayerLobbyArmoryCosmeticObtainPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)