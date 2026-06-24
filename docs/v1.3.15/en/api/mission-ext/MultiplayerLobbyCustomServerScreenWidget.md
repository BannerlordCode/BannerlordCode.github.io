<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyCustomServerScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyCustomServerScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCustomServerScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCustomServerScreenWidget.cs`

## Overview

`MultiplayerLobbyCustomServerScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyCustomServerScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FilterSearchBarScope` | `public NavigationScopeTargeter FilterSearchBarScope { get; set; }` |
| `FilterButtonsScope` | `public NavigationScopeTargeter FilterButtonsScope { get; set; }` |
| `ServerListPanel` | `public ListPanel ServerListPanel { get; set; }` |
| `JoinServerButton` | `public ButtonWidget JoinServerButton { get; set; }` |
| `HostServerButton` | `public ButtonWidget HostServerButton { get; set; }` |
| `CreateGameButton` | `public ButtonWidget CreateGameButton { get; set; }` |
| `CloseCreatePanelButton` | `public ButtonWidget CloseCreatePanelButton { get; set; }` |
| `JoinGamePanel` | `public Widget JoinGamePanel { get; set; }` |
| `CreateGamePanel` | `public Widget CreateGamePanel { get; set; }` |
| `RefreshButton` | `public ButtonWidget RefreshButton { get; set; }` |
| `FiltersPanel` | `public Widget FiltersPanel { get; set; }` |
| `ServerCountText` | `public TextWidget ServerCountText { get; set; }` |
| `InfoText` | `public TextWidget InfoText { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `IsAnyGameSelected` | `public bool IsAnyGameSelected { get; set; }` |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled { get; set; }` |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyCustomServerScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)