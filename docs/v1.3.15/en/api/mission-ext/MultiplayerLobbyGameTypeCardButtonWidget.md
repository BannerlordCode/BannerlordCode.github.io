<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyGameTypeCardButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyGameTypeCardButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyGameTypeCardButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyGameTypeCardButtonWidget.cs`

## Overview

`MultiplayerLobbyGameTypeCardButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameTypeId` | `public string GameTypeId { get; set; }` |
| `GameTypeImageWidget` | `public BrushWidget GameTypeImageWidget { get; set; }` |
| `CheckboxWidget` | `public Widget CheckboxWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyGameTypeCardButtonWidget (Widget)
// 声明/访问一个 MultiplayerLobbyGameTypeCardButtonWidget
var widget = root.GetChild("multiplayerLobbyGameTypeCardButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)