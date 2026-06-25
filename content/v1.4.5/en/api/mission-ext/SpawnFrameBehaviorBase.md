---
title: "SpawnFrameBehaviorBase"
description: "Auto-generated class reference for SpawnFrameBehaviorBase."
---
# SpawnFrameBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawnFrameBehaviorBase`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs`

## Overview

`SpawnFrameBehaviorBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateDecreasingCache
`public static WeightCache CreateDecreasingCache()`

**Purpose:** **Purpose:** Constructs a new decreasing cache entity and returns it to the caller.

```csharp
// Static call; no instance required
SpawnFrameBehaviorBase.CreateDecreasingCache();
```

### CheckAndInsertNewValueIfLower
`public bool CheckAndInsertNewValueIfLower(float value, out float valueDifference)`

**Purpose:** **Purpose:** Verifies whether and insert new value if lower holds true for the this instance.

```csharp
// Obtain an instance of SpawnFrameBehaviorBase from the subsystem API first
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
var result = spawnFrameBehaviorBase.CheckAndInsertNewValueIfLower(0, valueDifference);
```

### Initialize
`public virtual void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SpawnFrameBehaviorBase from the subsystem API first
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
spawnFrameBehaviorBase.Initialize();
```

### GetSpawnFrame
`public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**Purpose:** **Purpose:** Reads and returns the spawn frame value held by the this instance.

```csharp
// Obtain an instance of SpawnFrameBehaviorBase from the subsystem API first
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
var result = spawnFrameBehaviorBase.GetSpawnFrame(team, false, false);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SpawnFrameBehaviorBase from the subsystem API first
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
spawnFrameBehaviorBase.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SpawnFrameBehaviorBase instance = ...;
```

## See Also

- [Area Index](../)