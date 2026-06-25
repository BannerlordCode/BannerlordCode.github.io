---
title: "StackArray8StandingPoint"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StackArray8StandingPoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8StandingPoint

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct StackArray8StandingPoint`
**领域:** mission-ext

## 概述

`StackArray8StandingPoint` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; set; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition { get; }` |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance { get; }` |
| `this` | `public StandingPoint this { get; }` |

## 主要方法

### OnParentMachinePhysicsStateChanged
`public void OnParentMachinePhysicsStateChanged()`

**用途 / Purpose:** 当 `parent machine physics state changed` 事件触发时调用此方法。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 获取 `user frame for agent` 的当前值。

### HasAlternative
`public virtual bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `alternative`。

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(Agent agent)`

**用途 / Purpose:** 获取 `usage score for agent` 的当前值。

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float> agentPair)`

**用途 / Purpose:** 获取 `usage score for agent` 的当前值。

### SetupOnUsingStoppedBehavior
`public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)`

**用途 / Purpose:** 设置 `up on using stopped behavior` 的值或状态。

### OnEndMission
`public override void OnEndMission()`

**用途 / Purpose:** 当 `end mission` 事件触发时调用此方法。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### SetUsableByAIOnly
`public void SetUsableByAIOnly()`

**用途 / Purpose:** 设置 `usable by a i only` 的值或状态。

### SetUsableByPlayerOnly
`public void SetUsableByPlayerOnly()`

**用途 / Purpose:** 设置 `usable by player only` 的值或状态。

### SetUsableByPlayerOrAI
`public void SetUsableByPlayerOrAI()`

**用途 / Purpose:** 设置 `usable by player or a i` 的值或状态。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 StackArray8StandingPoint 实例，再调用它的公开方法
var value = new StackArray8StandingPoint();
value.OnParentMachinePhysicsStateChanged();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
