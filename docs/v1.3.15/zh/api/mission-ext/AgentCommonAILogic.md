<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentCommonAILogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentCommonAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## 概述

`AgentCommonAILogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new AgentCommonAILogic())` 添加；继承它可定制。

## 主要方法

### OnAgentCreated
```csharp
public override void OnAgentCreated(Agent agent)
```

## 使用示例

```csharp
// AgentCommonAILogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new AgentCommonAILogic());
```

## 参见

- [完整类目录](../catalog)