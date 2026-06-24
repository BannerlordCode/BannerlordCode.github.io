
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVictoryLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVictoryLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class AgentVictoryLogic : MissionLogic
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## Overview

`AgentVictoryLogic` is a mission logic that drives agent victory cheers and reactions after a side wins a battle. Configure the winning side's behavior via `SetCheerActionGroup` and `SetCheerReactionTimerSettings`. Cleared on scene clear / agent removal.

## Mental Model

Treat `AgentVictoryLogic` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup { get { return this._cheerActionGroup; }` |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData { get { return this._cheerReactionTimerData; }` |

## Key Methods

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

## Usage Example

```csharp
// After deciding a winner, make the surviving side cheer
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

## See Also

- [Complete Class Catalog](../catalog)