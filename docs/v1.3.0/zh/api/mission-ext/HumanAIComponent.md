<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HumanAIComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

## 主要方法

### SetStandGroundPositionForTeleport
`public void SetStandGroundPositionForTeleport(Vec3 newFormationPosition)`

**用途 / Purpose:** 设置 `stand ground position for teleport` 的值或状态。

### OverrideBehaviorParams
`public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**用途 / Purpose:** 处理 `override behavior params` 相关逻辑。

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary()`

**用途 / Purpose:** 处理 `sync behavior params if necessary` 相关逻辑。

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded()`

**用途 / Purpose:** 处理 `disable pick up for agent if needed` 相关逻辑。

### OnTickParallel
`public override void OnTickParallel(float dt)`

**用途 / Purpose:** 当 `tick parallel` 事件触发时调用此方法。

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved()`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentTeleported
`public override void OnAgentTeleported()`

**用途 / Purpose:** 当 `agent teleported` 事件触发时调用此方法。

### OnComponentRemoved
`public override void OnComponentRemoved()`

**用途 / Purpose:** 当 `component removed` 事件触发时调用此方法。

### IsInImportantCombatAction
`public bool IsInImportantCombatAction()`

**用途 / Purpose:** 处理 `is in important combat action` 相关逻辑。

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject()`

**用途 / Purpose:** 获取 `currently moving game object` 的当前值。

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject()`

**用途 / Purpose:** 获取 `currently defending game object` 的当前值。

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**用途 / Purpose:** 处理 `move to usable game object` 相关逻辑。

### MoveToClear
`public void MoveToClear()`

**用途 / Purpose:** 处理 `move to clear` 相关逻辑。

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)`

**用途 / Purpose:** 处理 `start defending game object` 相关逻辑。

### StopDefendingGameObject
`public void StopDefendingGameObject()`

**用途 / Purpose:** 处理 `stop defending game object` 相关逻辑。

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject()`

**用途 / Purpose:** 处理 `is interested in any game object` 相关逻辑。

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)`

**用途 / Purpose:** 处理 `is interested in game object` 相关逻辑。

### FollowAgent
`public void FollowAgent(Agent agent)`

**用途 / Purpose:** 处理 `follow agent` 相关逻辑。

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging)`

**用途 / Purpose:** 获取 `desired speed in formation` 的当前值。

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)`

**用途 / Purpose:** 处理 `adjust speed limit` 相关逻辑。

### ParallelUpdateFormationMovement
`public unsafe void ParallelUpdateFormationMovement()`

**用途 / Purpose:** 处理 `parallel update formation movement` 相关逻辑。

### OnRetreating
`public override void OnRetreating()`

**用途 / Purpose:** 当 `retreating` 事件触发时调用此方法。

### OnDismount
`public override void OnDismount(Agent mount)`

**用途 / Purpose:** 当 `dismount` 事件触发时调用此方法。

### SetBehaviorValueSet
`public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**用途 / Purpose:** 设置 `behavior value set` 的值或状态。

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**用途 / Purpose:** 刷新 `behavior values` 的显示或缓存。

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent()`

**用途 / Purpose:** 处理 `force disable pick up for agent` 相关逻辑。

### GetValueAt
`public float GetValueAt(float x)`

**用途 / Purpose:** 获取 `value at` 的当前值。

## 使用示例

```csharp
var component = agent.GetComponent<HumanAIComponent>();
```

## 参见

- [完整类目录](../catalog)