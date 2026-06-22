<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommonAIComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CommonAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommonAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`

## 概述

`CommonAIComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<CommonAIComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `InitialMorale` | `public float InitialMorale { get { return this._initialMorale; }` |
| `RecoveryMorale` | `public float RecoveryMorale { get { return this._recoveryMorale; }` |
| `Morale` | `public float Morale { get { return this._morale; }` |

## 主要方法

### Initialize
```csharp
public override void Initialize()
```

### OnTickParallel
```csharp
public override void OnTickParallel(float dt)
```

### OnTick
```csharp
public override void OnTick(float dt)
```

### Panic
```csharp
public void Panic()
```

### Retreat
```csharp
public void Retreat(bool useCachingSystem = false)
```

### StopRetreating
```csharp
public void StopRetreating()
```

### CanPanic
```csharp
public bool CanPanic()
```

### OnHit
```csharp
public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved()
```

### OnComponentRemoved
```csharp
public override void OnComponentRemoved()
```

## 使用示例

```csharp
// CommonAIComponent (Component) 的典型用法
agent.GetComponent<CommonAIComponent>();
```

## 参见

- [完整类目录](../catalog)