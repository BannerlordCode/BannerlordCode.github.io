---
title: "GenericMissionObjective"
description: "Auto-generated class reference for GenericMissionObjective."
---
# GenericMissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class GenericMissionObjective : MissionObjective`
**Base:** `MissionObjective`
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjective.cs`

## Overview

`GenericMissionObjective` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UniqueId` | `public override string UniqueId { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### GetCurrentProgress
`public override MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Reads and returns the `current progress` value held by the current object.

```csharp
// Obtain an instance of GenericMissionObjective from the subsystem API first
GenericMissionObjective genericMissionObjective = ...;
var result = genericMissionObjective.GetCurrentProgress();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericMissionObjective genericMissionObjective = ...;
genericMissionObjective.GetCurrentProgress();
```

## See Also

- [Area Index](../)