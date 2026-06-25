---
title: "MissionScoreboardComponent"
description: "Auto-generated class reference for MissionScoreboardComponent."
---
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## Overview

`MissionScoreboardComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionScoreboardComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ScoreboardHeader
`public struct ScoreboardHeader(string id, Func<MissionPeer, string> playerGetterFunc, Func<BotData, string> botGetterFunc)`

**Purpose:** Executes the ScoreboardHeader logic.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.ScoreboardHeader("example", func<MissionPeer, "example", func<BotData, "example");
```

### GetValueOf
`public string GetValueOf(MissionPeer missionPeer)`

**Purpose:** Reads and returns the value of value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetValueOf(missionPeer);
```

### GetValueOf
`public string GetValueOf(BotData botData)`

**Purpose:** Reads and returns the value of value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetValueOf(botData);
```

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**Purpose:** Adds player to the current collection or state.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.AddPlayer(peer);
```

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**Purpose:** Removes player from the current collection or state.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.RemovePlayer(peer);
```

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**Purpose:** Reads and returns the values of value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetValuesOf(peer);
```

### GetHeaderNames
`public string GetHeaderNames()`

**Purpose:** Reads and returns the header names value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetHeaderNames();
```

### GetHeaderIds
`public string GetHeaderIds()`

**Purpose:** Reads and returns the header ids value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetHeaderIds();
```

### GetScore
`public int GetScore(MissionPeer peer)`

**Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetScore(peer);
```

### UpdateHeader
`public void UpdateHeader(ScoreboardHeader headers)`

**Purpose:** Recalculates and stores the latest representation of header.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.UpdateHeader(headers);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.Clear();
```

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**Purpose:** Calculates the current value or result of and get m v p score with peer.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.CalculateAndGetMVPScoreWithPeer();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnRemoveBehavior();
```

### ResetBotScores
`public void ResetBotScores()`

**Purpose:** Returns bot scores to its default or initial condition.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.ResetBotScores();
```

### ChangeTeamScore
`public void ChangeTeamScore(Team team, int scoreChange)`

**Purpose:** Executes the ChangeTeamScore logic.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.ChangeTeamScore(team, 0);
```

### GetSideSafe
`public MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)`

**Purpose:** Reads and returns the side safe value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetSideSafe(battleSide);
```

### GetRoundScore
`public int GetRoundScore(BattleSideEnum side)`

**Purpose:** Reads and returns the round score value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetRoundScore(side);
```

### HandleServerUpdateRoundScoresMessage
`public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)`

**Purpose:** Executes the response logic associated with server update round scores message.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.HandleServerUpdateRoundScoresMessage(baseMessage);
```

### HandleServerSetRoundMVP
`public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)`

**Purpose:** Executes the response logic associated with server set round m v p.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.HandleServerSetRoundMVP(baseMessage);
```

### CalculateTotalNumbers
`public void CalculateTotalNumbers()`

**Purpose:** Calculates the current value or result of total numbers.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.CalculateTotalNumbers();
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnClearScene();
```

### OnPlayerConnectedToServer
`public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the player connected to server event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnPlayerConnectedToServer(networkPeer);
```

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the player disconnected from server event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnAgentBuild(agent, banner);
```

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**Purpose:** Invoked when the assign player as sergeant of formation event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnAssignPlayerAsSergeantOfFormation(agent);
```

### BotPropertiesChanged
`public void BotPropertiesChanged(BattleSideEnum side)`

**Purpose:** Executes the BotPropertiesChanged logic.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.BotPropertiesChanged(side);
```

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(NetworkCommunicator player)`

**Purpose:** Executes the PlayerPropertiesChanged logic.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.PlayerPropertiesChanged(player);
```

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(MissionPeer player)`

**Purpose:** Executes the PlayerPropertiesChanged logic.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.PlayerPropertiesChanged(player);
```

### HandleServerEventBotDataMessage
`public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)`

**Purpose:** Executes the response logic associated with server event bot data message.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.HandleServerEventBotDataMessage(baseMessage);
```

### OnRoundEnding
`public void OnRoundEnding()`

**Purpose:** Invoked when the round ending event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnRoundEnding();
```

### OnMultiplayerGameClientBehaviorInitialized
`public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)`

**Purpose:** Invoked when the multiplayer game client behavior initialized event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnMultiplayerGameClientBehaviorInitialized(onBotsControlledChanged);
```

### GetMatchWinnerSide
`public BattleSideEnum GetMatchWinnerSide()`

**Purpose:** Reads and returns the match winner side value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
var result = missionScoreboardComponent.GetMatchWinnerSide();
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of MissionScoreboardComponent from the subsystem API first
MissionScoreboardComponent missionScoreboardComponent = ...;
missionScoreboardComponent.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionScoreboardComponent>();
```

## See Also

- [Area Index](../)