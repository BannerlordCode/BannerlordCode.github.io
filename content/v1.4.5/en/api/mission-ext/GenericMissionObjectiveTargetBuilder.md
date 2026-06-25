---
title: "GenericMissionObjectiveTargetBuilder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericMissionObjectiveTargetBuilder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericMissionObjectiveTargetBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveTargetBuilder<T>`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjective.cs`

## Overview

`GenericMissionObjectiveTargetBuilder` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIsActiveCallback
`public GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**Purpose:** Sets the value or state of `is active callback`.

### SetGetGlobalPositionCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**Purpose:** Sets the value or state of `get global position callback`.

### SetGetNameCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**Purpose:** Sets the value or state of `get name callback`.

### Build
`public MissionObjectiveTarget<T> Build()`

**Purpose:** Handles logic related to `build`.

## Usage Example

```csharp
var value = new GenericMissionObjectiveTargetBuilder();
value.SetIsActiveCallback(func<T, false);
```

## See Also

- [Complete Class Catalog](../catalog)