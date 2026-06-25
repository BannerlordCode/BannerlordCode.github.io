---
title: "TournamentArcheryMissionController"
description: "TournamentArcheryMissionController 的自动生成类参考。"
---
# TournamentArcheryMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentArcheryMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentArcheryMissionController.cs`

## 概述

`TournamentArcheryMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TournamentArcheryMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.AfterStart();
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** 启动match流程或状态机。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** 调用 SkipMatch 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** 判断当前对象是否处于 match ended 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
var result = tournamentArcheryMissionController.IsMatchEnded();
```

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 在 match ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnMatchEnded();
```

### OnTargetDestroyed
`public void OnTargetDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon attackerWeapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**用途 / Purpose:** 在 target destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnTargetDestroyed(destroyedComponent, destroyerAgent, attackerWeapon, attackerScriptComponentBehavior, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentArcheryMissionController 实例
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentArcheryMissionController>();
```

## 参见

- [本区域目录](../)