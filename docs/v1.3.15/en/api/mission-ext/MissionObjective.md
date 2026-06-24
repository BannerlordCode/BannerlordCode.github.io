<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjective`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

### SetGetNameCallback
`public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**Purpose:** Sets the value or state of `get name callback`.

### Build
`public MissionObjectiveTarget<T> Build()`

**Purpose:** Handles logic related to `build`.

## Usage Example

```csharp
var implementation = new CustomMissionObjective();
```

## See Also

- [Complete Class Catalog](../catalog)