<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCustomGameClientComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCustomGameClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomGameClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCustomGameClientComponent.cs`

## 概述

`MissionCustomGameClientComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MissionCustomGameClientComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### SetServerEndingBeforeClientLoaded
```csharp
public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)
```

### QuitMission
```csharp
public override void QuitMission()
```

## 使用示例

```csharp
// MissionCustomGameClientComponent (Component) 的典型用法
agent.GetComponent<MissionCustomGameClientComponent>();
```

## 参见

- [完整类目录](../catalog)