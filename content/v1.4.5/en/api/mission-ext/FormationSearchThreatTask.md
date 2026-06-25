---
title: "FormationSearchThreatTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationSearchThreatTask`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationSearchThreatTask

**Namespace:** TaleWorlds.MountAndBlade.DividableTasks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationSearchThreatTask : DividableTask`
**Base:** `DividableTask`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.DividableTasks/FormationSearchThreatTask.cs`

## Overview

`FormationSearchThreatTask` lives in `TaleWorlds.MountAndBlade.DividableTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DividableTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Prepare
`public void Prepare(Formation formation, RangedSiegeWeapon weapon)`

**Purpose:** Handles logic related to `prepare`.

### GetResult
`public bool GetResult(out Agent targetAgent)`

**Purpose:** Gets the current value of `result`.

## Usage Example

```csharp
var value = new FormationSearchThreatTask();
value.Prepare(formation, weapon);
```

## See Also

- [Complete Class Catalog](../catalog)