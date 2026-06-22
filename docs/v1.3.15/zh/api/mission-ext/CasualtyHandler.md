<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CasualtyHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## 概述

`CasualtyHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnAgentFleeing
```csharp
public override void OnAgentFleeing(Agent affectedAgent)
```

### GetCasualtyCountOfFormation
```csharp
public int GetCasualtyCountOfFormation(Formation formation)
```

### GetCasualtyPowerLossOfFormation
```csharp
public float GetCasualtyPowerLossOfFormation(Formation formation)
```

## 使用示例

```csharp
// CasualtyHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new CasualtyHandler());
```

## 参见

- [完整类目录](../catalog)