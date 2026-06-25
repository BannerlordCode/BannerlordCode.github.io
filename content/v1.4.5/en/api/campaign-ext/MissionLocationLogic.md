---
title: "MissionLocationLogic"
description: "Auto-generated class reference for MissionLocationLogic."
---
# MissionLocationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionLocationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionLocationLogic.cs`

## Overview

`MissionLocationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionLocationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionLocationLogic from the subsystem API first
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.EarlyStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionLocationLogic from the subsystem API first
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionLocationLogic from the subsystem API first
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.OnRemoveBehavior();
```

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of MissionLocationLogic from the subsystem API first
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.OnCreated();
```

### SpawnCharactersAccompanyingPlayer
`public void SpawnCharactersAccompanyingPlayer(bool noHorse)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionLocationLogic from the subsystem API first
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.SpawnCharactersAccompanyingPlayer(false);
```

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**Purpose:** Reads and returns the `spawn frame of passage` value held by the current object.

```csharp
// Obtain an instance of MissionLocationLogic from the subsystem API first
MissionLocationLogic missionLocationLogic = ...;
var result = missionLocationLogic.GetSpawnFrameOfPassage(location);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionLocationLogic>();
```

## See Also

- [Area Index](../)