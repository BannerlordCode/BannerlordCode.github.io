<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveTarget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveTarget

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjectiveTarget`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjectiveTarget.cs`

## Overview

`MissionObjectiveTarget` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsActive
`public abstract bool IsActive()`

**Purpose:** Handles logic related to `is active`.

### GetName
`public abstract TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetGlobalPosition
`public abstract Vec3 GetGlobalPosition()`

**Purpose:** Gets the current value of `global position`.

## Usage Example

```csharp
var implementation = new CustomMissionObjectiveTarget();
```

## See Also

- [Complete Class Catalog](../catalog)