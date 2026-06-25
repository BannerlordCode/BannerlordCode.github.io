---
title: "SpawnFrameBehaviorBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnFrameBehaviorBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnFrameBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawnFrameBehaviorBase`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs`

## Overview

`SpawnFrameBehaviorBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateDecreasingCache
`public static WeightCache CreateDecreasingCache()`

**Purpose:** Creates a new `decreasing cache` instance or object.

### CheckAndInsertNewValueIfLower
`public bool CheckAndInsertNewValueIfLower(float value, out float valueDifference)`

**Purpose:** Handles logic related to `check and insert new value if lower`.

### Initialize
`public virtual void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetSpawnFrame
`public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**Purpose:** Gets the current value of `spawn frame`.

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var implementation = new CustomSpawnFrameBehaviorBase();
```

## See Also

- [Complete Class Catalog](../catalog)