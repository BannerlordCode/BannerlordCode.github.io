---
title: "TutorialObjective"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialObjective`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialObjective

**命名空间:** StoryMode.Missions
**模块:** StoryMode.Missions
**类型:** `public class TutorialObjective`
**领域:** campaign-ext

## 概述

`TutorialObjective` 位于 `StoryMode.Missions`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `StoryMode.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
// 先从游戏状态中拿到一个 TutorialObjective 实例，再调用它的公开方法
var value = new TutorialObjective();
value.SetTextVariableOfName("example", 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
