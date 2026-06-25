---
title: "MissionObjective"
description: "Auto-generated class reference for MissionObjective."
---
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjective.cs`

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
| `IsActive` | `public bool IsActive { get; }` |
| `IsStarted` | `public bool IsStarted { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `ObjectiveGiver` | `public BasicCharacterObject ObjectiveGiver { get; }` |

## Key Methods

### SetName
`public GenericMissionObjectiveBuilder SetName(TextObject name)`

**Purpose:** Assigns a new value to `name` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetName(name);
```

### SetDescription
`public GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**Purpose:** Assigns a new value to `description` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetDescription(description);
```

### SetObjectiveGiver
`public GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**Purpose:** Assigns a new value to `objective giver` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetObjectiveGiver(objectiveGiver);
```

### SetInitialTargets
`public GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**Purpose:** Assigns a new value to `initial targets` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetInitialTargets(targets);
```

### SetIsActivationRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Assigns a new value to `is activation requirements met callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetIsActivationRequirementsMetCallback(func<MissionObjective, false);
```

### SetIsCompletionRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Assigns a new value to `is completion requirements met callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetIsCompletionRequirementsMetCallback(func<MissionObjective, false);
```

### SetOnStartCallback
`public GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**Purpose:** Assigns a new value to `on start callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetOnStartCallback(callback);
```

### SetOnCompleteCallback
`public GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**Purpose:** Assigns a new value to `on complete callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetOnCompleteCallback(callback);
```

### SetOnTickCallback
`public GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**Purpose:** Assigns a new value to `on tick callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetOnTickCallback(action<MissionObjective, 0);
```

### SetProgressCallback
`public GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**Purpose:** Assigns a new value to `progress callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetProgressCallback(func<MissionObjective, callback);
```

### Build
`public MissionObjective Build()`

**Purpose:** Builds an instance or representation of the current object.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.Build();
```

### SetIsActiveCallback
`public GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**Purpose:** Assigns a new value to `is active callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetIsActiveCallback(func<T, false);
```

### SetGetGlobalPositionCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**Purpose:** Assigns a new value to `get global position callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetGetGlobalPositionCallback(func<T, callback);
```

### SetGetNameCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**Purpose:** Assigns a new value to `get name callback` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.SetGetNameCallback(func<T, callback);
```

### Build
`public MissionObjectiveTarget<T> Build()`

**Purpose:** Builds an instance or representation of the current object.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.Build();
```

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Reads and returns the `current progress` value held by the current object.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.GetCurrentProgress();
```

### SetObjectiveGiver
`public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**Purpose:** Assigns a new value to `objective giver` and updates the object's internal state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
missionObjective.SetObjectiveGiver(objectiveGiver);
```

### AddTarget
`public void AddTarget(MissionObjectiveTarget target)`

**Purpose:** Adds `target` to the current collection or state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
missionObjective.AddTarget(target);
```

### RemoveTarget
`public void RemoveTarget(MissionObjectiveTarget target)`

**Purpose:** Removes `target` from the current collection or state.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
missionObjective.RemoveTarget(target);
```

### ClearTargets
`public void ClearTargets()`

**Purpose:** Removes all `targets` from the current object.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
missionObjective.ClearTargets();
```

### GetTargetsCopy
`public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy()`

**Purpose:** Reads and returns the `targets copy` value held by the current object.

```csharp
// Obtain an instance of MissionObjective from the subsystem API first
MissionObjective missionObjective = ...;
var result = missionObjective.GetTargetsCopy();
```

### CreateGenericObjectiveBuilder
`public static GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)`

**Purpose:** Constructs a new `generic objective builder` entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionObjective.CreateGenericObjectiveBuilder(mission, "example", null, null);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionObjective instance = ...;
```

## See Also

- [Area Index](../)