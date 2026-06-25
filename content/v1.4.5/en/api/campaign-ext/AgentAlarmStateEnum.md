---
title: "AgentAlarmStateEnum"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentAlarmStateEnum`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentAlarmStateEnum

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public enum AgentAlarmStateEnum`
**Area:** campaign-ext

## Overview

`AgentAlarmStateEnum` lives in `SandBox.ViewModelCollection.Missions.MainAgentDetection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `Alarmed` |
| `Cautious` |
| `PatrollingCautious` |
| `Suspicious` |

## Usage Example

```csharp
AgentAlarmStateEnum example = AgentAlarmStateEnum.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
