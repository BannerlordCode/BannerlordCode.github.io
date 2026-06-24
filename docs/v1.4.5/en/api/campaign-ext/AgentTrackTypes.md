<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentTrackTypes`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentTrackTypes

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public enum AgentTrackTypes`
**Area:** campaign-ext

## Overview

`AgentTrackTypes` lives in `SandBox.Missions.MissionLogics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `AvailableIssue` |
| `ActiveIssue` |
| `ActiveStoryQuest` |
| `TrackedIssue` |

## Usage Example

```csharp
AgentTrackTypes example = AgentTrackTypes.AvailableIssue;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
