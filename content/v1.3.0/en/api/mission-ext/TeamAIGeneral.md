---
title: "TeamAIGeneral"
description: "Auto-generated class reference for TeamAIGeneral."
---
# TeamAIGeneral

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAIGeneral : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAIGeneral.cs`

## Overview

`TeamAIGeneral` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** Invoked when the unit added to formation for the first time event is raised.

```csharp
// Obtain an instance of TeamAIGeneral from the subsystem API first
TeamAIGeneral teamAIGeneral = ...;
teamAIGeneral.OnUnitAddedToFormationForTheFirstTime(formation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamAIGeneral teamAIGeneral = ...;
teamAIGeneral.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Area Index](../)