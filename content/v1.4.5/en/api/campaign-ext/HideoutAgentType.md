---
title: "HideoutAgentType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutAgentType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutAgentType

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public enum HideoutAgentType`
**Area:** campaign-ext

## Overview

`HideoutAgentType` lives in `SandBox.Missions.MissionLogics.Hideout`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Player` |
| `Boss` |
| `Ally` |

## Usage Example

```csharp
HideoutAgentType example = HideoutAgentType.Player;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
