---
title: "MultiplayerMissionServerStatusVM"
description: "Auto-generated class reference for MultiplayerMissionServerStatusVM."
---
# MultiplayerMissionServerStatusVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionServerStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerMissionServerStatusVM.cs`

## Overview

`MultiplayerMissionServerStatusVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PacketLossState` | `public int PacketLossState { get; set; }` |
| `PingState` | `public int PingState { get; set; }` |
| `ServerPerformanceState` | `public int ServerPerformanceState { get; set; }` |

## Key Methods

### UpdatePacketLossRatio
`public void UpdatePacketLossRatio(float v)`

**Purpose:** Recalculates and stores the latest representation of packet loss ratio.

```csharp
// Obtain an instance of MultiplayerMissionServerStatusVM from the subsystem API first
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdatePacketLossRatio(0);
```

### UpdatePeerPing
`public void UpdatePeerPing(double averagePingInMilliseconds)`

**Purpose:** Recalculates and stores the latest representation of peer ping.

```csharp
// Obtain an instance of MultiplayerMissionServerStatusVM from the subsystem API first
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdatePeerPing(0);
```

### UpdateServerPerformanceState
`public void UpdateServerPerformanceState(ServerPerformanceState serverPerformanceState)`

**Purpose:** Recalculates and stores the latest representation of server performance state.

```csharp
// Obtain an instance of MultiplayerMissionServerStatusVM from the subsystem API first
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdateServerPerformanceState(serverPerformanceState);
```

### ResetStates
`public void ResetStates()`

**Purpose:** Returns states to its default or initial condition.

```csharp
// Obtain an instance of MultiplayerMissionServerStatusVM from the subsystem API first
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.ResetStates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdatePacketLossRatio(0);
```

## See Also

- [Area Index](../)