---
title: "GenericMissionObjectiveBuilder"
description: "Auto-generated class reference for GenericMissionObjectiveBuilder."
---
# GenericMissionObjectiveBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveBuilder`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## Overview

`GenericMissionObjectiveBuilder` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetName
`public MissionObjective.GenericMissionObjectiveBuilder SetName(TextObject name)`

**Purpose:** Assigns a new value to `name` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetName(name);
```

### SetDescription
`public MissionObjective.GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**Purpose:** Assigns a new value to `description` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetDescription(description);
```

### SetObjectiveGiver
`public MissionObjective.GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**Purpose:** Assigns a new value to `objective giver` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetObjectiveGiver(objectiveGiver);
```

### SetInitialTargets
`public MissionObjective.GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**Purpose:** Assigns a new value to `initial targets` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetInitialTargets(targets);
```

### SetIsActivationRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Assigns a new value to `is activation requirements met callback` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetIsActivationRequirementsMetCallback(func<MissionObjective, false);
```

### SetIsCompletionRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Assigns a new value to `is completion requirements met callback` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetIsCompletionRequirementsMetCallback(func<MissionObjective, false);
```

### SetOnStartCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**Purpose:** Assigns a new value to `on start callback` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetOnStartCallback(callback);
```

### SetOnCompleteCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**Purpose:** Assigns a new value to `on complete callback` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetOnCompleteCallback(callback);
```

### SetOnTickCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**Purpose:** Assigns a new value to `on tick callback` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetOnTickCallback(action<MissionObjective, 0);
```

### SetProgressCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**Purpose:** Assigns a new value to `progress callback` and updates the object's internal state.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetProgressCallback(func<MissionObjective, callback);
```

### Build
`public MissionObjective Build()`

**Purpose:** Builds an instance or representation of the current object.

```csharp
// Obtain an instance of GenericMissionObjectiveBuilder from the subsystem API first
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.Build();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
genericMissionObjectiveBuilder.SetName(name);
```

## See Also

- [Area Index](../)