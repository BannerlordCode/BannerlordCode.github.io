<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleObserverMissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## 概述

`BattleObserverMissionLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BattleObserverMissionLogic())` 添加；继承它可定制。

## 主要方法

### SetObserver
```csharp
public void SetObserver(IBattleObserver observer)
```

### EarlyStart
```csharp
public override void EarlyStart()
```

### OnAgentBuild
```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnAgentTeamChanged
```csharp
public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)
```

### OnMissionResultReady
```csharp
public override void OnMissionResultReady(MissionResult missionResult)
```

### GetDeathToBuiltAgentRatioForSide
```csharp
public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)
```

## 使用示例

```csharp
// BattleObserverMissionLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BattleObserverMissionLogic());
```

## 参见

- [完整类目录](../catalog)