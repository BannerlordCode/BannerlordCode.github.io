---
title: "GenericMissionObjectiveTarget"
description: "Auto-generated class reference for GenericMissionObjectiveTarget."
---
# GenericMissionObjectiveTarget

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class GenericMissionObjectiveTarget<T> : MissionObjectiveTarget<T>`
**Base:** `MissionObjectiveTarget<T>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/GenericMissionObjectiveTarget.cs`

## Overview

`GenericMissionObjectiveTarget` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsActive
`public override bool IsActive()`

**Purpose:** Determines whether the this instance is in the active state or condition.

```csharp
// Obtain an instance of GenericMissionObjectiveTarget from the subsystem API first
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
var result = genericMissionObjectiveTarget.IsActive();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of GenericMissionObjectiveTarget from the subsystem API first
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
var result = genericMissionObjectiveTarget.GetName();
```

### GetGlobalPosition
`public override Vec3 GetGlobalPosition()`

**Purpose:** Reads and returns the global position value held by the this instance.

```csharp
// Obtain an instance of GenericMissionObjectiveTarget from the subsystem API first
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
var result = genericMissionObjectiveTarget.GetGlobalPosition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
genericMissionObjectiveTarget.IsActive();
```

## See Also

- [Area Index](../)