---
title: "TeamAISallyOutDefender"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamAISallyOutDefender`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamAISallyOutDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAISallyOutDefender : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAISallyOutDefender.cs`

## Overview

`TeamAISallyOutDefender` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### CalculateSallyOutReferencePosition
`public Vec3 CalculateSallyOutReferencePosition(FormationAI.BehaviorSide side)`

**Purpose:** Handles logic related to `calculate sally out reference position`.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
var value = new TeamAISallyOutDefender();
value.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Complete Class Catalog](../catalog)