<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMissionAgentSpawnLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs`

## Overview

`IMissionAgentSpawnLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IMissionAgentSpawnLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMissionAgentSpawnLogic implementation = GetMissionAgentSpawnLogicImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)