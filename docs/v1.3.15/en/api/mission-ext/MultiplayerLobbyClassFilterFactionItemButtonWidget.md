<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyClassFilterFactionItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyClassFilterFactionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyClassFilterFactionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyClassFilterFactionItemButtonWidget.cs`

## Overview

`MultiplayerLobbyClassFilterFactionItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyClassFilterFactionItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseBrushName` | `public string BaseBrushName { get; set; }` |
| `Culture` | `public string Culture { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyClassFilterFactionItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)