---
title: "MultiplayerMissionServerStatusVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissionServerStatusVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionServerStatusVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionServerStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerMissionServerStatusVM.cs`

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

**Purpose:** Updates the state or data of `packet loss ratio`.

### UpdatePeerPing
`public void UpdatePeerPing(double averagePingInMilliseconds)`

**Purpose:** Updates the state or data of `peer ping`.

### UpdateServerPerformanceState
`public void UpdateServerPerformanceState(ServerPerformanceState serverPerformanceState)`

**Purpose:** Updates the state or data of `server performance state`.

### ResetStates
`public void ResetStates()`

**Purpose:** Resets `states` to its initial state.

## Usage Example

```csharp
var value = new MultiplayerMissionServerStatusVM();
value.UpdatePacketLossRatio(0);
```

## See Also

- [Complete Class Catalog](../catalog)