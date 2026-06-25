---
title: "SpawningBehaviorBase"
description: "Auto-generated class reference for SpawningBehaviorBase."
---
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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.Initialize(spawnComponent);
```

### Clear
`public virtual void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.Clear();
```

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnTick(0);
```

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**Purpose:** **Purpose:** Executes the AreAgentsSpawning logic.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.AreAgentsSpawning();
```

### RequestStartSpawnSession
`public virtual void RequestStartSpawnSession()`

**Purpose:** **Purpose:** Executes the RequestStartSpawnSession logic.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.RequestStartSpawnSession();
```

### RequestStopSpawnSession
`public void RequestStopSpawnSession()`

**Purpose:** **Purpose:** Executes the RequestStopSpawnSession logic.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.RequestStopSpawnSession();
```

### SetRemainingAgentsInvulnerable
`public void SetRemainingAgentsInvulnerable()`

**Purpose:** **Purpose:** Assigns a new value to remaining agents invulnerable and updates the object's internal state.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.SetRemainingAgentsInvulnerable();
```

### CanUpdateSpawnEquipment
`public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for update spawn equipment.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.CanUpdateSpawnEquipment(missionPeer);
```

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**Purpose:** **Purpose:** Executes the ToggleUpdatingSpawnEquipment logic.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.ToggleUpdatingSpawnEquipment(false);
```

### AllowEarlyAgentVisualsDespawning
`public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Permits early agent visuals despawning to be enabled or performed on the this instance.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.AllowEarlyAgentVisualsDespawning(missionPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the maximum re spawn period for peer value held by the this instance.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.GetMaximumReSpawnPeriodForPeer(peer);
```

### OnClearScene
`public virtual void OnClearScene()`

**Purpose:** **Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnClearScene();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnSpawningEndedEventDelegate
`public delegate void OnSpawningEndedEventDelegate()`

**Purpose:** **Purpose:** Invoked when the spawning ended event delegate event is raised.

```csharp
// Obtain an instance of SpawningBehaviorBase from the subsystem API first
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnSpawningEndedEventDelegate();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SpawningBehaviorBase instance = ...;
```

## See Also

- [Area Index](../)