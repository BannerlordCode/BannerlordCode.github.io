---
title: "MPLobbyRecentGamePlayerItemVM"
description: "Auto-generated class reference for MPLobbyRecentGamePlayerItemVM."
---
# MPLobbyRecentGamePlayerItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGamePlayerItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGamePlayerItemVM.cs`

## Overview

`MPLobbyRecentGamePlayerItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KillCount` | `public int KillCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |

## Key Methods

### MPLobbyRecentGamePlayerItemVM
`public unsafe MPLobbyRecentGamePlayerItemVM(PlayerId playerId, MatchHistoryData matchOfThePlayer, Action<MPLobbyRecentGamePlayerItemVM> onActivatePlayerActions)`

**Purpose:** Executes the MPLobbyRecentGamePlayerItemVM logic.

```csharp
// Obtain an instance of MPLobbyRecentGamePlayerItemVM from the subsystem API first
MPLobbyRecentGamePlayerItemVM mPLobbyRecentGamePlayerItemVM = ...;
var result = mPLobbyRecentGamePlayerItemVM.MPLobbyRecentGamePlayerItemVM(playerId, matchOfThePlayer, onActivatePlayerActions);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyRecentGamePlayerItemVM from the subsystem API first
MPLobbyRecentGamePlayerItemVM mPLobbyRecentGamePlayerItemVM = ...;
mPLobbyRecentGamePlayerItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyRecentGamePlayerItemVM mPLobbyRecentGamePlayerItemVM = ...;
mPLobbyRecentGamePlayerItemVM.MPLobbyRecentGamePlayerItemVM(playerId, matchOfThePlayer, onActivatePlayerActions);
```

## See Also

- [Area Index](../)