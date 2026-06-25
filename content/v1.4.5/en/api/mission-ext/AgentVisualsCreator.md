---
title: "AgentVisualsCreator"
description: "Auto-generated class reference for AgentVisualsCreator."
---
# AgentVisualsCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsCreator : IAgentVisualCreator`
**Base:** `IAgentVisualCreator`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisualsCreator.cs`

## Overview

`AgentVisualsCreator` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Obtain an instance of AgentVisualsCreator from the subsystem API first
AgentVisualsCreator agentVisualsCreator = ...;
var result = agentVisualsCreator.Create(data, "example", false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AgentVisualsCreator agentVisualsCreator = ...;
agentVisualsCreator.Create(data, "example", false, false);
```

## See Also

- [Area Index](../)