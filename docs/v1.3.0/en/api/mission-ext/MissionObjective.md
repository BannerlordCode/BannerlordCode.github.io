<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjective`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
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
| `ObjectiveGiver` | `public virtual BasicCharacterObject ObjectiveGiver { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## Key Methods

### ForceComplete
`public void ForceComplete()`

**Purpose:** Handles logic related to `force complete`.

### GetIsActivationRequirementsMet
`public bool GetIsActivationRequirementsMet()`

**Purpose:** Gets the current value of `is activation requirements met`.

### GetIsCompletionRequirementsMet
`public bool GetIsCompletionRequirementsMet()`

**Purpose:** Gets the current value of `is completion requirements met`.

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Gets the current value of `current progress`.

### GetTargets
`public abstract IMissionObjectiveTarget GetTargets()`

**Purpose:** Gets the current value of `targets`.

## Usage Example

```csharp
var implementation = new CustomMissionObjective();
```

## See Also

- [Complete Class Catalog](../catalog)