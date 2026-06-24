<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyClassFilterClassItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyClassFilterClassItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyClassFilterClassItemWidget : ToggleStateButtonWidget`
**Base:** `ToggleStateButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerLobbyClassFilterClassItemWidget.cs`

## Overview

`MultiplayerLobbyClassFilterClassItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyClassFilterClassItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public string TroopType { get; set; }` |
| `CultureColor` | `public Color CultureColor { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |
| `FactionColorWidget` | `public Widget FactionColorWidget { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyClassFilterClassItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)