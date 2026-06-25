---
title: "SceneType"
description: "Auto-generated class reference for SceneType."
---
# SceneType

**Namespace:** SandBox.View.Missions.SandBox
**Module:** SandBox.View
**Type:** `public enum SceneType`
**Base:** none
**File:** `SandBox.View/Missions/SandBox/SpawnPointUnits.cs`

## Overview

`SceneType` lives in `SandBox.View.Missions.SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Missions.SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SceneType instance = ...;
```

## See Also

- [Area Index](../)