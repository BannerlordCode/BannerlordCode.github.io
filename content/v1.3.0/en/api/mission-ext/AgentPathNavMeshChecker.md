---
title: "AgentPathNavMeshChecker"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentPathNavMeshChecker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `tick`.

### TickOccasionally
`public void TickOccasionally(float dt)`

**Purpose:** Handles logic related to `tick occasionally`.

### HasAgentsUsingPath
`public bool HasAgentsUsingPath()`

**Purpose:** Checks whether the current object has/contains `agents using path`.

## Usage Example

```csharp
var value = new AgentPathNavMeshChecker();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)