<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVictoryLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVictoryLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class AgentVictoryLogic : MissionLogic
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## 概述

`AgentVictoryLogic` 是一个任务逻辑，在某一方胜利后驱动 agent 的欢呼与反应。通过 `SetCheerActionGroup`、`SetCheerReactionTimerSettings` 配置胜方行为。场景清理/agent 移除时重置。

## 主要属性

| Name | Signature |
|------|-----------|
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup { get { return this._cheerActionGroup; }` |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData { get { return this._cheerReactionTimerData; }` |

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### SetCheerActionGroup
```csharp
public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)
```

### SetCheerReactionTimerSettings
```csharp
public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### SetTimersOfVictoryReactionsOnBattleEnd
```csharp
public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)
```

### SetTimersOfVictoryReactionsOnRetreat
```csharp
public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)
```

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
```csharp
public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)
```

### OrderReceived
```csharp
public void OrderReceived()
```

## 使用示例

```csharp
// 决出胜方后，让幸存方欢呼
var victoryLogic = Mission.Current.GetMissionBehavior<AgentVictoryLogic>();
if (victoryLogic != null)
{
    victoryLogic.SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum.Cheer);
    victoryLogic.SetCheerReactionTimerSettings(new AgentVictoryLogic.CheerReactionTimeSettings
    {
        MinReactionTime = 1.5f,
        MaxReactionTime = 4f
    });
}
```

## 参见

- [完整类目录](../catalog)