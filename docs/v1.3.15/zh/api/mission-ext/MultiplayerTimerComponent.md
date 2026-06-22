<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTimerComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTimerComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## 概述

`MultiplayerTimerComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MultiplayerTimerComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### StartTimerAsServer
```csharp
public void StartTimerAsServer(float duration)
```

### StartTimerAsClient
```csharp
public void StartTimerAsClient(float startTime, float duration)
```

### GetRemainingTime
```csharp
public float GetRemainingTime(bool isSynched)
```

### CheckIfTimerPassed
```csharp
public bool CheckIfTimerPassed()
```

### GetCurrentTimerStartTime
```csharp
public MissionTime GetCurrentTimerStartTime()
```

## 使用示例

```csharp
// MultiplayerTimerComponent (Component) 的典型用法
agent.GetComponent<MultiplayerTimerComponent>();
```

## 参见

- [完整类目录](../catalog)