<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBoundaryCrossingHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionBoundaryCrossingHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryCrossingHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionBoundaryCrossingHandler.cs`

## Overview

`MissionBoundaryCrossingHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionBoundaryCrossingHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionBoundaryCrossingHandler());
```

## See Also

- [Complete Class Catalog](../catalog)