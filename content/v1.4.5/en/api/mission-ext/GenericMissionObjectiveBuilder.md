---
title: "GenericMissionObjectiveBuilder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericMissionObjectiveBuilder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericMissionObjectiveBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveBuilder`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjective.cs`

## Overview

`GenericMissionObjectiveBuilder` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetName
`public GenericMissionObjectiveBuilder SetName(TextObject name)`

**Purpose:** Sets the value or state of `name`.

### SetDescription
`public GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**Purpose:** Sets the value or state of `description`.

### SetObjectiveGiver
`public GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**Purpose:** Sets the value or state of `objective giver`.

### SetInitialTargets
`public GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**Purpose:** Sets the value or state of `initial targets`.

### SetIsActivationRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Sets the value or state of `is activation requirements met callback`.

### SetIsCompletionRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**Purpose:** Sets the value or state of `is completion requirements met callback`.

### SetOnStartCallback
`public GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**Purpose:** Sets the value or state of `on start callback`.

### SetOnCompleteCallback
`public GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**Purpose:** Sets the value or state of `on complete callback`.

### SetOnTickCallback
`public GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**Purpose:** Sets the value or state of `on tick callback`.

### SetProgressCallback
`public GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**Purpose:** Sets the value or state of `progress callback`.

### Build
`public MissionObjective Build()`

**Purpose:** Handles logic related to `build`.

## Usage Example

```csharp
var value = new GenericMissionObjectiveBuilder();
value.SetName(name);
```

## See Also

- [Complete Class Catalog](../catalog)