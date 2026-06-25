---
title: "DuelSpawningBehavior"
description: "Auto-generated class reference for DuelSpawningBehavior."
---
# DuelSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DuelSpawningBehavior.cs`

## Overview

`DuelSpawningBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize(SpawnComponent spawnComponent)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of DuelSpawningBehavior from the subsystem API first
DuelSpawningBehavior duelSpawningBehavior = ...;
duelSpawningBehavior.Initialize(spawnComponent);
```

### Clear
`public override void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of DuelSpawningBehavior from the subsystem API first
DuelSpawningBehavior duelSpawningBehavior = ...;
duelSpawningBehavior.Clear();
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of DuelSpawningBehavior from the subsystem API first
DuelSpawningBehavior duelSpawningBehavior = ...;
duelSpawningBehavior.OnTick(0);
```

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

**Purpose:** Permits `early agent visuals despawning` to be enabled or performed on the current object.

```csharp
// Obtain an instance of DuelSpawningBehavior from the subsystem API first
DuelSpawningBehavior duelSpawningBehavior = ...;
var result = duelSpawningBehavior.AllowEarlyAgentVisualsDespawning(missionPeer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DuelSpawningBehavior duelSpawningBehavior = ...;
duelSpawningBehavior.Initialize(spawnComponent);
```

## See Also

- [Area Index](../)