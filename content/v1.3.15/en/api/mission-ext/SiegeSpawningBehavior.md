---
title: "SiegeSpawningBehavior"
description: "Auto-generated class reference for SiegeSpawningBehavior."
---
# SiegeSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawningBehavior.cs`

## Overview

`SiegeSpawningBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize(SpawnComponent spawnComponent)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SiegeSpawningBehavior from the subsystem API first
SiegeSpawningBehavior siegeSpawningBehavior = ...;
siegeSpawningBehavior.Initialize(spawnComponent);
```

### Clear
`public override void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of SiegeSpawningBehavior from the subsystem API first
SiegeSpawningBehavior siegeSpawningBehavior = ...;
siegeSpawningBehavior.Clear();
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of SiegeSpawningBehavior from the subsystem API first
SiegeSpawningBehavior siegeSpawningBehavior = ...;
siegeSpawningBehavior.OnTick(0);
```

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** **Purpose:** Permits early agent visuals despawning to be enabled or performed on the this instance.

```csharp
// Obtain an instance of SiegeSpawningBehavior from the subsystem API first
SiegeSpawningBehavior siegeSpawningBehavior = ...;
var result = siegeSpawningBehavior.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the maximum re spawn period for peer value held by the this instance.

```csharp
// Obtain an instance of SiegeSpawningBehavior from the subsystem API first
SiegeSpawningBehavior siegeSpawningBehavior = ...;
var result = siegeSpawningBehavior.GetMaximumReSpawnPeriodForPeer(peer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeSpawningBehavior siegeSpawningBehavior = ...;
siegeSpawningBehavior.Initialize(spawnComponent);
```

## See Also

- [Area Index](../)