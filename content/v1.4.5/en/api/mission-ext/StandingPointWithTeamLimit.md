---
title: "StandingPointWithTeamLimit"
description: "Auto-generated class reference for StandingPointWithTeamLimit."
---
# StandingPointWithTeamLimit

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithTeamLimit : StandingPoint`
**Base:** `StandingPoint`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithTeamLimit.cs`

## Overview

`StandingPointWithTeamLimit` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsableTeam` | `public Team UsableTeam { get; set; }` |

## Key Methods

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of StandingPointWithTeamLimit from the subsystem API first
StandingPointWithTeamLimit standingPointWithTeamLimit = ...;
var result = standingPointWithTeamLimit.IsDisabledForAgent(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StandingPointWithTeamLimit standingPointWithTeamLimit = ...;
standingPointWithTeamLimit.IsDisabledForAgent(agent);
```

## See Also

- [Area Index](../)