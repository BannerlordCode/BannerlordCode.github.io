<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyAnnouncementIconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAnnouncementIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAnnouncementIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Home/MultiplayerLobbyAnnouncementIconBrushWidget.cs`

## Overview

`MultiplayerLobbyAnnouncementIconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyAnnouncementIconBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnnouncementType` | `public string AnnouncementType { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyAnnouncementIconBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)