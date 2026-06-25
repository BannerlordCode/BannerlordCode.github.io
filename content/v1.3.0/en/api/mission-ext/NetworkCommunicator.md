---
title: "NetworkCommunicator"
description: "Auto-generated class reference for NetworkCommunicator."
---
# NetworkCommunicator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class NetworkCommunicator : ICommunicator`
**Base:** `ICommunicator`
**File:** `TaleWorlds.MountAndBlade/NetworkCommunicator.cs`

## Overview

`NetworkCommunicator` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer { get; }` |
| `PlayerConnectionInfo` | `public PlayerConnectionInfo PlayerConnectionInfo { get; }` |
| `QuitFromMission` | `public bool QuitFromMission { get; }` |
| `SessionKey` | `public int SessionKey { get; }` |
| `JustReconnecting` | `public bool JustReconnecting { get; }` |
| `AveragePingInMilliseconds` | `public double AveragePingInMilliseconds { get; }` |
| `AverageLossPercent` | `public double AverageLossPercent { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |
| `Index` | `public int Index { get; }` |
| `UserName` | `public string UserName { get; set; }` |
| `ControlledAgent` | `public Agent ControlledAgent { get; set; }` |
| `IsMuted` | `public bool IsMuted { get; set; }` |
| `ForcedAvatarIndex` | `public int ForcedAvatarIndex { get; set; }` |
| `IsNetworkActive` | `public bool IsNetworkActive { get; }` |
| `IsConnectionActive` | `public bool IsConnectionActive { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `IsServerPeer` | `public bool IsServerPeer { get; }` |
| `ServerPerformanceProblemState` | `public ServerPerformanceState ServerPerformanceProblemState { get; }` |

## Key Methods

### SetRelevantGameOptions
`public void SetRelevantGameOptions(bool sendMeBloodEvents, bool sendMeSoundEvents)`

**Purpose:** **Purpose:** Assigns a new value to relevant game options and updates the object's internal state.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.SetRelevantGameOptions(false, false);
```

### GetHost
`public uint GetHost()`

**Purpose:** **Purpose:** Reads and returns the host value held by the this instance.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
var result = networkCommunicator.GetHost();
```

### GetReversedHost
`public uint GetReversedHost()`

**Purpose:** **Purpose:** Reads and returns the reversed host value held by the this instance.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
var result = networkCommunicator.GetReversedHost();
```

### GetPort
`public ushort GetPort()`

**Purpose:** **Purpose:** Reads and returns the port value held by the this instance.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
var result = networkCommunicator.GetPort();
```

### UpdateConnectionInfoForReconnect
`public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of connection info for reconnect.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.UpdateConnectionInfoForReconnect(playerConnectionInfo, false);
```

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int newIndex)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of index for reconnecting player.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.UpdateIndexForReconnectingPlayer(0);
```

### UpdateForJoiningCustomGame
`public void UpdateForJoiningCustomGame(bool isAdmin)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of for joining custom game.

```csharp
// Obtain an instance of NetworkCommunicator from the subsystem API first
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.UpdateForJoiningCustomGame(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.SetRelevantGameOptions(false, false);
```

## See Also

- [Area Index](../)