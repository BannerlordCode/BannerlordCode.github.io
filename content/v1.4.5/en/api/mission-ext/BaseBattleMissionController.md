---
title: "BaseBattleMissionController"
description: "Auto-generated class reference for BaseBattleMissionController."
---
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BaseBattleMissionController.cs`

## Overview

`BaseBattleMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `BaseBattleMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.AfterStart();
```

### GetTeamAI
`public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)`

**Purpose:** Reads and returns the `team a i` value held by the current object.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.GetTeamAI(team, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.OnMissionTick(0);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the `end mission request` event is raised.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.OnEndMissionRequest(canPlayerLeave);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BaseBattleMissionController instance = ...;
```

## See Also

- [Area Index](../)