<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMissionObjectComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMissionObjectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObjectComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## 概述

`UsableMissionObjectComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<UsableMissionObjectComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### IsOnTickRequired
```csharp
public virtual bool IsOnTickRequired()
```

## 使用示例

```csharp
// UsableMissionObjectComponent (Component) 的典型用法
agent.GetComponent<UsableMissionObjectComponent>();
```

## 参见

- [完整类目录](../catalog)