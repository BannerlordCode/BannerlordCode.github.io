<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ResetAnimationOnStopUsageComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResetAnimationOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## 概述

`ResetAnimationOnStopUsageComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ResetAnimationOnStopUsageComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### UpdateSuccessfulResetAction
```csharp
public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)
```

## 使用示例

```csharp
// ResetAnimationOnStopUsageComponent (Component) 的典型用法
agent.GetComponent<ResetAnimationOnStopUsageComponent>();
```

## 参见

- [完整类目录](../catalog)