<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGameNotificationsComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## 概述

`MultiplayerGameNotificationsComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MultiplayerGameNotificationsComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationCount` | `public static int NotificationCount { get { return 18; }` |

## 主要方法

### WarmupEnding
```csharp
public void WarmupEnding()
```

### GameOver
```csharp
public void GameOver(Team winnerTeam)
```

### PreparationStarted
```csharp
public void PreparationStarted()
```

### FlagsXRemoved
```csharp
public void FlagsXRemoved(FlagCapturePoint removedFlag)
```

### FlagXRemaining
```csharp
public void FlagXRemaining(FlagCapturePoint remainingFlag)
```

### FlagsWillBeRemovedInXSeconds
```csharp
public void FlagsWillBeRemovedInXSeconds(int timeLeft)
```

### FlagXCapturedByTeamX
```csharp
public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)
```

### GoldCarriedFromPreviousRound
```csharp
public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)
```

### PlayerIsInactive
```csharp
public void PlayerIsInactive(NetworkCommunicator peer)
```

### FormationAutoFollowEnforced
```csharp
public void FormationAutoFollowEnforced(NetworkCommunicator peer)
```

### PollRejected
```csharp
public void PollRejected(MultiplayerPollRejectReason reason)
```

### PlayerKicked
```csharp
public void PlayerKicked(NetworkCommunicator kickedPeer)
```

## 使用示例

```csharp
// MultiplayerGameNotificationsComponent (Component) 的典型用法
agent.GetComponent<MultiplayerGameNotificationsComponent>();
```

## 参见

- [完整类目录](../catalog)