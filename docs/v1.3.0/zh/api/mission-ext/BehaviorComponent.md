<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BehaviorComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## 概述

`BehaviorComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `BehaviorComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `BehaviorCoherence` | `public float BehaviorCoherence { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty { get; }` |
| `CurrentOrder` | `public MovementOrder CurrentOrder { get; set; }` |
| `PreserveExpireTime` | `public float PreserveExpireTime { get; set; }` |
| `WeightFactor` | `public float WeightFactor { get; set; }` |

## 主要方法

### OnBehaviorCanceled
`public virtual void OnBehaviorCanceled()`

**用途 / Purpose:** 当 `behavior canceled` 事件触发时调用此方法。

### OnLostAIControl
`public virtual void OnLostAIControl()`

**用途 / Purpose:** 当 `lost a i control` 事件触发时调用此方法。

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### RemindSergeantPlayer
`public void RemindSergeantPlayer()`

**用途 / Purpose:** 处理 `remind sergeant player` 相关逻辑。

### TickOccasionally
`public virtual void TickOccasionally()`

**用途 / Purpose:** 处理 `tick occasionally` 相关逻辑。

### GetAIWeight
`public float GetAIWeight()`

**用途 / Purpose:** 获取 `a i weight` 的当前值。

### ResetBehavior
`public virtual void ResetBehavior()`

**用途 / Purpose:** 将 `behavior` 重置为初始状态。

### GetBehaviorString
`public virtual TextObject GetBehaviorString()`

**用途 / Purpose:** 获取 `behavior string` 的当前值。

### OnValidBehaviorSideChanged
`public virtual void OnValidBehaviorSideChanged()`

**用途 / Purpose:** 当 `valid behavior side changed` 事件触发时调用此方法。

### PrecalculateMovementOrder
`public void PrecalculateMovementOrder()`

**用途 / Purpose:** 处理 `precalculate movement order` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomBehaviorComponent();
```

## 参见

- [完整类目录](../catalog)