<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScoreboardSide`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionScoreboardSide

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionScoreboardSide` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void AfterStart()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### ResetBotScores

```csharp
public void ResetBotScores()
```

### ChangeTeamScore

```csharp
public void ChangeTeamScore(Team team, int scoreChange)
```

### GetSideSafe

```csharp
public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)
```

### GetRoundScore

```csharp
public int GetRoundScore(BattleSideEnum side)
```

### HandleServerUpdateRoundScoresMessage

```csharp
public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)
```

### HandleServerSetRoundMVP

```csharp
public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)
```

### CalculateTotalNumbers

```csharp
public void CalculateTotalNumbers()
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### OnPlayerConnectedToServer

```csharp
public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)
```

### OnPlayerDisconnectedFromServer

```csharp
public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### OnAgentBuild

```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### OnAssignPlayerAsSergeantOfFormation

```csharp
public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)
```

### BotPropertiesChanged

```csharp
public void BotPropertiesChanged(BattleSideEnum side)
```

### PlayerPropertiesChanged

```csharp
public void PlayerPropertiesChanged(NetworkCommunicator player)
```

### PlayerPropertiesChanged

```csharp
public void PlayerPropertiesChanged(MissionPeer player)
```

### HandleServerEventBotDataMessage

```csharp
public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)
```

### OnRoundEnding

```csharp
public void OnRoundEnding()
```

### OnMultiplayerGameClientBehaviorInitialized

```csharp
public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)