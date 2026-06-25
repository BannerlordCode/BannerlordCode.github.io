---
title: "CheckpointMissionLogic"
description: "Auto-generated class reference for CheckpointMissionLogic."
---
# CheckpointMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CheckpointMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/CheckpointMissionLogic.cs`

## Overview

`CheckpointMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CheckpointMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CheckpointMissionLogic from the subsystem API first
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.EarlyStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Invoked when the `rendering started` event is raised.

```csharp
// Obtain an instance of CheckpointMissionLogic from the subsystem API first
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnRenderingStarted();
```

### OnEarlyAgentRemoved
`public override void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `early agent removed` event is raised.

```csharp
// Obtain an instance of CheckpointMissionLogic from the subsystem API first
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnEarlyAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of CheckpointMissionLogic from the subsystem API first
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnMissionTick(0);
```

### OnCheckpointUsed
`public void OnCheckpointUsed(int checkpointUniqueId)`

**Purpose:** Invoked when the `checkpoint used` event is raised.

```csharp
// Obtain an instance of CheckpointMissionLogic from the subsystem API first
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnCheckpointUsed(0);
```

### RegisterAgent
`public void RegisterAgent(Agent agent)`

**Purpose:** Registers `agent` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CheckpointMissionLogic from the subsystem API first
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.RegisterAgent(agent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CheckpointMissionLogic>();
```

## See Also

- [Area Index](../)