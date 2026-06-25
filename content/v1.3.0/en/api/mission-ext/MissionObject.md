---
title: "MissionObject"
description: "Auto-generated class reference for MissionObject."
---
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionObject.cs`

## Overview

`MissionObject` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public MissionObjectId Id { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime { get; }` |

## Key Methods

### SetAbilityOfFaces
`public virtual void SetAbilityOfFaces(bool enabled)`

**Purpose:** **Purpose:** Assigns a new value to ability of faces and updates the object's internal state.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.SetAbilityOfFaces(false);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
var result = missionObject.GetHashCode();
```

### AfterMissionStart
`public virtual void AfterMissionStart()`

**Purpose:** **Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.AfterMissionStart();
```

### OnMissionEnded
`public virtual void OnMissionEnded()`

**Purpose:** **Purpose:** Invoked when the mission ended event is raised.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.OnMissionEnded();
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.OnDeploymentFinished();
```

### SetEnabled
`public void SetEnabled(bool isParentObject = false)`

**Purpose:** **Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.SetEnabled(false);
```

### SetEnabledAndMakeVisible
`public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)`

**Purpose:** **Purpose:** Assigns a new value to enabled and make visible and updates the object's internal state.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.SetEnabledAndMakeVisible(false, false);
```

### SetDisabled
`public void SetDisabled(bool isParentObject = false)`

**Purpose:** **Purpose:** Assigns a new value to disabled and updates the object's internal state.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.SetDisabled(false);
```

### SetDisabledAndMakeInvisible
`public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)`

**Purpose:** **Purpose:** Assigns a new value to disabled and make invisible and updates the object's internal state.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.SetDisabledAndMakeInvisible(false, false);
```

### OnEndMission
`public virtual void OnEndMission()`

**Purpose:** **Purpose:** Invoked when the end mission event is raised.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.OnEndMission();
```

### AddStuckMissile
`public virtual void AddStuckMissile(GameEntity missileEntity)`

**Purpose:** **Purpose:** Adds stuck missile to the current collection or state.

```csharp
// Obtain an instance of MissionObject from the subsystem API first
MissionObject missionObject = ...;
missionObject.AddStuckMissile(missileEntity);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionObject instance = ...;
```

## See Also

- [Area Index](../)