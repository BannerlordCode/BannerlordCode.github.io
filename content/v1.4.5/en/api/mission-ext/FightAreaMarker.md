---
title: "FightAreaMarker"
description: "Auto-generated class reference for FightAreaMarker."
---
# FightAreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FightAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/FightAreaMarker.cs`

## Overview

`FightAreaMarker` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAgentsInRange
`public IEnumerable<Agent> GetAgentsInRange(Team team, bool humanOnly = true)`

**Purpose:** Reads and returns the agents in range value held by the this instance.

```csharp
// Obtain an instance of FightAreaMarker from the subsystem API first
FightAreaMarker fightAreaMarker = ...;
var result = fightAreaMarker.GetAgentsInRange(team, false);
```

### GetAgentsInRange
`public IEnumerable<Agent> GetAgentsInRange(BattleSideEnum side, bool humanOnly = true)`

**Purpose:** Reads and returns the agents in range value held by the this instance.

```csharp
// Obtain an instance of FightAreaMarker from the subsystem API first
FightAreaMarker fightAreaMarker = ...;
var result = fightAreaMarker.GetAgentsInRange(side, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FightAreaMarker fightAreaMarker = ...;
fightAreaMarker.GetAgentsInRange(team, false);
```

## See Also

- [Area Index](../)