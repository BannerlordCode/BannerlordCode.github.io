---
title: "IMissionProgressTracker"
description: "Auto-generated class reference for IMissionProgressTracker."
---
# IMissionProgressTracker

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public interface IMissionProgressTracker`
**Base:** none
**File:** `SandBox/Missions/MissionLogics/IMissionProgressTracker.cs`

## Overview

`IMissionProgressTracker` lives in `SandBox.Missions.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMissionProgressTracker service = ...;
```

## See Also

- [Area Index](../)