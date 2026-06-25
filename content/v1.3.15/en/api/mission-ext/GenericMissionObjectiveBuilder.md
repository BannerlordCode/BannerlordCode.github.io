---
title: "GenericMissionObjectiveBuilder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericMissionObjectiveBuilder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericMissionObjectiveBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveBuilder`
**Area:** mission-ext

## Overview

`GenericMissionObjectiveBuilder` lives in `TaleWorlds.MountAndBlade.Missions.Objectives`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Gets the current value of `current progress`.

### SetObjectiveGiver
`public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**Purpose:** Sets the value or state of `objective giver`.

### AddTarget
`public void AddTarget(MissionObjectiveTarget target)`

**Purpose:** Adds `target` to the current collection or state.

### RemoveTarget
`public void RemoveTarget(MissionObjectiveTarget target)`

**Purpose:** Removes `target` from the current collection or state.

### ClearTargets
`public void ClearTargets()`

**Purpose:** Handles logic related to `clear targets`.

### GetTargetsCopy
`public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy()`

**Purpose:** Gets the current value of `targets copy`.

### CreateGenericObjectiveBuilder
`public static MissionObjective.GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)`

**Purpose:** Creates a new `generic objective builder` instance or object.

### SetName
`public MissionObjective.GenericMissionObjectiveBuilder SetName(TextObject name)`

**Purpose:** Sets the value or state of `name`.

### SetDescription
`public MissionObjective.GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**Purpose:** Sets the value or state of `description`.

### SetObjectiveGiver
`public MissionObjective.GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**Purpose:** Sets the value or state of `objective giver`.

### SetInitialTargets
`public MissionObjective.GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**Purpose:** Sets the value or state of `initial targets`.

### SetIsActivationRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Sets the value or state of `is activation requirements met callback`.

### SetIsCompletionRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Sets the value or state of `is completion requirements met callback`.

### SetOnStartCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**Purpose:** Sets the value or state of `on start callback`.

### SetOnCompleteCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**Purpose:** Sets the value or state of `on complete callback`.

### SetOnTickCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**Purpose:** Sets the value or state of `on tick callback`.

### SetProgressCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**Purpose:** Sets the value or state of `progress callback`.

### Build
`public MissionObjective Build()`

**Purpose:** Handles logic related to `build`.

### SetIsActiveCallback
`public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**Purpose:** Sets the value or state of `is active callback`.

### SetGetGlobalPositionCallback
`public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**Purpose:** Sets the value or state of `get global position callback`.

## Usage Example

```csharp
// First obtain a GenericMissionObjectiveBuilder instance from game state, then call one of its public methods
var value = new GenericMissionObjectiveBuilder();
value.GetCurrentProgress();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
