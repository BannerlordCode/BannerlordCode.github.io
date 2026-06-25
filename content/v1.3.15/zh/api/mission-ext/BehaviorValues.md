---
title: "BehaviorValues"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorValues`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorValues

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct BehaviorValues`
**领域:** mission-ext

## 概述

`BehaviorValues` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 BehaviorValues 实例，再调用它的公开方法
var value = new BehaviorValues();
value.OverrideBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
