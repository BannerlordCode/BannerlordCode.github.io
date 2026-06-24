<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGameNotificationsComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `warmup ending` 相关逻辑。

### GameOver
`public void GameOver(Team winnerTeam)`

**用途 / Purpose:** 处理 `game over` 相关逻辑。

### PreparationStarted
`public void PreparationStarted()`

**用途 / Purpose:** 处理 `preparation started` 相关逻辑。

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag)`

**用途 / Purpose:** 处理 `flags x removed` 相关逻辑。

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag)`

**用途 / Purpose:** 处理 `flag x remaining` 相关逻辑。

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft)`

**用途 / Purpose:** 处理 `flags will be removed in x seconds` 相关逻辑。

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)`

**用途 / Purpose:** 处理 `flag x captured by team x` 相关逻辑。

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)`

**用途 / Purpose:** 处理 `gold carried from previous round` 相关逻辑。

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer)`

**用途 / Purpose:** 处理 `player is inactive` 相关逻辑。

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer)`

**用途 / Purpose:** 处理 `formation auto follow enforced` 相关逻辑。

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason)`

**用途 / Purpose:** 处理 `poll rejected` 相关逻辑。

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer)`

**用途 / Purpose:** 处理 `player kicked` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerGameNotificationsComponent>();
```

## 参见

- [完整类目录](../catalog)