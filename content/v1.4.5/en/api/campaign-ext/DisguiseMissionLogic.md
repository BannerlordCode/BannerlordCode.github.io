---
title: "DisguiseMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/DisguiseMissionLogic.cs`

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

**Purpose:** Sets the value or state of `can player camera see the agent`.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**Purpose:** Gets the current value of `spawn frame of passage`.

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

**Purpose:** Handles logic related to `is contact agent tracked`.

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

**Purpose:** Checks whether the current object can `common area fight be triggered`.

### ContactAlreadySetCommonCondition
`public bool ContactAlreadySetCommonCondition()`

**Purpose:** Handles logic related to `contact already set common condition`.

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**Purpose:** Handles logic related to `is on left side`.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)`

**Purpose:** Handles logic related to `spawn disguise mission agent internal`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### GetAgentOffenseInfo
`public ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

**Purpose:** Gets the current value of `agent offense info`.

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)`

**Purpose:** Handles logic related to `is agent in detection radius`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### OnCollectPlayerEventControlFlags
`public EventControlFlag OnCollectPlayerEventControlFlags()`

**Purpose:** Called when the `collect player event control flags` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new DisguiseMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)