---
title: "Ray"
description: "Auto-generated class reference for Ray."
---
# Ray

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Ray`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Ray.cs`

## Overview

`Ray` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Origin` | `public Vec3 Origin { get; }` |
| `Direction` | `public Vec3 Direction { get; }` |
| `MaxDistance` | `public float MaxDistance { get; }` |

## Key Methods

### Reset
`public void Reset(Vec3 origin, Vec3 direction, float maxDistance = float.MaxValue)`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of Ray from the subsystem API first
Ray ray = ...;
ray.Reset(origin, direction, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Ray ray = ...;
ray.Reset(origin, direction, 0);
```

## See Also

- [Area Index](../)