<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentMoraleInteractionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`

## Overview

`AgentMoraleInteractionLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new AgentMoraleInteractionLogic())`; subclass it to customize.

## Key Methods

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnAgentFleeing
```csharp
public override void OnAgentFleeing(Agent affectedAgent)
```

## Usage Example

```csharp
// Typical usage of AgentMoraleInteractionLogic (Logic)
Mission.Current.AddMissionBehavior(new AgentMoraleInteractionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)