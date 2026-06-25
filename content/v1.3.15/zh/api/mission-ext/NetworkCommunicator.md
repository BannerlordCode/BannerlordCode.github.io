---
title: "NetworkCommunicator"
description: "NetworkCommunicator 的自动生成类参考。"
---
# NetworkCommunicator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class NetworkCommunicator : ICommunicator`
**Base:** `ICommunicator`
**File:** `TaleWorlds.MountAndBlade/NetworkCommunicator.cs`

## 概述

`NetworkCommunicator` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetRelevantGameOptions(bool sendMeBloodEvents, bool sendMeSoundEvents)`

**用途 / Purpose:** **用途 / Purpose:** 为 relevant game options 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.SetRelevantGameOptions(false, false);
```

### GetHost
`public uint GetHost()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 host 的结果。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
var result = networkCommunicator.GetHost();
```

### GetReversedHost
`public uint GetReversedHost()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 reversed host 的结果。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
var result = networkCommunicator.GetReversedHost();
```

### GetPort
`public ushort GetPort()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 port 的结果。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
var result = networkCommunicator.GetPort();
```

### UpdateConnectionInfoForReconnect
`public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 connection info for reconnect 的最新表示。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.UpdateConnectionInfoForReconnect(playerConnectionInfo, false);
```

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int newIndex)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 index for reconnecting player 的最新表示。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.UpdateIndexForReconnectingPlayer(0);
```

### UpdateForJoiningCustomGame
`public void UpdateForJoiningCustomGame(bool isAdmin)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 for joining custom game 的最新表示。

```csharp
// 先通过子系统 API 拿到 NetworkCommunicator 实例
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.UpdateForJoiningCustomGame(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NetworkCommunicator networkCommunicator = ...;
networkCommunicator.SetRelevantGameOptions(false, false);
```

## 参见

- [本区域目录](../)