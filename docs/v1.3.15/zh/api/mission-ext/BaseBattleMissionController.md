<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BaseBattleMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`

## 概述

`BaseBattleMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### GetTeamAI
```csharp
public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

### OnEndMissionRequest
```csharp
public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

## 使用示例

```csharp
// BaseBattleMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<BaseBattleMissionController>();
```

## 参见

- [完整类目录](../catalog)