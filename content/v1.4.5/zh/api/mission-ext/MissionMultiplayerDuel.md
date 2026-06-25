---
title: "MissionMultiplayerDuel"
description: "MissionMultiplayerDuel 的自动生成类参考。"
---
# MissionMultiplayerDuel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs`

## 概述

`MissionMultiplayerDuel` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DuelingAgent` | `public Agent DuelingAgent { get; }` |
| `MountAgent` | `public Agent MountAgent { get; }` |
| `KillCountInDuel` | `public int KillCountInDuel { get; }` |
| `DuelAreaIndex` | `public int DuelAreaIndex { get; }` |
| `DuelAreaTroopType` | `public TroopType DuelAreaTroopType { get; }` |
| `Timer` | `public MissionTime Timer { get; }` |
| `DuelingTeam` | `public Team DuelingTeam { get; }` |
| `Started` | `public bool Started { get; }` |
| `ChallengeEnded` | `public bool ChallengeEnded { get; }` |
| `ChallengeWinnerPeer` | `public MissionPeer ChallengeWinnerPeer { get; }` |
| `ChallengeLoserPeer` | `public MissionPeer ChallengeLoserPeer { get; }` |

## 主要方法

### OnDuelPreparation
`public void OnDuelPreparation(Team duelingTeam)`

**用途 / Purpose:** 在 「duel preparation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelPreparation(duelingTeam);
```

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 在 「duel ended」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEnded();
```

### IncreaseWinCount
`public void IncreaseWinCount()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.IncreaseWinCount();
```

### SetAgents
`public void SetAgents(Agent agent)`

**用途 / Purpose:** 为 「agents」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.SetAgents(agent);
```

### OnDuelPreparation
`public void OnDuelPreparation(Team duelTeam)`

**用途 / Purpose:** 在 「duel preparation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelPreparation(duelTeam);
```

### OnDuelStarted
`public void OnDuelStarted()`

**用途 / Purpose:** 在 「duel started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelStarted();
```

### OnDuelEnding
`public void OnDuelEnding()`

**用途 / Purpose:** 在 「duel ending」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEnding();
```

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 在 「duel ended」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEnded();
```

### OnAgentBuild
`public void OnAgentBuild(Agent agent)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnAgentBuild(agent);
```

### IsDuelStillValid
`public bool IsDuelStillValid(bool doNotCheckAgent = false)`

**用途 / Purpose:** 判断当前对象是否处于 「duel still valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.IsDuelStillValid(false);
```

### IsPeerInThisDuel
`public bool IsPeerInThisDuel(MissionPeer peer)`

**用途 / Purpose:** 判断当前对象是否处于 「peer in this duel」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.IsPeerInThisDuel(peer);
```

### UpdateDuelAreaIndex
`public void UpdateDuelAreaIndex(KeyValuePair<int, TroopType> duelAreaPair)`

**用途 / Purpose:** 重新计算并更新 「duel area index」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.UpdateDuelAreaIndex(keyValuePair<int, duelAreaPair);
```

### OnDuelEndedDelegate
`public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType)`

**用途 / Purpose:** 在 「duel ended delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEndedDelegate(winnerPeer, troopType);
```

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 读取并返回当前对象中 「mission type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.GetMissionType();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.AfterStart();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnBehaviorInitialize();
```

### CheckIfPlayerCanDespawn
`public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**用途 / Purpose:** 检查「if player can despawn」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.CheckIfPlayerCanDespawn(missionPeer);
```

### OnPlayerDespawn
`public void OnPlayerDespawn(MissionPeer missionPeer)`

**用途 / Purpose:** 在 「player despawn」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnPlayerDespawn(missionPeer);
```

### DuelRequestReceived
`public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.DuelRequestReceived(requesterPeer, requesteePeer);
```

### DuelRequestAccepted
`public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.DuelRequestAccepted(requesterAgent, requesteeAgent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### GetDuelAreaIndexIfDuelTeam
`public int GetDuelAreaIndexIfDuelTeam(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 「duel area index if duel team」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.GetDuelAreaIndexIfDuelTeam(team);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerDuel 实例
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnAgentBuild(agent, banner);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelPreparation(duelingTeam);
```

## 参见

- [本区域目录](../)