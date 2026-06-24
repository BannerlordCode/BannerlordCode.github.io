<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkCommunicator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `relevant game options`.

### GetHost
`public uint GetHost()`

**Purpose:** Gets the current value of `host`.

### GetReversedHost
`public uint GetReversedHost()`

**Purpose:** Gets the current value of `reversed host`.

### GetPort
`public ushort GetPort()`

**Purpose:** Gets the current value of `port`.

### UpdateConnectionInfoForReconnect
`public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**Purpose:** Updates the state or data of `connection info for reconnect`.

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int newIndex)`

**Purpose:** Updates the state or data of `index for reconnecting player`.

### UpdateForJoiningCustomGame
`public void UpdateForJoiningCustomGame(bool isAdmin)`

**Purpose:** Updates the state or data of `for joining custom game`.

## Usage Example

```csharp
var value = new NetworkCommunicator();
value.SetRelevantGameOptions(false, false);
```

## See Also

- [Complete Class Catalog](../catalog)