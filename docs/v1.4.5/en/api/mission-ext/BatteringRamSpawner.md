<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BatteringRamSpawner`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BatteringRamSpawner

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BatteringRamSpawner : SpawnerBase`
**Base:** `SpawnerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Siege/BatteringRamSpawner.cs`

## Overview

`BatteringRamSpawner` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AssignParameters
`public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**Purpose:** Handles logic related to `assign parameters`.

## Usage Example

```csharp
var value = new BatteringRamSpawner();
value.AssignParameters(_spawnerMissionHelper);
```

## See Also

- [Complete Class Catalog](../catalog)