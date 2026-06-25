---
title: "TournamentJoustingMissionController"
description: "TournamentJoustingMissionController 的自动生成类参考。"
---
# TournamentJoustingMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs`

## 概述

`TournamentJoustingMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TournamentJoustingMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.AfterStart();
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** **用途 / Purpose:** 启动match流程或状态机。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SkipMatch 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 match ended 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
var result = tournamentJoustingMissionController.IsMatchEnded();
```

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 match ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnMatchEnded();
```

### IsAgentInTheTrack
`public bool IsAgentInTheTrack(Agent agent, bool inCurrentTrack = true)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 agent in the track 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
var result = tournamentJoustingMissionController.IsAgentInTheTrack(agent, false);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnJoustingAgentStateChanged
`public void OnJoustingAgentStateChanged(Agent agent, JoustingAgentController.JoustingAgentState state)`

**用途 / Purpose:** **用途 / Purpose:** 在 jousting agent state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnJoustingAgentStateChanged(agent, state);
```

### JoustingEventDelegate
`public delegate void JoustingEventDelegate(Agent affectedAgent, Agent affectorAgent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 JoustingEventDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.JoustingEventDelegate(affectedAgent, affectorAgent);
```

### JoustingAgentStateChangedEventDelegate
`public delegate void JoustingAgentStateChangedEventDelegate(Agent agent, JoustingAgentController.JoustingAgentState state)`

**用途 / Purpose:** **用途 / Purpose:** 调用 JoustingAgentStateChangedEventDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentJoustingMissionController 实例
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.JoustingAgentStateChangedEventDelegate(agent, state);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentJoustingMissionController>();
```

## 参见

- [本区域目录](../)