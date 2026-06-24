<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMissionServerStatusVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionServerStatusVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionServerStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerMissionServerStatusVM.cs`

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

**用途 / Purpose:** 更新 `packet loss ratio` 的状态或数据。

### UpdatePeerPing
`public void UpdatePeerPing(double averagePingInMilliseconds)`

**用途 / Purpose:** 更新 `peer ping` 的状态或数据。

### UpdateServerPerformanceState
`public void UpdateServerPerformanceState(ServerPerformanceState serverPerformanceState)`

**用途 / Purpose:** 更新 `server performance state` 的状态或数据。

### ResetStates
`public void ResetStates()`

**用途 / Purpose:** 将 `states` 重置为初始状态。

## 使用示例

```csharp
var value = new MultiplayerMissionServerStatusVM();
value.UpdatePacketLossRatio(0);
```

## 参见

- [完整类目录](../catalog)