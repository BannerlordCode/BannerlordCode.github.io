---
title: "FightAreaMarker"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FightAreaMarker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FightAreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FightAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/FightAreaMarker.cs`

## Overview

`FightAreaMarker` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAgentsInRange
`public IEnumerable<Agent> GetAgentsInRange(Team team, bool humanOnly = true)`

**Purpose:** Gets the current value of `agents in range`.

### GetAgentsInRange
`public IEnumerable<Agent> GetAgentsInRange(BattleSideEnum side, bool humanOnly = true)`

**Purpose:** Gets the current value of `agents in range`.

## Usage Example

```csharp
var value = new FightAreaMarker();
value.GetAgentsInRange(team, false);
```

## See Also

- [Complete Class Catalog](../catalog)