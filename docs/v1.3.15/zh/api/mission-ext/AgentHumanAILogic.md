<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentHumanAILogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## 概述

`AgentHumanAILogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new AgentHumanAILogic())` 添加；继承它可定制。

## 主要方法

### OnAgentCreated
```csharp
public override void OnAgentCreated(Agent agent)
```

### OnAgentMount
```csharp
public override void OnAgentMount(Agent agent)
```

## 使用示例

```csharp
// AgentHumanAILogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new AgentHumanAILogic());
```

## 参见

- [完整类目录](../catalog)