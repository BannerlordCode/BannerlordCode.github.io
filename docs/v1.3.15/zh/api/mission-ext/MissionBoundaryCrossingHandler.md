<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionBoundaryCrossingHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionBoundaryCrossingHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryCrossingHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionBoundaryCrossingHandler.cs`

## 概述

`MissionBoundaryCrossingHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// MissionBoundaryCrossingHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new MissionBoundaryCrossingHandler());
```

## 参见

- [完整类目录](../catalog)