---
title: "HumanAIComponent"
description: "HumanAIComponent 的自动生成类参考。"
---
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HumanAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## 概述

`HumanAIComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `HumanAIComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FollowedAgent` | `public Agent FollowedAgent { get; }` |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get; }` |
| `IsDefending` | `public bool IsDefending { get; }` |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame { get; }` |

## 主要方法

### OverrideBehaviorParams
`public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OverrideBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary()`

**用途 / Purpose:** 将「behavior params if necessary」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SyncBehaviorParamsIfNecessary();
```

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.DisablePickUpForAgentIfNeeded();
```

### OnTickParallel
`public override void OnTickParallel(float dt)`

**用途 / Purpose:** 在 「tick parallel」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnTickParallel(0);
```

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnAgentRemoved();
```

### OnComponentRemoved
`public override void OnComponentRemoved()`

**用途 / Purpose:** 在 「component removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnComponentRemoved();
```

### IsInImportantCombatAction
`public bool IsInImportantCombatAction()`

**用途 / Purpose:** 判断当前对象是否处于 「in important combat action」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInImportantCombatAction();
```

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject()`

**用途 / Purpose:** 读取并返回当前对象中 「currently moving game object」 的结果。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetCurrentlyMovingGameObject();
```

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject()`

**用途 / Purpose:** 读取并返回当前对象中 「currently defending game object」 的结果。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetCurrentlyDefendingGameObject();
```

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**用途 / Purpose:** 移动「to usable game object」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.MoveToUsableGameObject(usedObject, detachment, agent.AIScriptedFrameFlags.NoAttack);
```

### MoveToClear
`public void MoveToClear()`

**用途 / Purpose:** 移动「to clear」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.MoveToClear();
```

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)`

**用途 / Purpose:** 启动「defending game object」流程或状态机。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.StartDefendingGameObject(usedObject, detachment);
```

### StopDefendingGameObject
`public void StopDefendingGameObject()`

**用途 / Purpose:** 停止「defending game object」流程或状态机。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.StopDefendingGameObject();
```

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject()`

**用途 / Purpose:** 判断当前对象是否处于 「interested in any game object」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInterestedInAnyGameObject();
```

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)`

**用途 / Purpose:** 判断当前对象是否处于 「interested in game object」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInterestedInGameObject(usableMissionObject);
```

### FollowAgent
`public void FollowAgent(Agent agent)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.FollowAgent(agent);
```

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging)`

**用途 / Purpose:** 读取并返回当前对象中 「desired speed in formation」 的结果。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetDesiredSpeedInFormation(false);
```

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.AdjustSpeedLimit(agent, 0, false);
```

### ParallelUpdateFormationMovement
`public unsafe void ParallelUpdateFormationMovement()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.ParallelUpdateFormationMovement();
```

### OnRetreating
`public override void OnRetreating()`

**用途 / Purpose:** 在 「retreating」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnRetreating();
```

### OnDismount
`public override void OnDismount(Agent mount)`

**用途 / Purpose:** 在 「dismount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnDismount(mount);
```

### SetBehaviorValueSet
`public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**用途 / Purpose:** 为 「behavior value set」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SetBehaviorValueSet(behaviorValueSet);
```

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**用途 / Purpose:** 使 「behavior values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.RefreshBehaviorValues(movementOrder, arrangementOrder);
```

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.ForceDisablePickUpForAgent();
```

### SetScriptedPositionAndDirectionTimed
`public void SetScriptedPositionAndDirectionTimed(Vec2 position, float directionAsRotationInRadians, float duration)`

**用途 / Purpose:** 为 「scripted position and direction timed」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SetScriptedPositionAndDirectionTimed(position, 0, 0);
```

### DisableTimedScriptedMovement
`public void DisableTimedScriptedMovement()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
humanAIComponent.DisableTimedScriptedMovement();
```

### GetValueAt
`public float GetValueAt(float x)`

**用途 / Purpose:** 读取并返回当前对象中 「value at」 的结果。

```csharp
// 先通过子系统 API 拿到 HumanAIComponent 实例
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetValueAt(0);
```

## 使用示例

```csharp
var component = agent.GetComponent<HumanAIComponent>();
```

## 参见

- [本区域目录](../)