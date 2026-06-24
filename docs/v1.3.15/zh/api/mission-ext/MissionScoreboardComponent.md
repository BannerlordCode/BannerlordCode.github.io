<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScoreboardComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## 概述

`MissionScoreboardComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionScoreboardComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsOneSided` | `public bool IsOneSided { get; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get; }` |
| `Headers` | `public MissionScoreboardComponent.ScoreboardHeader Headers { get; }` |
| `RoundWinnerList` | `public IEnumerable<BattleSideEnum> RoundWinnerList { get; }` |
| `Sides` | `public MissionScoreboardComponent.MissionScoreboardSide Sides { get; }` |
| `Spectators` | `public List<MissionPeer> Spectators { get; }` |
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get; }` |
| `Players` | `public IEnumerable<MissionPeer> Players { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### ResetBotScores
`public void ResetBotScores()`

**用途 / Purpose:** 将 `bot scores` 重置为初始状态。

### ChangeTeamScore
`public void ChangeTeamScore(Team team, int scoreChange)`

**用途 / Purpose:** 处理 `change team score` 相关逻辑。

### GetSideSafe
`public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `side safe` 的当前值。

### GetRoundScore
`public int GetRoundScore(BattleSideEnum side)`

**用途 / Purpose:** 获取 `round score` 的当前值。

### HandleServerUpdateRoundScoresMessage
`public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)`

**用途 / Purpose:** 处理 `server update round scores message` 事件或回调。

### HandleServerSetRoundMVP
`public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)`

**用途 / Purpose:** 处理 `server set round m v p` 事件或回调。

### CalculateTotalNumbers
`public void CalculateTotalNumbers()`

**用途 / Purpose:** 处理 `calculate total numbers` 相关逻辑。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### OnPlayerConnectedToServer
`public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 当 `player connected to server` 事件触发时调用此方法。

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 当 `player disconnected from server` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**用途 / Purpose:** 当 `assign player as sergeant of formation` 事件触发时调用此方法。

### BotPropertiesChanged
`public void BotPropertiesChanged(BattleSideEnum side)`

**用途 / Purpose:** 处理 `bot properties changed` 相关逻辑。

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(NetworkCommunicator player)`

**用途 / Purpose:** 处理 `player properties changed` 相关逻辑。

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(MissionPeer player)`

**用途 / Purpose:** 处理 `player properties changed` 相关逻辑。

### HandleServerEventBotDataMessage
`public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)`

**用途 / Purpose:** 处理 `server event bot data message` 事件或回调。

### OnRoundEnding
`public void OnRoundEnding()`

**用途 / Purpose:** 当 `round ending` 事件触发时调用此方法。

### OnMultiplayerGameClientBehaviorInitialized
`public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)`

**用途 / Purpose:** 当 `multiplayer game client behavior initialized` 事件触发时调用此方法。

### GetMatchWinnerSide
`public BattleSideEnum GetMatchWinnerSide()`

**用途 / Purpose:** 获取 `match winner side` 的当前值。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### GetValueOf
`public string GetValueOf(MissionPeer missionPeer)`

**用途 / Purpose:** 获取 `value of` 的当前值。

### GetValueOf
`public string GetValueOf(BotData botData)`

**用途 / Purpose:** 获取 `value of` 的当前值。

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**用途 / Purpose:** 向当前集合/状态中添加 `player`。

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**用途 / Purpose:** 从当前集合/状态中移除 `player`。

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**用途 / Purpose:** 获取 `values of` 的当前值。

### GetHeaderNames
`public string GetHeaderNames()`

**用途 / Purpose:** 获取 `header names` 的当前值。

### GetHeaderIds
`public string GetHeaderIds()`

**用途 / Purpose:** 获取 `header ids` 的当前值。

### GetScore
`public int GetScore(MissionPeer peer)`

**用途 / Purpose:** 获取 `score` 的当前值。

### UpdateHeader
`public void UpdateHeader(MissionScoreboardComponent.ScoreboardHeader headers)`

**用途 / Purpose:** 更新 `header` 的状态或数据。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**用途 / Purpose:** 处理 `calculate and get m v p score with peer` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MissionScoreboardComponent>();
```

## 参见

- [完整类目录](../catalog)