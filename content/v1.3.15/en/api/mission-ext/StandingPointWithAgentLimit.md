---
title: "StandingPointWithAgentLimit"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StandingPointWithAgentLimit`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StandingPointWithAgentLimit

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithAgentLimit : StandingPoint`
**Base:** `StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs`

## Overview

`StandingPointWithAgentLimit` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddValidAgent
`public void AddValidAgent(Agent agent)`

**Purpose:** Adds `valid agent` to the current collection or state.

### ClearValidAgents
`public void ClearValidAgents()`

**Purpose:** Handles logic related to `clear valid agents`.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

## Usage Example

```csharp
var value = new StandingPointWithAgentLimit();
value.AddValidAgent(agent);
```

## See Also

- [Complete Class Catalog](../catalog)