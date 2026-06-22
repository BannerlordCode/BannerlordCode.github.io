<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleMissionAgentInteractionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/BattleMissionAgentInteractionLogic.cs`

## 概述

`BattleMissionAgentInteractionLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BattleMissionAgentInteractionLogic())` 添加；继承它可定制。

## 主要方法

### IsThereAgentAction
```csharp
public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)
```

## 使用示例

```csharp
// BattleMissionAgentInteractionLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BattleMissionAgentInteractionLogic());
```

## 参见

- [完整类目录](../catalog)