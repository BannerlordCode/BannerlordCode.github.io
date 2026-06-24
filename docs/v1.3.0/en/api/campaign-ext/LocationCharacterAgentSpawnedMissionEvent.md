<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationCharacterAgentSpawnedMissionEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocationCharacterAgentSpawnedMissionEvent

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LocationCharacterAgentSpawnedMissionEvent : EventBase`
**Base:** `EventBase`
**File:** `SandBox/Missions/MissionLogics/LocationCharacterAgentSpawnedMissionEvent.cs`

## Overview

`LocationCharacterAgentSpawnedMissionEvent` lives in `SandBox.Missions.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new LocationCharacterAgentSpawnedMissionEvent();
```

## See Also

- [Complete Class Catalog](../catalog)