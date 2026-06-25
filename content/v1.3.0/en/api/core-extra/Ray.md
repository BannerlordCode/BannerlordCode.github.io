---
title: "Ray"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Ray`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Ray

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Ray`
**Base:** none
**File:** `TaleWorlds.Library/Ray.cs`

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
| `EndPoint` | `public Vec3 EndPoint { get; }` |

## Key Methods

### Reset
`public void Reset(Vec3 origin, Vec3 direction, float maxDistance = 3.4028235E+38f)`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new Ray();
value.Reset(origin, direction, 0);
```

## See Also

- [Complete Class Catalog](../catalog)