---
title: "MultiplayerMissionServerStatusVM"
description: "MultiplayerMissionServerStatusVM 的自动生成类参考。"
---
# MultiplayerMissionServerStatusVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionServerStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerMissionServerStatusVM.cs`

## 概述

`MultiplayerMissionServerStatusVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PacketLossState` | `public int PacketLossState { get; set; }` |
| `PingState` | `public int PingState { get; set; }` |
| `ServerPerformanceState` | `public int ServerPerformanceState { get; set; }` |

## 主要方法

### UpdatePacketLossRatio
`public void UpdatePacketLossRatio(float v)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 packet loss ratio 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionServerStatusVM 实例
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdatePacketLossRatio(0);
```

### UpdatePeerPing
`public void UpdatePeerPing(double averagePingInMilliseconds)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 peer ping 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionServerStatusVM 实例
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdatePeerPing(0);
```

### UpdateServerPerformanceState
`public void UpdateServerPerformanceState(ServerPerformanceState serverPerformanceState)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 server performance state 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionServerStatusVM 实例
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdateServerPerformanceState(serverPerformanceState);
```

### ResetStates
`public void ResetStates()`

**用途 / Purpose:** **用途 / Purpose:** 将 states 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionServerStatusVM 实例
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.ResetStates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerMissionServerStatusVM multiplayerMissionServerStatusVM = ...;
multiplayerMissionServerStatusVM.UpdatePacketLossRatio(0);
```

## 参见

- [本区域目录](../)