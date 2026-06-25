---
title: "MissionScoreboardComponent"
description: "MissionScoreboardComponent 的自动生成类参考。"
---
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## 概述

`MissionScoreboardComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionScoreboardComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ScoreboardHeader
`public struct ScoreboardHeader(string id, Func<MissionPeer, string> playerGetterFunc, Func<BotData, string> botGetterFunc)`

**用途 / Purpose:** 调用 ScoreboardHeader 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.ScoreboardHeader("example", func<MissionPeer, "example", func<BotData, "example");
```

### GetValueOf
`public string GetValueOf(MissionPeer missionPeer)`

**用途 / Purpose:** 读取并返回当前对象中 value of 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetValueOf(missionPeer);
```

### GetValueOf
`public string GetValueOf(BotData botData)`

**用途 / Purpose:** 读取并返回当前对象中 value of 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetValueOf(botData);
```

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**用途 / Purpose:** 将 player 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.AddPlayer(peer);
```

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**用途 / Purpose:** 从当前容器或状态中移除 player。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.RemovePlayer(peer);
```

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**用途 / Purpose:** 读取并返回当前对象中 values of 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetValuesOf(peer);
```

### GetHeaderNames
`public string GetHeaderNames()`

**用途 / Purpose:** 读取并返回当前对象中 header names 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetHeaderNames();
```

### GetHeaderIds
`public string GetHeaderIds()`

**用途 / Purpose:** 读取并返回当前对象中 header ids 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetHeaderIds();
```

### GetScore
`public int GetScore(MissionPeer peer)`

**用途 / Purpose:** 读取并返回当前对象中 score 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetScore(peer);
```

### UpdateHeader
`public void UpdateHeader(ScoreboardHeader headers)`

**用途 / Purpose:** 重新计算并更新 header 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.UpdateHeader(headers);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.Clear();
```

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**用途 / Purpose:** 计算and get m v p score with peer的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.CalculateAndGetMVPScoreWithPeer();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnRemoveBehavior();
```

### ResetBotScores
`public void ResetBotScores()`

**用途 / Purpose:** 将 bot scores 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.ResetBotScores();
```

### ChangeTeamScore
`public void ChangeTeamScore(Team team, int scoreChange)`

**用途 / Purpose:** 调用 ChangeTeamScore 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.ChangeTeamScore(team, 0);
```

### GetSideSafe
`public MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 side safe 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetSideSafe(battleSide);
```

### GetRoundScore
`public int GetRoundScore(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 round score 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetRoundScore(side);
```

### HandleServerUpdateRoundScoresMessage
`public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)`

**用途 / Purpose:** 响应 server update round scores message 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.HandleServerUpdateRoundScoresMessage(baseMessage);
```

### HandleServerSetRoundMVP
`public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)`

**用途 / Purpose:** 响应 server set round m v p 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.HandleServerSetRoundMVP(baseMessage);
```

### CalculateTotalNumbers
`public void CalculateTotalNumbers()`

**用途 / Purpose:** 计算total numbers的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.CalculateTotalNumbers();
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnClearScene();
```

### OnPlayerConnectedToServer
`public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 在 player connected to server 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnPlayerConnectedToServer(networkPeer);
```

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 在 player disconnected from server 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnAgentBuild(agent, banner);
```

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**用途 / Purpose:** 在 assign player as sergeant of formation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnAssignPlayerAsSergeantOfFormation(agent);
```

### BotPropertiesChanged
`public void BotPropertiesChanged(BattleSideEnum side)`

**用途 / Purpose:** 调用 BotPropertiesChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.BotPropertiesChanged(side);
```

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(NetworkCommunicator player)`

**用途 / Purpose:** 调用 PlayerPropertiesChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.PlayerPropertiesChanged(player);
```

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(MissionPeer player)`

**用途 / Purpose:** 调用 PlayerPropertiesChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.PlayerPropertiesChanged(player);
```

### HandleServerEventBotDataMessage
`public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)`

**用途 / Purpose:** 响应 server event bot data message 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.HandleServerEventBotDataMessage(baseMessage);
```

### OnRoundEnding
`public void OnRoundEnding()`

**用途 / Purpose:** 在 round ending 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnRoundEnding();
```

### OnMultiplayerGameClientBehaviorInitialized
`public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)`

**用途 / Purpose:** 在 multiplayer game client behavior initialized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnMultiplayerGameClientBehaviorInitialized(onBotsControlledChanged);
```

### GetMatchWinnerSide
`public BattleSideEnum GetMatchWinnerSide()`

**用途 / Purpose:** 读取并返回当前对象中 match winner side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetMatchWinnerSide();
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardComponent 实例
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionScoreboardComponent>();
```

## 参见

- [本区域目录](../)