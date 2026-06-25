---
title: "CombatMissionWithDialogueController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatMissionWithDialogueController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CombatMissionWithDialogueController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CombatMissionWithDialogueController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CombatMissionWithDialogueController.cs`

## 概述

`CombatMissionWithDialogueController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `CombatMissionWithDialogueController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### StartFight
`public void StartFight(bool hasPlayerChangedSide)`

**用途 / Purpose:** 处理 `start fight` 相关逻辑。

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly)`

**用途 / Purpose:** 处理 `start conversation` 相关逻辑。

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `start spawner` 相关逻辑。

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `stop spawner` 相关逻辑。

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side spawn enabled` 相关逻辑。

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**用途 / Purpose:** 获取 `reinforcement interval` 的当前值。

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `all troops for side` 的当前值。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 获取 `spawn horses` 的当前值。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<CombatMissionWithDialogueController>();
```

## 参见

- [完整类目录](../catalog)