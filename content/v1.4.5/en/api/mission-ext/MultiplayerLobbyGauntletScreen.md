---
title: "MultiplayerLobbyGauntletScreen"
description: "Auto-generated class reference for MultiplayerLobbyGauntletScreen."
---
# MultiplayerLobbyGauntletScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyGauntletScreen : ScreenBase, IGameStateListener, ILobbyStateHandler, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerLobbyGauntletScreen.cs`

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

**Purpose:** Invoked when the battle server information received event is raised.

```csharp
// Obtain an instance of MultiplayerLobbyGauntletScreen from the subsystem API first
MultiplayerLobbyGauntletScreen multiplayerLobbyGauntletScreen = ...;
multiplayerLobbyGauntletScreen.OnBattleServerInformationReceived(battleServerInformation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerLobbyGauntletScreen multiplayerLobbyGauntletScreen = ...;
multiplayerLobbyGauntletScreen.OnBattleServerInformationReceived(battleServerInformation);
```

## See Also

- [Area Index](../)