<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NetworkCommunicator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkCommunicator

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`NetworkCommunicator` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)