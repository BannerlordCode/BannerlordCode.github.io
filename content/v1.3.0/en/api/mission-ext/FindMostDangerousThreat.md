---
title: "FindMostDangerousThreat"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FindMostDangerousThreat`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `prepare`.

### GetResult
`public Threat GetResult(out Agent targetAgent)`

**Purpose:** Gets the current value of `result`.

## Usage Example

```csharp
var value = new FindMostDangerousThreat();
value.Prepare(threats, weapon);
```

## See Also

- [Complete Class Catalog](../catalog)