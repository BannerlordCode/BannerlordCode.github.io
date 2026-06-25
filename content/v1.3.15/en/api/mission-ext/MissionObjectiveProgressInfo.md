---
title: "MissionObjectiveProgressInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveProgressInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveProgressInfo

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionObjectiveProgressInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjectiveProgressInfo.cs`

## Overview

`MissionObjectiveProgressInfo` lives in `TaleWorlds.MountAndBlade.Missions.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasProgress` | `public bool HasProgress { get; }` |

## Usage Example

```csharp
var value = new MissionObjectiveProgressInfo();
```

## See Also

- [Complete Class Catalog](../catalog)