---
title: "MovementPath"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MovementPath`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MovementPath

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MovementPath`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MovementPath.cs`

## Overview

`MovementPath` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialDirection` | `public Vec2 InitialDirection { get; }` |
| `FinalDirection` | `public Vec2 FinalDirection { get; }` |
| `Destination` | `public Vec3 Destination { get; }` |

## Key Methods

### TickDebug
`public void TickDebug(Vec2 position)`

**Purpose:** Handles logic related to `tick debug`.

## Usage Example

```csharp
var value = new MovementPath();
value.TickDebug(position);
```

## See Also

- [Complete Class Catalog](../catalog)