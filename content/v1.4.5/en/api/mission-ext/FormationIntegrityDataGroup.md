---
title: "FormationIntegrityDataGroup"
description: "Auto-generated class reference for FormationIntegrityDataGroup."
---
# FormationIntegrityDataGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationIntegrityDataGroup`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## Overview

`FormationIntegrityDataGroup` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FormationIntegrityDataGroup
`public struct FormationIntegrityDataGroup(Vec2 averageVelocityExcludeFarAgents, float deviationOfPositionsExcludeFarAgents, float maxDeviationOfPositionExcludeFarAgents, float averageMaxUnlimitedSpeedExcludeFarAgents)`

**Purpose:** **Purpose:** Formats ion integrity data group into a string suitable for display or storage.

```csharp
// Obtain an instance of FormationIntegrityDataGroup from the subsystem API first
FormationIntegrityDataGroup formationIntegrityDataGroup = ...;
var result = formationIntegrityDataGroup.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationIntegrityDataGroup formationIntegrityDataGroup = ...;
formationIntegrityDataGroup.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

## See Also

- [Area Index](../)