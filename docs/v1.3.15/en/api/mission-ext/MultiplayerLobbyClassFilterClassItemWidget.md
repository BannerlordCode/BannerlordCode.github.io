<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyClassFilterClassItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyClassFilterClassItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyClassFilterClassItemWidget : ToggleStateButtonWidget`
**Base:** `ToggleStateButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyClassFilterClassItemWidget.cs`

## Overview

`MultiplayerLobbyClassFilterClassItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of MultiplayerLobbyClassFilterClassItemWidget (Widget)
// 声明/访问一个 MultiplayerLobbyClassFilterClassItemWidget
var widget = root.GetChild("multiplayerLobbyClassFilterClassItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)