---
title: "SpawnComponent"
description: "Auto-generated class reference for SpawnComponent."
---
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnComponent.cs`

## Overview

`SpawnComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SpawnComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnFrameBehavior` | `public SpawnFrameBehaviorBase SpawnFrameBehavior { get; }` |
| `SpawningBehavior` | `public SpawningBehaviorBase SpawningBehavior { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.OnBehaviorInitialize();
```

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
var result = spawnComponent.AreAgentsSpawning();
```

### SetNewSpawnFrameBehavior
`public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)`

**Purpose:** Assigns a new value to `new spawn frame behavior` and updates the object's internal state.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.SetNewSpawnFrameBehavior(spawnFrameBehavior);
```

### SetNewSpawningBehavior
`public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)`

**Purpose:** Assigns a new value to `new spawning behavior` and updates the object's internal state.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.SetNewSpawningBehavior(spawningBehavior);
```

### SetSiegeSpawningBehavior
`public static void SetSiegeSpawningBehavior()`

**Purpose:** Assigns a new value to `siege spawning behavior` and updates the object's internal state.

```csharp
// Static call; no instance required
SpawnComponent.SetSiegeSpawningBehavior();
```

### SetFlagDominationSpawningBehavior
`public static void SetFlagDominationSpawningBehavior()`

**Purpose:** Assigns a new value to `flag domination spawning behavior` and updates the object's internal state.

```csharp
// Static call; no instance required
SpawnComponent.SetFlagDominationSpawningBehavior();
```

### SetWarmupSpawningBehavior
`public static void SetWarmupSpawningBehavior()`

**Purpose:** Assigns a new value to `warmup spawning behavior` and updates the object's internal state.

```csharp
// Static call; no instance required
SpawnComponent.SetWarmupSpawningBehavior();
```

### SetSpawningBehaviorForCurrentGameType
`public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)`

**Purpose:** Assigns a new value to `spawning behavior for current game type` and updates the object's internal state.

```csharp
// Static call; no instance required
SpawnComponent.SetSpawningBehaviorForCurrentGameType(currentGameType);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.OnMissionTick(0);
```

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)`

**Purpose:** Reads and returns the `spawn frame` value held by the current object.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
var result = spawnComponent.GetSpawnFrame(team, false, false);
```

### SetEarlyAgentVisualsDespawning
`public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)`

**Purpose:** Assigns a new value to `early agent visuals despawning` and updates the object's internal state.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.SetEarlyAgentVisualsDespawning(missionPeer, false);
```

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.ToggleUpdatingSpawnEquipment(false);
```

### AllowEarlyAgentVisualsDespawning
`public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** Permits `early agent visuals despawning` to be enabled or performed on the current object.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
var result = spawnComponent.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)`

**Purpose:** Reads and returns the `maximum re spawn period for peer` value held by the current object.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
var result = spawnComponent.GetMaximumReSpawnPeriodForPeer(lobbyPeer);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the `clear scene` event is raised.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of SpawnComponent from the subsystem API first
SpawnComponent spawnComponent = ...;
spawnComponent.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
var component = agent.GetComponent<SpawnComponent>();
```

## See Also

- [Area Index](../)