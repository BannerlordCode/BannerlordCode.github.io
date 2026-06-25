---
title: "MBMissile"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMissile`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMissile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBMissile`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBMissile.cs`

## Overview

`MBMissile` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; set; }` |

## Key Methods

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

### GetOldPosition
`public Vec3 GetOldPosition()`

**Purpose:** Gets the current value of `old position`.

### GetVelocity
`public Vec3 GetVelocity()`

**Purpose:** Gets the current value of `velocity`.

### SetVelocity
`public void SetVelocity(in Vec3 velocity)`

**Purpose:** Sets the value or state of `velocity`.

### GetHasRigidBody
`public bool GetHasRigidBody()`

**Purpose:** Gets the current value of `has rigid body`.

## Usage Example

```csharp
var implementation = new CustomMBMissile();
```

## See Also

- [Complete Class Catalog](../catalog)