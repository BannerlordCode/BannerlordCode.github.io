---
title: "FlagDominationSpawningBehavior"
description: "Auto-generated class reference for FlagDominationSpawningBehavior."
---
# FlagDominationSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagDominationSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs`

## Overview

`FlagDominationSpawningBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize(SpawnComponent spawnComponent)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of FlagDominationSpawningBehavior from the subsystem API first
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.Initialize(spawnComponent);
```

### Clear
`public override void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of FlagDominationSpawningBehavior from the subsystem API first
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.Clear();
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of FlagDominationSpawningBehavior from the subsystem API first
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.OnTick(0);
```

### RequestStartSpawnSession
`public override void RequestStartSpawnSession()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FlagDominationSpawningBehavior from the subsystem API first
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.RequestStartSpawnSession();
```

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** Permits `early agent visuals despawning` to be enabled or performed on the current object.

```csharp
// Obtain an instance of FlagDominationSpawningBehavior from the subsystem API first
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
var result = flagDominationSpawningBehavior.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the `clear scene` event is raised.

```csharp
// Obtain an instance of FlagDominationSpawningBehavior from the subsystem API first
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.OnClearScene();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.Initialize(spawnComponent);
```

## See Also

- [Area Index](../)