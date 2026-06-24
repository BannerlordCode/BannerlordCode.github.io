<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerDuel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerDuel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs`

## 概述

`MissionMultiplayerDuel` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `RequesterPeer` | `public MissionPeer RequesterPeer { get; }` |
| `RequesteePeer` | `public MissionPeer RequesteePeer { get; }` |
| `DuelAreaIndex` | `public int DuelAreaIndex { get; }` |
| `DuelAreaTroopType` | `public TroopType DuelAreaTroopType { get; }` |
| `Timer` | `public MissionTime Timer { get; }` |
| `DuelingTeam` | `public Team DuelingTeam { get; }` |
| `Started` | `public bool Started { get; }` |
| `ChallengeEnded` | `public bool ChallengeEnded { get; }` |
| `ChallengeWinnerPeer` | `public MissionPeer ChallengeWinnerPeer { get; }` |
| `ChallengeLoserPeer` | `public MissionPeer ChallengeLoserPeer { get; }` |
| `DuelingAgent` | `public Agent DuelingAgent { get; }` |
| `MountAgent` | `public Agent MountAgent { get; }` |
| `KillCountInDuel` | `public int KillCountInDuel { get; }` |

## 主要方法

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 获取 `mission type` 的当前值。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### CheckIfPlayerCanDespawn
`public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `check if player can despawn` 相关逻辑。

### OnPlayerDespawn
`public void OnPlayerDespawn(MissionPeer missionPeer)`

**用途 / Purpose:** 当 `player despawn` 事件触发时调用此方法。

### DuelRequestReceived
`public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**用途 / Purpose:** 处理 `duel request received` 相关逻辑。

### DuelRequestAccepted
`public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)`

**用途 / Purpose:** 处理 `duel request accepted` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### GetDuelAreaIndexIfDuelTeam
`public int GetDuelAreaIndexIfDuelTeam(Team team)`

**用途 / Purpose:** 获取 `duel area index if duel team` 的当前值。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnDuelPreparation
`public void OnDuelPreparation(Team duelTeam)`

**用途 / Purpose:** 当 `duel preparation` 事件触发时调用此方法。

### OnDuelStarted
`public void OnDuelStarted()`

**用途 / Purpose:** 当 `duel started` 事件触发时调用此方法。

### OnDuelEnding
`public void OnDuelEnding()`

**用途 / Purpose:** 当 `duel ending` 事件触发时调用此方法。

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 当 `duel ended` 事件触发时调用此方法。

### OnAgentBuild
`public void OnAgentBuild(Agent agent)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### IsDuelStillValid
`public bool IsDuelStillValid(bool doNotCheckAgent = false)`

**用途 / Purpose:** 处理 `is duel still valid` 相关逻辑。

### IsPeerInThisDuel
`public bool IsPeerInThisDuel(MissionPeer peer)`

**用途 / Purpose:** 处理 `is peer in this duel` 相关逻辑。

### UpdateDuelAreaIndex
`public void UpdateDuelAreaIndex(KeyValuePair<int, TroopType> duelAreaPair)`

**用途 / Purpose:** 更新 `duel area index` 的状态或数据。

### OnDuelPreparation
`public void OnDuelPreparation(Team duelingTeam)`

**用途 / Purpose:** 当 `duel preparation` 事件触发时调用此方法。

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 当 `duel ended` 事件触发时调用此方法。

### IncreaseWinCount
`public void IncreaseWinCount()`

**用途 / Purpose:** 处理 `increase win count` 相关逻辑。

### SetAgents
`public void SetAgents(Agent agent)`

**用途 / Purpose:** 设置 `agents` 的值或状态。

### OnDuelEndedDelegate
`public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType)`

**用途 / Purpose:** 当 `duel ended delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionMultiplayerDuel();
value.GetMissionType();
```

## 参见

- [完整类目录](../catalog)