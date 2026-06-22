<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyRankItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyRankItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyRankItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyRankItemButtonWidget.cs`

## Overview

`MultiplayerLobbyRankItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `RankID` | `public string RankID { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyRankItemButtonWidget (Widget)
// 声明/访问一个 MultiplayerLobbyRankItemButtonWidget
var widget = root.GetChild("multiplayerLobbyRankItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)