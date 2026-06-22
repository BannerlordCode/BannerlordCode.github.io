<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBoundaryCrossingHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionBoundaryCrossingHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryCrossingHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionBoundaryCrossingHandler.cs`

## Overview

`MissionBoundaryCrossingHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of MissionBoundaryCrossingHandler (Handler)
Mission.Current.AddMissionBehavior(new MissionBoundaryCrossingHandler());
```

## See Also

- [Complete Class Catalog](../catalog)