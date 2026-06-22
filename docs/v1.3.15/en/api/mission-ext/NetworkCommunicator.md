<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkCommunicator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkCommunicator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `NetworkCommunicator` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void SetRelevantGameOptions(bool sendMeBloodEvents, bool sendMeSoundEvents)
```

### GetHost

```csharp
public uint GetHost()
```

### GetReversedHost

```csharp
public uint GetReversedHost()
```

### GetPort

```csharp
public ushort GetPort()
```

### UpdateConnectionInfoForReconnect

```csharp
public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)
```

### UpdateIndexForReconnectingPlayer

```csharp
public void UpdateIndexForReconnectingPlayer(int newIndex)
```

### UpdateForJoiningCustomGame

```csharp
public void UpdateForJoiningCustomGame(bool isAdmin)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)