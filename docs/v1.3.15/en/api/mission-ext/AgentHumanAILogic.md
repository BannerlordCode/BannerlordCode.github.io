<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentHumanAILogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## Overview

`AgentHumanAILogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new AgentHumanAILogic())`; subclass it to customize.

## Key Methods

### OnAgentCreated
```csharp
public override void OnAgentCreated(Agent agent)
```

### OnAgentMount
```csharp
public override void OnAgentMount(Agent agent)
```

## Usage Example

```csharp
// Typical usage of AgentHumanAILogic (Logic)
Mission.Current.AddMissionBehavior(new AgentHumanAILogic());
```

## See Also

- [Complete Class Catalog](../catalog)