<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RemoveExtraWeaponOnStopUsageComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RemoveExtraWeaponOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RemoveExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/RemoveExtraWeaponOnStopUsageComponent.cs`

## 概述

`RemoveExtraWeaponOnStopUsageComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<RemoveExtraWeaponOnStopUsageComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 使用示例

```csharp
// RemoveExtraWeaponOnStopUsageComponent (Component) 的典型用法
agent.GetComponent<RemoveExtraWeaponOnStopUsageComponent>();
```

## 参见

- [完整类目录](../catalog)