---
title: "AlleyFightMissionHandler"
description: "Auto-generated class reference for AlleyFightMissionHandler."
---
# AlleyFightMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class AlleyFightMissionHandler : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs`

## Overview

`AlleyFightMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `AlleyFightMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.EarlyStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.AfterStart();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** **Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.OnEndMissionRequest(canLeave);
```

### OnRetreatMission
`public override void OnRetreatMission()`

**Purpose:** **Purpose:** Invoked when the retreat mission event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnRetreatMission();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** **Purpose:** Invoked when the rendering started event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnRenderingStarted();
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** **Purpose:** Starts the spawner flow or state machine.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** **Purpose:** Stops the spawner flow or state machine.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the side spawn enabled state or condition.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.IsSideSpawnEnabled(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the side depleted state or condition.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.IsSideDepleted(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**Purpose:** **Purpose:** Reads and returns the reinforcement interval value held by the this instance.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetReinforcementInterval();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the all troops for side value held by the this instance.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** **Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the spawn horses value held by the this instance.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetSpawnHorses(side);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AlleyFightMissionHandler>();
```

## See Also

- [Area Index](../)