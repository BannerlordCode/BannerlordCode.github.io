<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentCommonAILogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentCommonAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## Overview

`AgentCommonAILogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new AgentCommonAILogic())`; subclass it to customize.

## Key Methods

### OnAgentCreated
```csharp
public override void OnAgentCreated(Agent agent)
```

## Usage Example

```csharp
// Typical usage of AgentCommonAILogic (Logic)
Mission.Current.AddMissionBehavior(new AgentCommonAILogic());
```

## See Also

- [Complete Class Catalog](../catalog)