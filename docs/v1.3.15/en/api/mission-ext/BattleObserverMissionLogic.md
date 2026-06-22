<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleObserverMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## Overview

`BattleObserverMissionLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BattleObserverMissionLogic())`; subclass it to customize.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of BattleObserverMissionLogic (Logic)
Mission.Current.AddMissionBehavior(new BattleObserverMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)