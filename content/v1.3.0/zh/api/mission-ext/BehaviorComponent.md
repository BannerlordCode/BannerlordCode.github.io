---
title: "BehaviorComponent"
description: "BehaviorComponent 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 在 behavior canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnBehaviorCanceled();
```

### OnLostAIControl
`public virtual void OnLostAIControl()`

**用途 / Purpose:** **用途 / Purpose:** 在 lost a i control 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnLostAIControl();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnAgentRemoved(agent);
```

### RemindSergeantPlayer
`public void RemindSergeantPlayer()`

**用途 / Purpose:** **用途 / Purpose:** 调用 RemindSergeantPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.RemindSergeantPlayer();
```

### TickOccasionally
`public virtual void TickOccasionally()`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进occasionally的状态。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.TickOccasionally();
```

### GetAIWeight
`public float GetAIWeight()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 a i weight 的结果。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetAIWeight();
```

### ResetBehavior
`public virtual void ResetBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 将 behavior 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.ResetBehavior();
```

### GetBehaviorString
`public virtual TextObject GetBehaviorString()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 behavior string 的结果。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetBehaviorString();
```

### OnValidBehaviorSideChanged
`public virtual void OnValidBehaviorSideChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 valid behavior side changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnValidBehaviorSideChanged();
```

### PrecalculateMovementOrder
`public void PrecalculateMovementOrder()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PrecalculateMovementOrder 对应的操作。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.PrecalculateMovementOrder();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetHashCode();
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BehaviorComponent 实例
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnDeploymentFinished();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BehaviorComponent instance = ...;
```

## 参见

- [本区域目录](../)