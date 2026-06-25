---
title: "SpawningBehaviorBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawningBehaviorBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawningBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawningBehaviorBase`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs`

## Overview

`SpawningBehaviorBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public virtual void Initialize(SpawnComponent spawnComponent)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Clear
`public virtual void Clear()`

**Purpose:** Handles logic related to `clear`.

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**Purpose:** Handles logic related to `are agents spawning`.

### RequestStartSpawnSession
`public virtual void RequestStartSpawnSession()`

**Purpose:** Handles logic related to `request start spawn session`.

### RequestStopSpawnSession
`public void RequestStopSpawnSession()`

**Purpose:** Handles logic related to `request stop spawn session`.

### SetRemainingAgentsInvulnerable
`public void SetRemainingAgentsInvulnerable()`

**Purpose:** Sets the value or state of `remaining agents invulnerable`.

### CanUpdateSpawnEquipment
`public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)`

**Purpose:** Checks whether the current object can `update spawn equipment`.

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**Purpose:** Handles logic related to `toggle updating spawn equipment`.

### AllowEarlyAgentVisualsDespawning
`public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

**Purpose:** Handles logic related to `allow early agent visuals despawning`.

### GetMaximumReSpawnPeriodForPeer
`public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**Purpose:** Gets the current value of `maximum re spawn period for peer`.

### OnClearScene
`public virtual void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnSpawningEndedEventDelegate
`public delegate void OnSpawningEndedEventDelegate()`

**Purpose:** Called when the `spawning ended event delegate` event is raised.

## Usage Example

```csharp
var implementation = new CustomSpawningBehaviorBase();
```

## See Also

- [Complete Class Catalog](../catalog)