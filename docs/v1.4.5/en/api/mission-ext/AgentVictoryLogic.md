<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVictoryLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentVictoryLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVictoryLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## Overview

`AgentVictoryLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentVictoryLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotOrderRecently` | `public bool GotOrderRecently { get; }` |
| `IsCheeringPaused` | `public bool IsCheeringPaused { get; }` |

## Key Methods

### CheerReactionTimeSettings
`public struct CheerReactionTimeSettings(float minDuration, float maxDuration)`

**Purpose:** Handles logic related to `cheer reaction time settings`.

### OrderReceived
`public void OrderReceived()`

**Purpose:** Handles logic related to `order received`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### SetCheerActionGroup
`public void SetCheerActionGroup(CheerActionGroupEnum cheerActionGroup = CheerActionGroupEnum.None)`

**Purpose:** Sets the value or state of `cheer action group`.

### SetCheerReactionTimerSettings
`public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)`

**Purpose:** Sets the value or state of `cheer reaction timer settings`.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### SetTimersOfVictoryReactionsOnBattleEnd
`public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)`

**Purpose:** Sets the value or state of `timers of victory reactions on battle end`.

### SetTimersOfVictoryReactionsOnRetreat
`public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)`

**Purpose:** Sets the value or state of `timers of victory reactions on retreat`.

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
`public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)`

**Purpose:** Sets the value or state of `timers of victory reactions on tournament victory for agent`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new AgentVictoryLogic());
```

## See Also

- [Complete Class Catalog](../catalog)