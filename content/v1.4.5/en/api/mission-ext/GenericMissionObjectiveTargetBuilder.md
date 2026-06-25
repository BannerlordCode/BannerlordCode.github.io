---
title: "GenericMissionObjectiveTargetBuilder"
description: "Auto-generated class reference for GenericMissionObjectiveTargetBuilder."
---
# GenericMissionObjectiveTargetBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveTargetBuilder<T>`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjective.cs`

## Overview

`GenericMissionObjectiveTargetBuilder` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIsActiveCallback
`public GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**Purpose:** **Purpose:** Assigns a new value to is active callback and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveTargetBuilder from the subsystem API first
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.SetIsActiveCallback(func<T, false);
```

### SetGetGlobalPositionCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**Purpose:** **Purpose:** Assigns a new value to get global position callback and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveTargetBuilder from the subsystem API first
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.SetGetGlobalPositionCallback(func<T, callback);
```

### SetGetNameCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**Purpose:** **Purpose:** Assigns a new value to get name callback and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveTargetBuilder from the subsystem API first
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.SetGetNameCallback(func<T, callback);
```

### Build
`public MissionObjectiveTarget<T> Build()`

**Purpose:** **Purpose:** Builds an instance or representation of the this instance.

```csharp
// Obtain an instance of GenericMissionObjectiveTargetBuilder from the subsystem API first
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.Build();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
genericMissionObjectiveTargetBuilder.SetIsActiveCallback(func<T, false);
```

## See Also

- [Area Index](../)