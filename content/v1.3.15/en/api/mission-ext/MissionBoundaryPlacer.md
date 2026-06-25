---
title: "MissionBoundaryPlacer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBoundaryPlacer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionBoundaryPlacer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryPlacer : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionBoundaryPlacer.cs`

## Overview

`MissionBoundaryPlacer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AddMissionBoundaries
`public void AddMissionBoundaries()`

**Purpose:** Adds `mission boundaries` to the current collection or state.

## Usage Example

```csharp
var value = new MissionBoundaryPlacer();
value.EarlyStart();
```

## See Also

- [Complete Class Catalog](../catalog)