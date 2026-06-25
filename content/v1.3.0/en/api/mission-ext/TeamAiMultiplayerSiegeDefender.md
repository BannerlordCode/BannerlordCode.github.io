---
title: "TeamAiMultiplayerSiegeDefender"
description: "Auto-generated class reference for TeamAiMultiplayerSiegeDefender."
---
# TeamAiMultiplayerSiegeDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAiMultiplayerSiegeDefender : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAiMultiplayerSiegeDefender.cs`

## Overview

`TeamAiMultiplayerSiegeDefender` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** **Purpose:** Invoked when the unit added to formation for the first time event is raised.

```csharp
// Obtain an instance of TeamAiMultiplayerSiegeDefender from the subsystem API first
TeamAiMultiplayerSiegeDefender teamAiMultiplayerSiegeDefender = ...;
teamAiMultiplayerSiegeDefender.OnUnitAddedToFormationForTheFirstTime(formation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamAiMultiplayerSiegeDefender teamAiMultiplayerSiegeDefender = ...;
teamAiMultiplayerSiegeDefender.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Area Index](../)