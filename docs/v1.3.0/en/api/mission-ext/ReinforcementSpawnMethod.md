<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReinforcementSpawnMethod`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ReinforcementSpawnMethod

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ReinforcementSpawnMethod`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionSpawnSettings.cs`

## Overview

`ReinforcementSpawnMethod` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ReinforcementSpawnMethod example = ReinforcementSpawnMethod.Value;
```

## See Also

- [Complete Class Catalog](../catalog)