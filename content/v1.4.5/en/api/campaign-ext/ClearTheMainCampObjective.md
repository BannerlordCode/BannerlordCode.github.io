---
title: "ClearTheMainCampObjective"
description: "Auto-generated class reference for ClearTheMainCampObjective."
---
# ClearTheMainCampObjective

**Namespace:** SandBox.Missions.MissionLogics.Hideout.Objectives
**Module:** SandBox.Missions
**Type:** `public class ClearTheMainCampObjective : MissionObjective`
**Base:** `MissionObjective`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout.Objectives/ClearTheMainCampObjective.cs`

## Overview

`ClearTheMainCampObjective` lives in `SandBox.Missions.MissionLogics.Hideout.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics.Hideout.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCurrentProgress
`public override MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Reads and returns the current progress value held by the this instance.

```csharp
// Obtain an instance of ClearTheMainCampObjective from the subsystem API first
ClearTheMainCampObjective clearTheMainCampObjective = ...;
var result = clearTheMainCampObjective.GetCurrentProgress();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClearTheMainCampObjective clearTheMainCampObjective = ...;
clearTheMainCampObjective.GetCurrentProgress();
```

## See Also

- [Area Index](../)