<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VictoryComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VictoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VictoryComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/VictoryComponent.cs`

## 概述

`VictoryComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<VictoryComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### CheckTimer
```csharp
public bool CheckTimer()
```

### ChangeTimerDuration
```csharp
public void ChangeTimerDuration(float min, float max)
```

## 使用示例

```csharp
// VictoryComponent (Component) 的典型用法
agent.GetComponent<VictoryComponent>();
```

## 参见

- [完整类目录](../catalog)