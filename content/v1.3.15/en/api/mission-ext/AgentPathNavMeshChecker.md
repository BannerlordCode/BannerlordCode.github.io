---
title: "AgentPathNavMeshChecker"
description: "Auto-generated class reference for AgentPathNavMeshChecker."
---
# AgentPathNavMeshChecker

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentPathNavMeshChecker`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs`

## Overview

`AgentPathNavMeshChecker` lives in `TaleWorlds.MountAndBlade.Source.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Source.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of AgentPathNavMeshChecker from the subsystem API first
AgentPathNavMeshChecker agentPathNavMeshChecker = ...;
agentPathNavMeshChecker.Tick(0);
```

### TickOccasionally
`public void TickOccasionally(float dt)`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of AgentPathNavMeshChecker from the subsystem API first
AgentPathNavMeshChecker agentPathNavMeshChecker = ...;
agentPathNavMeshChecker.TickOccasionally(0);
```

### HasAgentsUsingPath
`public bool HasAgentsUsingPath()`

**Purpose:** **Purpose:** Determines whether the this instance already holds agents using path.

```csharp
// Obtain an instance of AgentPathNavMeshChecker from the subsystem API first
AgentPathNavMeshChecker agentPathNavMeshChecker = ...;
var result = agentPathNavMeshChecker.HasAgentsUsingPath();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AgentPathNavMeshChecker agentPathNavMeshChecker = ...;
agentPathNavMeshChecker.Tick(0);
```

## See Also

- [Area Index](../)