<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentMoraleInteractionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`

## 概述

`AgentMoraleInteractionLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new AgentMoraleInteractionLogic())` 添加；继承它可定制。

## 主要方法

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnAgentFleeing
```csharp
public override void OnAgentFleeing(Agent affectedAgent)
```

## 使用示例

```csharp
// AgentMoraleInteractionLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new AgentMoraleInteractionLogic());
```

## 参见

- [完整类目录](../catalog)