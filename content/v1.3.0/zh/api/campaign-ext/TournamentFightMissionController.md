---
title: "TournamentFightMissionController"
description: "TournamentFightMissionController 的自动生成类参考。"
---
# TournamentFightMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs`

## 概述

`TournamentFightMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TournamentFightMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.AfterStart();
```

### PrepareForMatch
`public void PrepareForMatch()`

**用途 / Purpose:** 为即将执行的for match操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.PrepareForMatch();
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** 启动match流程或状态机。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** 调用 SkipMatch 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** 判断当前对象是否处于 match ended 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.IsMatchEnded();
```

### OnMatchResultsReady
`public void OnMatchResultsReady()`

**用途 / Purpose:** 在 match results ready 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnMatchResultsReady();
```

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 在 match ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnMatchEnded();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 agent rout 的前置条件。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.CanAgentRout(agent);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### CheckIfIsThereAnyEnemies
`public bool CheckIfIsThereAnyEnemies()`

**用途 / Purpose:** 检查if is there any enemies在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.CheckIfIsThereAnyEnemies();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentFightMissionController 实例
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.OnEndMissionRequest(canPlayerLeave);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentFightMissionController>();
```

## 参见

- [本区域目录](../)