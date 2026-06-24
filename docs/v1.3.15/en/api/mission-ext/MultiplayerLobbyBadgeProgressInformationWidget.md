<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyBadgeProgressInformationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyBadgeProgressInformationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBadgeProgressInformationWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBadgeProgressInformationWidget.cs`

## Overview

`MultiplayerLobbyBadgeProgressInformationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyBadgeProgressInformationWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CenterBadgeSize` | `public float CenterBadgeSize { get; set; }` |
| `OuterBadgeBaseSize` | `public float OuterBadgeBaseSize { get; set; }` |
| `SizeDecayFromCenterPerElement` | `public float SizeDecayFromCenterPerElement { get; set; }` |
| `ShownBadgeCount` | `public int ShownBadgeCount { get; set; }` |
| `ActiveBadgesList` | `public ListPanel ActiveBadgesList { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyBadgeProgressInformationWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)