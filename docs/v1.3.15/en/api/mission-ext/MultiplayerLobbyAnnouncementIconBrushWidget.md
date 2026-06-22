<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyAnnouncementIconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAnnouncementIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAnnouncementIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Home/MultiplayerLobbyAnnouncementIconBrushWidget.cs`

## Overview

`MultiplayerLobbyAnnouncementIconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnnouncementType` | `public string AnnouncementType { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyAnnouncementIconBrushWidget (Widget)
// 声明/访问一个 MultiplayerLobbyAnnouncementIconBrushWidget
var widget = root.GetChild("multiplayerLobbyAnnouncementIconBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)