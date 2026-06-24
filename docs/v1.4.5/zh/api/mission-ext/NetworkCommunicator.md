<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NetworkCommunicator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NetworkCommunicator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class NetworkCommunicator : ICommunicator`
**Base:** `ICommunicator`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/NetworkCommunicator.cs`

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
| `IsAdmin` | `public bool IsAdmin { get; }` |
| `ControlledAgent` | `public Agent ControlledAgent { get; set; }` |
| `IsMuted` | `public bool IsMuted { get; set; }` |
| `ForcedAvatarIndex` | `public int ForcedAvatarIndex { get; set; }` |
| `IsConnectionActive` | `public bool IsConnectionActive { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `ServerPerformanceProblemState` | `public ServerPerformanceState ServerPerformanceProblemState { get; }` |

## 主要方法

### SetRelevantGameOptions
`public void SetRelevantGameOptions(bool sendMeBloodEvents, bool sendMeSoundEvents)`

**用途 / Purpose:** 设置 `relevant game options` 的值或状态。

### GetHost
`public uint GetHost()`

**用途 / Purpose:** 获取 `host` 的当前值。

### GetReversedHost
`public uint GetReversedHost()`

**用途 / Purpose:** 获取 `reversed host` 的当前值。

### GetPort
`public ushort GetPort()`

**用途 / Purpose:** 获取 `port` 的当前值。

### UpdateConnectionInfoForReconnect
`public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**用途 / Purpose:** 更新 `connection info for reconnect` 的状态或数据。

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int newIndex)`

**用途 / Purpose:** 更新 `index for reconnecting player` 的状态或数据。

### UpdateForJoiningCustomGame
`public void UpdateForJoiningCustomGame(bool isAdmin)`

**用途 / Purpose:** 更新 `for joining custom game` 的状态或数据。

## 使用示例

```csharp
var value = new NetworkCommunicator();
value.SetRelevantGameOptions(false, false);
```

## 参见

- [完整类目录](../catalog)