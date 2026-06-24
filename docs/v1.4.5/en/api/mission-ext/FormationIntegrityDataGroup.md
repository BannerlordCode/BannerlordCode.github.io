<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationIntegrityDataGroup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationIntegrityDataGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationIntegrityDataGroup`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## Overview

`FormationIntegrityDataGroup` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FormationIntegrityDataGroup
`public struct FormationIntegrityDataGroup(Vec2 averageVelocityExcludeFarAgents, float deviationOfPositionsExcludeFarAgents, float maxDeviationOfPositionExcludeFarAgents, float averageMaxUnlimitedSpeedExcludeFarAgents)`

**Purpose:** Handles logic related to `formation integrity data group`.

## Usage Example

```csharp
var value = new FormationIntegrityDataGroup();
value.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)