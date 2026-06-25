---
title: "CombatMissionWithDialogueController"
description: "CombatMissionWithDialogueController 的自动生成类参考。"
---
# CombatMissionWithDialogueController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CombatMissionWithDialogueController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CombatMissionWithDialogueController.cs`

## 概述

`CombatMissionWithDialogueController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `CombatMissionWithDialogueController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 「agent hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### StartFight
`public void StartFight(bool hasPlayerChangedSide)`

**用途 / Purpose:** 启动「fight」流程或状态机。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StartFight(false);
```

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly)`

**用途 / Purpose:** 启动「conversation」流程或状态机。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StartConversation(agent, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side spawn enabled」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement interval」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetReinforcementInterval();
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side depleted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.IsSideDepleted(side);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「all troops for side」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn horses」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatMissionWithDialogueController 实例
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetSpawnHorses(side);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<CombatMissionWithDialogueController>();
```

## 参见

- [本区域目录](../)