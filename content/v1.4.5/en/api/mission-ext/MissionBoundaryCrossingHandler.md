---
title: "MissionBoundaryCrossingHandler"
description: "Auto-generated class reference for MissionBoundaryCrossingHandler."
---
# MissionBoundaryCrossingHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryCrossingHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBoundaryCrossingHandler.cs`

## Overview

`MissionBoundaryCrossingHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionBoundaryCrossingHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnRemoveBehavior();
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the `clear scene` event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBoundaryCrossingHandler>();
```

## See Also

- [Area Index](../)