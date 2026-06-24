<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PointOfInterests`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PointOfInterests

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public enum PointOfInterests`
**Area:** campaign-ext

## Overview

`PointOfInterests` lives in `SandBox.Missions.MissionLogics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `VisitPoint` |
| `CrossRoadPoint` |
| `GuardSpawnPoint` |

## Usage Example

```csharp
PointOfInterests example = PointOfInterests.VisitPoint;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
