<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CasualtyHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## Overview

`CasualtyHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnAgentFleeing
```csharp
public override void OnAgentFleeing(Agent affectedAgent)
```

### GetCasualtyCountOfFormation
```csharp
public int GetCasualtyCountOfFormation(Formation formation)
```

### GetCasualtyPowerLossOfFormation
```csharp
public float GetCasualtyPowerLossOfFormation(Formation formation)
```

## Usage Example

```csharp
// Typical usage of CasualtyHandler (Handler)
Mission.Current.AddMissionBehavior(new CasualtyHandler());
```

## See Also

- [Complete Class Catalog](../catalog)