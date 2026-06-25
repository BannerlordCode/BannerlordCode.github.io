---
title: "DisguiseMissionLogic"
description: "Auto-generated class reference for DisguiseMissionLogic."
---
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/DisguiseMissionLogic.cs`

## Overview

`DisguiseMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `DisguiseMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Agent` | `public Agent Agent { get; }` |
| `CanPlayerCameraSeeTheAgent` | `public bool CanPlayerCameraSeeTheAgent { get; }` |
| `OffenseType` | `public StealthOffenseTypes OffenseType { get; }` |
| `ThreatAgentInfos` | `public ReadOnlyDictionary<Agent, ShadowingAgentOffenseInfo> ThreatAgentInfos { get; }` |

## Key Methods

### SetCanPlayerCameraSeeTheAgent
`public void SetCanPlayerCameraSeeTheAgent(bool value)`

**Purpose:** **Purpose:** Assigns a new value to can player camera see the agent and updates the object's internal state.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.SetCanPlayerCameraSeeTheAgent(false);
```

### OnCreated
`public override void OnCreated()`

**Purpose:** **Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnCreated();
```

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**Purpose:** **Purpose:** Reads and returns the spawn frame of passage value held by the this instance.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.GetSpawnFrameOfPassage(location);
```

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the contact agent tracked state or condition.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsContactAgentTracked(agent);
```

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for common area fight be triggered.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.CanCommonAreaFightBeTriggered();
```

### ContactAlreadySetCommonCondition
`public bool ContactAlreadySetCommonCondition()`

**Purpose:** **Purpose:** Executes the ContactAlreadySetCommonCondition logic.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.ContactAlreadySetCommonCondition();
```

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**Purpose:** **Purpose:** Determines whether the this instance is in the on left side state or condition.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsOnLeftSide(lineA, lineB, point);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)`

**Purpose:** **Purpose:** Executes the SpawnDisguiseMissionAgentInternal logic.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.SpawnDisguiseMissionAgentInternal(agentCharacter, initialPosition, initialDirection, "example", false);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnMissionTick(0);
```

### GetAgentOffenseInfo
`public ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the agent offense info value held by the this instance.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.GetAgentOffenseInfo(agent);
```

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent in detection radius state or condition.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsAgentInDetectionRadius(offenderAgent, detectorAgent);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** **Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.OnEndMissionRequest(canPlayerLeave);
```

### OnCollectPlayerEventControlFlags
`public EventControlFlag OnCollectPlayerEventControlFlags()`

**Purpose:** **Purpose:** Invoked when the collect player event control flags event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.OnCollectPlayerEventControlFlags();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<DisguiseMissionLogic>();
```

## See Also

- [Area Index](../)