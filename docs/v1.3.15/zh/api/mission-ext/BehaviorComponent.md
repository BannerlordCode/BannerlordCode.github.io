<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BehaviorComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## 概述

`BehaviorComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<BehaviorComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `BehaviorCoherence` | `public float BehaviorCoherence { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty { get { if (this._navmeshlessTargetPositionPenalty == 1f) { return 1f; }` |
| `CurrentOrder` | `public MovementOrder CurrentOrder { get { return this._currentOrder; }` |
| `PreserveExpireTime` | `public float PreserveExpireTime { get; set; }` |
| `WeightFactor` | `public float WeightFactor { get; set; }` |

## 主要方法

### OnBehaviorCanceled
```csharp
public virtual void OnBehaviorCanceled()
```

### OnLostAIControl
```csharp
public virtual void OnLostAIControl()
```

### OnAgentRemoved
```csharp
public virtual void OnAgentRemoved(Agent agent)
```

### RemindSergeantPlayer
```csharp
public void RemindSergeantPlayer()
```

### TickOccasionally
```csharp
public virtual void TickOccasionally()
```

### GetAIWeight
```csharp
public float GetAIWeight()
```

### ResetBehavior
```csharp
public virtual void ResetBehavior()
```

### GetBehaviorString
```csharp
public virtual TextObject GetBehaviorString()
```

### OnValidBehaviorSideChanged
```csharp
public virtual void OnValidBehaviorSideChanged()
```

### PrecalculateMovementOrder
```csharp
public void PrecalculateMovementOrder()
```

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

### OnDeploymentFinished
```csharp
public virtual void OnDeploymentFinished()
```

## 使用示例

```csharp
// BehaviorComponent (Component) 的典型用法
agent.GetComponent<BehaviorComponent>();
```

## 参见

- [完整类目录](../catalog)