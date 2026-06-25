---
title: "AgentVisualsCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVisualsCreator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentVisualsCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsCreator : IAgentVisualCreator`
**Base:** `IAgentVisualCreator`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisualsCreator.cs`

## Overview

`AgentVisualsCreator` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
var value = new AgentVisualsCreator();
value.Create(data, "example", false, false);
```

## See Also

- [Complete Class Catalog](../catalog)