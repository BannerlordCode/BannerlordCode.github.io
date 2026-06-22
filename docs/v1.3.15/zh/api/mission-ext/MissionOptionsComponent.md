<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOptionsComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOptionsComponent

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOptionsComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs`

## 概述

`MissionOptionsComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MissionOptionsComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnAddOptionsUIHandler
```csharp
public void OnAddOptionsUIHandler()
```

## 使用示例

```csharp
// MissionOptionsComponent (Component) 的典型用法
agent.GetComponent<MissionOptionsComponent>();
```

## 参见

- [完整类目录](../catalog)