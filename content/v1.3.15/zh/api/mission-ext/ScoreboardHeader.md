---
title: "ScoreboardHeader"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardHeader`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardHeader

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct ScoreboardHeader`
**领域:** mission-ext

## 概述

`ScoreboardHeader` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ScoreboardHeader 实例，再调用它的公开方法
var value = new ScoreboardHeader();
value.AfterStart();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
