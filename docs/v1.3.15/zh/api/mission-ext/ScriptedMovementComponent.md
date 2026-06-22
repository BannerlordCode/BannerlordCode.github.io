<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScriptedMovementComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScriptedMovementComponent

**Namespace:** TaleWorlds.MountAndBlade.AI.AgentComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScriptedMovementComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs`

## 概述

`ScriptedMovementComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ScriptedMovementComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### SetTargetAgent
```csharp
public void SetTargetAgent(Agent targetAgent)
```

### OnTick
```csharp
public override void OnTick(float dt)
```

### ShouldConversationStartWithAgent
```csharp
public bool ShouldConversationStartWithAgent()
```

### Reset
```csharp
public void Reset()
```

## 使用示例

```csharp
// ScriptedMovementComponent (Component) 的典型用法
agent.GetComponent<ScriptedMovementComponent>();
```

## 参见

- [完整类目录](../catalog)