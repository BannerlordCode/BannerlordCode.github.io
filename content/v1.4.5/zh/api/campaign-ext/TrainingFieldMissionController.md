---
title: "TrainingFieldMissionController"
description: "TrainingFieldMissionController 的自动生成类参考。"
---
# TrainingFieldMissionController

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public class TrainingFieldMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.StoryMode/StoryMode/Storymode.Missions/TrainingFieldMissionController.cs`

## 概述

`TrainingFieldMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TrainingFieldMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |
| `HasBackground` | `public bool HasBackground { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SubTasks` | `public List<TutorialObjective> SubTasks { get; }` |
| `Score` | `public float Score { get; }` |
| `InitialCurrentObjective` | `public TextObject InitialCurrentObjective { get; }` |

## 主要方法

### SetTextVariableOfName
`public void SetTextVariableOfName(string tag, int variable)`

**用途 / Purpose:** 为 text variable of name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.SetTextVariableOfName("example", 0);
```

### GetNameString
`public string GetNameString()`

**用途 / Purpose:** 读取并返回当前对象中 name string 的结果。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.GetNameString();
```

### SetActive
`public bool SetActive(bool isActive)`

**用途 / Purpose:** 为 active 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.SetActive(false);
```

### FinishTask
`public bool FinishTask()`

**用途 / Purpose:** 结束task流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.FinishTask();
```

### FinishSubTask
`public void FinishSubTask(string subTaskName, float score)`

**用途 / Purpose:** 结束sub task流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.FinishSubTask("example", 0);
```

### SetAllSubTasksInactive
`public bool SetAllSubTasksInactive()`

**用途 / Purpose:** 为 all sub tasks inactive 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.SetAllSubTasksInactive();
```

### AddSubTask
`public void AddSubTask(TutorialObjective newSubTask)`

**用途 / Purpose:** 将 sub task 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.AddSubTask(newSubTask);
```

### RestoreScoreFromSave
`public void RestoreScoreFromSave(float score)`

**用途 / Purpose:** 调用 RestoreScoreFromSave 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.RestoreScoreFromSave(0);
```

### DelayedAction
`public readonly struct DelayedAction(Action order, float delayTime)`

**用途 / Purpose:** 调用 DelayedAction 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.DelayedAction(order, 0);
```

### Update
`public bool Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.Update();
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.AfterStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 在 rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnRenderingStarted();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnMissionTick(0);
```

### LoadCrossbowForStarting
`public void LoadCrossbowForStarting()`

**用途 / Purpose:** 从持久化存储或流中读取 crossbow for starting。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.LoadCrossbowForStarting();
```

### OnAgentShootMissile
`public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**用途 / Purpose:** 在 agent shoot missile 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnAgentShootMissile(shooterAgent, weaponIndex, position, velocity, orientation, false, 0);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingFieldMissionController 实例
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TrainingFieldMissionController>();
```

## 参见

- [本区域目录](../)