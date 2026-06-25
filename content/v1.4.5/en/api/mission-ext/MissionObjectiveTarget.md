---
title: "MissionObjectiveTarget"
description: "Auto-generated class reference for MissionObjectiveTarget."
---
# MissionObjectiveTarget

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjectiveTarget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjectiveTarget.cs`

## Overview

`MissionObjectiveTarget` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsActive
`public abstract bool IsActive()`

**Purpose:** Determines whether the this instance is in the active state or condition.

```csharp
// Obtain an instance of MissionObjectiveTarget from the subsystem API first
MissionObjectiveTarget missionObjectiveTarget = ...;
var result = missionObjectiveTarget.IsActive();
```

### GetName
`public abstract TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of MissionObjectiveTarget from the subsystem API first
MissionObjectiveTarget missionObjectiveTarget = ...;
var result = missionObjectiveTarget.GetName();
```

### GetGlobalPosition
`public abstract Vec3 GetGlobalPosition()`

**Purpose:** Reads and returns the global position value held by the this instance.

```csharp
// Obtain an instance of MissionObjectiveTarget from the subsystem API first
MissionObjectiveTarget missionObjectiveTarget = ...;
var result = missionObjectiveTarget.GetGlobalPosition();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionObjectiveTarget instance = ...;
```

## See Also

- [Area Index](../)