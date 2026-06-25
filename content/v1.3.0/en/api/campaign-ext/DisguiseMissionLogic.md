---
title: "DisguiseMissionLogic"
description: "Auto-generated class reference for DisguiseMissionLogic."
---
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`

## Overview

`DisguiseMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `DisguiseMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInStealthMode` | `public bool IsInStealthMode { get; }` |
| `ThreatAgentInfos` | `public ReadOnlyDictionary<Agent, DisguiseMissionLogic.ShadowingAgentOffenseInfo> ThreatAgentInfos { get; }` |
| `Agent` | `public Agent Agent { get; }` |
| `CanPlayerCameraSeeTheAgent` | `public bool CanPlayerCameraSeeTheAgent { get; }` |
| `OffenseType` | `public StealthOffenseTypes OffenseType { get; }` |

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnCreated();
```

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**Purpose:** Reads and returns the spawn frame of passage value held by the this instance.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.GetSpawnFrameOfPassage(location);
```

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

**Purpose:** Determines whether the this instance is in the contact agent tracked state or condition.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsContactAgentTracked(agent);
```

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

**Purpose:** Checks whether the this instance meets the preconditions for common area fight be triggered.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.CanCommonAreaFightBeTriggered();
```

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**Purpose:** Determines whether the this instance is in the on left side state or condition.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsOnLeftSide(lineA, lineB, point);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)`

**Purpose:** Executes the SpawnDisguiseMissionAgentInternal logic.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.SpawnDisguiseMissionAgentInternal(agentCharacter, initialPosition, initialDirection, "example", false);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnMissionTick(0);
```

### GetAgentOffenseInfo
`public DisguiseMissionLogic.ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

**Purpose:** Reads and returns the agent offense info value held by the this instance.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.GetAgentOffenseInfo(agent);
```

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)`

**Purpose:** Determines whether the this instance is in the agent in detection radius state or condition.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsAgentInDetectionRadius(offenderAgent, detectorAgent);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.OnEndMissionRequest(canPlayerLeave);
```

### OnCollectPlayerEventControlFlags
`public Agent.EventControlFlag OnCollectPlayerEventControlFlags()`

**Purpose:** Invoked when the collect player event control flags event is raised.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.OnCollectPlayerEventControlFlags();
```

### SetCanPlayerCameraSeeTheAgent
`public void SetCanPlayerCameraSeeTheAgent(bool value)`

**Purpose:** Assigns a new value to can player camera see the agent and updates the object's internal state.

```csharp
// Obtain an instance of DisguiseMissionLogic from the subsystem API first
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.SetCanPlayerCameraSeeTheAgent(false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<DisguiseMissionLogic>();
```

## See Also

- [Area Index](../)