---
title: "MissionObjective"
description: "Auto-generated class reference for MissionObjective."
---
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## Overview

`MissionObjective` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UniqueId` | `public abstract string UniqueId { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `ObjectiveGiver` | `public virtual BasicCharacterObject ObjectiveGiver { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## Key Methods

### ForceComplete
`public void ForceComplete()`

**Purpose:** Executes the ForceComplete logic.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
missionObjective.ForceComplete();
```

### GetIsActivationRequirementsMet
`public bool GetIsActivationRequirementsMet()`

**Purpose:** Reads and returns the is activation requirements met value held by the this instance.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.GetIsActivationRequirementsMet();
```

### GetIsCompletionRequirementsMet
`public bool GetIsCompletionRequirementsMet()`

**Purpose:** Reads and returns the is completion requirements met value held by the this instance.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.GetIsCompletionRequirementsMet();
```

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Reads and returns the current progress value held by the this instance.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.GetCurrentProgress();
```

### GetTargets
`public abstract IMissionObjectiveTarget GetTargets()`

**Purpose:** Reads and returns the targets value held by the this instance.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.GetTargets();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionObjective instance = ...;
```

## See Also

- [Area Index](../)