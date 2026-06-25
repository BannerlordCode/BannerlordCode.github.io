---
title: "StandingPointWithAgentLimit"
description: "Auto-generated class reference for StandingPointWithAgentLimit."
---
# StandingPointWithAgentLimit

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithAgentLimit : StandingPoint`
**Base:** `StandingPoint`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs`

## Overview

`StandingPointWithAgentLimit` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddValidAgent
`public void AddValidAgent(Agent agent)`

**Purpose:** Adds `valid agent` to the current collection or state.

```csharp
// Obtain an instance of StandingPointWithAgentLimit from the subsystem API first
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
standingPointWithAgentLimit.AddValidAgent(agent);
```

### ClearValidAgents
`public void ClearValidAgents()`

**Purpose:** Removes all `valid agents` from the current object.

```csharp
// Obtain an instance of StandingPointWithAgentLimit from the subsystem API first
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
standingPointWithAgentLimit.ClearValidAgents();
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the current object is in the `disabled for agent` state or condition.

```csharp
// Obtain an instance of StandingPointWithAgentLimit from the subsystem API first
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
var result = standingPointWithAgentLimit.IsDisabledForAgent(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
standingPointWithAgentLimit.AddValidAgent(agent);
```

## See Also

- [Area Index](../)