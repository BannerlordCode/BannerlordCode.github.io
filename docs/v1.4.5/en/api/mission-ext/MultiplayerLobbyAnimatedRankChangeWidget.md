<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyAnimatedRankChangeWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAnimatedRankChangeWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAnimatedRankChangeWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyAnimatedRankChangeWidget.cs`

## Overview

`MultiplayerLobbyAnimatedRankChangeWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyAnimatedRankChangeWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnimationRequested` | `public bool IsAnimationRequested { get; set; }` |
| `IsPromoted` | `public bool IsPromoted { get; set; }` |
| `OldRankName` | `public TextWidget OldRankName { get; set; }` |
| `NewRankName` | `public TextWidget NewRankName { get; set; }` |
| `OldRankSprite` | `public MultiplayerLobbyRankItemButtonWidget OldRankSprite { get; set; }` |
| `NewRankSprite` | `public MultiplayerLobbyRankItemButtonWidget NewRankSprite { get; set; }` |

## Key Methods

### MultiplayerLobbyAnimatedRankChangeWidget
`public class MultiplayerLobbyAnimatedRankChangeWidget(UIContext context)`

**Purpose:** Handles logic related to `multiplayer lobby animated rank change widget`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyAnimatedRankChangeWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)