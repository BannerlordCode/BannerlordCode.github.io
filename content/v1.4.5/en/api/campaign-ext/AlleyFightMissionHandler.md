---
title: "AlleyFightMissionHandler"
description: "Auto-generated class reference for AlleyFightMissionHandler."
---
# AlleyFightMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class AlleyFightMissionHandler : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/AlleyFightMissionHandler.cs`

## Overview

`AlleyFightMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `AlleyFightMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.EarlyStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.AfterStart();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Invoked when the `end mission request` event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.OnEndMissionRequest(canLeave);
```

### OnRetreatMission
`public override void OnRetreatMission()`

**Purpose:** Invoked when the `retreat mission` event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnRetreatMission();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Invoked when the `rendering started` event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnRenderingStarted();
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Invoked when the `mission state finalized` event is raised.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnMissionStateFinalized();
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the `spawner` flow or state machine.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the `spawner` flow or state machine.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side spawn enabled` state or condition.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.IsSideSpawnEnabled(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side depleted` state or condition.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.IsSideDepleted(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = (BattleSideEnum)(-1))`

**Purpose:** Reads and returns the `reinforcement interval` value held by the current object.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetReinforcementInterval((BattleSideEnum)(-1));
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `all troops for side` value held by the current object.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the `number of player controllable troops` value held by the current object.

```csharp
// Obtain an instance of AlleyFightMissionHandler from the subsystem API first
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the `spawn horses` value held by the current object.

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