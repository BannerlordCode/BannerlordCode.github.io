---
title: "MultiplayerGameNotificationsComponent"
description: "MultiplayerGameNotificationsComponent 的自动生成类参考。"
---
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## 概述

`MultiplayerGameNotificationsComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerGameNotificationsComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationCount` | `public static int NotificationCount { get; }` |

## 主要方法

### WarmupEnding
`public void WarmupEnding()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.WarmupEnding();
```

### GameOver
`public void GameOver(Team winnerTeam)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.GameOver(winnerTeam);
```

### PreparationStarted
`public void PreparationStarted()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PreparationStarted();
```

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagsXRemoved(removedFlag);
```

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagXRemaining(remainingFlag);
```

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagsWillBeRemovedInXSeconds(0);
```

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagXCapturedByTeamX(flag, capturingTeam);
```

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.GoldCarriedFromPreviousRound(0, syncToPeer);
```

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PlayerIsInactive(peer);
```

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer)`

**用途 / Purpose:** 将「ion auto follow enforced」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FormationAutoFollowEnforced(peer);
```

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PollRejected(reason);
```

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameNotificationsComponent 实例
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PlayerKicked(kickedPeer);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerGameNotificationsComponent>();
```

## 参见

- [本区域目录](../)