<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamAISiegeDefender`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamAISiegeDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAISiegeDefender : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs`

## Overview

`TeamAISiegeDefender` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPositions` | `public List<ArcherPosition> ArcherPositions { get; }` |

## Key Methods

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** Called when the `unit added to formation for the first time` event is raised.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
var value = new TeamAISiegeDefender();
value.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Complete Class Catalog](../catalog)