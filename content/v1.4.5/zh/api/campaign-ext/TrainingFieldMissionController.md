---
title: "TrainingFieldMissionController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TrainingFieldMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingFieldMissionController

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public class TrainingFieldMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/Storymode.Missions/TrainingFieldMissionController.cs`

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

**用途 / Purpose:** 设置 `text variable of name` 的值或状态。

### GetNameString
`public string GetNameString()`

**用途 / Purpose:** 获取 `name string` 的当前值。

### SetActive
`public bool SetActive(bool isActive)`

**用途 / Purpose:** 设置 `active` 的值或状态。

### FinishTask
`public bool FinishTask()`

**用途 / Purpose:** 处理 `finish task` 相关逻辑。

### FinishSubTask
`public void FinishSubTask(string subTaskName, float score)`

**用途 / Purpose:** 处理 `finish sub task` 相关逻辑。

### SetAllSubTasksInactive
`public bool SetAllSubTasksInactive()`

**用途 / Purpose:** 设置 `all sub tasks inactive` 的值或状态。

### AddSubTask
`public void AddSubTask(TutorialObjective newSubTask)`

**用途 / Purpose:** 向当前集合/状态中添加 `sub task`。

### RestoreScoreFromSave
`public void RestoreScoreFromSave(float score)`

**用途 / Purpose:** 处理 `restore score from save` 相关逻辑。

### DelayedAction
`public readonly struct DelayedAction(Action order, float delayTime)`

**用途 / Purpose:** 处理 `delayed action` 相关逻辑。

### Update
`public bool Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### LoadCrossbowForStarting
`public void LoadCrossbowForStarting()`

**用途 / Purpose:** 加载 `crossbow for starting` 数据。

### OnAgentShootMissile
`public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**用途 / Purpose:** 当 `agent shoot missile` 事件触发时调用此方法。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TrainingFieldMissionController>();
```

## 参见

- [完整类目录](../catalog)