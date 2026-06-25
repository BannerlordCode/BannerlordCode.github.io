---
title: "MultiplayerLobbyGauntletScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyGauntletScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyGauntletScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyGauntletScreen : ScreenBase, IGameStateListener, ILobbyStateHandler, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerLobbyGauntletScreen.cs`

## Overview

`MultiplayerLobbyGauntletScreen` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentPage` | `public MPLobbyVM.LobbyPage CurrentPage { get; }` |

## Key Methods

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

**Purpose:** Called when the `battle server information received` event is raised.

## Usage Example

```csharp
var value = new MultiplayerLobbyGauntletScreen();
value.OnBattleServerInformationReceived(battleServerInformation);
```

## See Also

- [Complete Class Catalog](../catalog)