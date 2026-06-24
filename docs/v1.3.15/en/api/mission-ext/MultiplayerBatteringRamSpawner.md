<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBatteringRamSpawner`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBatteringRamSpawner

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBatteringRamSpawner : BatteringRamSpawner`
**Base:** `BatteringRamSpawner`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/MultiplayerBatteringRamSpawner.cs`

## Overview

`MultiplayerBatteringRamSpawner` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AssignParameters
`public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**Purpose:** Handles logic related to `assign parameters`.

## Usage Example

```csharp
var value = new MultiplayerBatteringRamSpawner();
value.AssignParameters(_spawnerMissionHelper);
```

## See Also

- [Complete Class Catalog](../catalog)