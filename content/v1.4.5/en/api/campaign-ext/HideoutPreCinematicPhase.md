---
title: "HideoutPreCinematicPhase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutPreCinematicPhase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutPreCinematicPhase

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public enum HideoutPreCinematicPhase`
**Area:** campaign-ext

## Overview

`HideoutPreCinematicPhase` lives in `SandBox.Missions.MissionLogics.Hideout`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NotStarted` |
| `InitializeFormations` |
| `StopFormations` |
| `InitializeAgents` |
| `MoveAgents` |

## Usage Example

```csharp
HideoutPreCinematicPhase example = HideoutPreCinematicPhase.NotStarted;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
