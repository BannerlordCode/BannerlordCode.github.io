---
title: "FindMostDangerousThreat"
description: "Auto-generated class reference for FindMostDangerousThreat."
---
# FindMostDangerousThreat

**Namespace:** TaleWorlds.MountAndBlade.DividableTasks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FindMostDangerousThreat : DividableTask`
**Base:** `DividableTask`
**File:** `TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs`

## Overview

`FindMostDangerousThreat` lives in `TaleWorlds.MountAndBlade.DividableTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DividableTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Prepare
`public void Prepare(List<Threat> threats, RangedSiegeWeapon weapon)`

**Purpose:** **Purpose:** Finishes prerequisite setup for the this instance's operation.

```csharp
// Obtain an instance of FindMostDangerousThreat from the subsystem API first
FindMostDangerousThreat findMostDangerousThreat = ...;
findMostDangerousThreat.Prepare(threats, weapon);
```

### GetResult
`public Threat GetResult(out Agent targetAgent)`

**Purpose:** **Purpose:** Reads and returns the result value held by the this instance.

```csharp
// Obtain an instance of FindMostDangerousThreat from the subsystem API first
FindMostDangerousThreat findMostDangerousThreat = ...;
var result = findMostDangerousThreat.GetResult(targetAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FindMostDangerousThreat findMostDangerousThreat = ...;
findMostDangerousThreat.Prepare(threats, weapon);
```

## See Also

- [Area Index](../)