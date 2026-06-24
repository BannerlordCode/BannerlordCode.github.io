<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StandingPointWithTeamLimit`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StandingPointWithTeamLimit

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithTeamLimit : StandingPoint`
**Base:** `StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithTeamLimit.cs`

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

**Purpose:** Handles logic related to `is disabled for agent`.

## Usage Example

```csharp
var value = new StandingPointWithTeamLimit();
value.IsDisabledForAgent(agent);
```

## See Also

- [Complete Class Catalog](../catalog)