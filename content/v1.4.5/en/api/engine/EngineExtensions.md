---
title: "EngineExtensions"
description: "Auto-generated class reference for EngineExtensions."
---
# EngineExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/EngineExtensions.cs`

## Overview

`EngineExtensions` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToWorldPosition
`public static WorldPosition ToWorldPosition(this Vec3 vec3, Scene scene)`

**Purpose:** Executes the ToWorldPosition logic.

```csharp
// Static call; no instance required
EngineExtensions.ToWorldPosition(vec3, scene);
```

## Usage Example

```csharp
EngineExtensions.ToWorldPosition(vec3, scene);
```

## See Also

- [Area Index](../)