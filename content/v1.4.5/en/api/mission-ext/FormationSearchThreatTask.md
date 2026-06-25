---
title: "FormationSearchThreatTask"
description: "Auto-generated class reference for FormationSearchThreatTask."
---
# FormationSearchThreatTask

**Namespace:** TaleWorlds.MountAndBlade.DividableTasks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationSearchThreatTask : DividableTask`
**Base:** `DividableTask`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.DividableTasks/FormationSearchThreatTask.cs`

## Overview

`FormationSearchThreatTask` lives in `TaleWorlds.MountAndBlade.DividableTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DividableTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Prepare
`public void Prepare(Formation formation, RangedSiegeWeapon weapon)`

**Purpose:** **Purpose:** Finishes prerequisite setup for the this instance's operation.

```csharp
// Obtain an instance of FormationSearchThreatTask from the subsystem API first
FormationSearchThreatTask formationSearchThreatTask = ...;
formationSearchThreatTask.Prepare(formation, weapon);
```

### GetResult
`public bool GetResult(out Agent targetAgent)`

**Purpose:** **Purpose:** Reads and returns the result value held by the this instance.

```csharp
// Obtain an instance of FormationSearchThreatTask from the subsystem API first
FormationSearchThreatTask formationSearchThreatTask = ...;
var result = formationSearchThreatTask.GetResult(targetAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationSearchThreatTask formationSearchThreatTask = ...;
formationSearchThreatTask.Prepare(formation, weapon);
```

## See Also

- [Area Index](../)