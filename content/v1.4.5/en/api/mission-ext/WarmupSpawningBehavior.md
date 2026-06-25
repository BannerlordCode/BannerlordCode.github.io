---
title: "WarmupSpawningBehavior"
description: "Auto-generated class reference for WarmupSpawningBehavior."
---
# WarmupSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WarmupSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs`

## Overview

`WarmupSpawningBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnTick
`public override void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of WarmupSpawningBehavior from the subsystem API first
WarmupSpawningBehavior warmupSpawningBehavior = ...;
warmupSpawningBehavior.OnTick(0);
```

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** **Purpose:** Permits early agent visuals despawning to be enabled or performed on the this instance.

```csharp
// Obtain an instance of WarmupSpawningBehavior from the subsystem API first
WarmupSpawningBehavior warmupSpawningBehavior = ...;
var result = warmupSpawningBehavior.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the maximum re spawn period for peer value held by the this instance.

```csharp
// Obtain an instance of WarmupSpawningBehavior from the subsystem API first
WarmupSpawningBehavior warmupSpawningBehavior = ...;
var result = warmupSpawningBehavior.GetMaximumReSpawnPeriodForPeer(peer);
```

### Clear
`public override void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of WarmupSpawningBehavior from the subsystem API first
WarmupSpawningBehavior warmupSpawningBehavior = ...;
warmupSpawningBehavior.Clear();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WarmupSpawningBehavior warmupSpawningBehavior = ...;
warmupSpawningBehavior.OnTick(0);
```

## See Also

- [Area Index](../)