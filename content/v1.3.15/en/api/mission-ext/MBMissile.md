---
title: "MBMissile"
description: "Auto-generated class reference for MBMissile."
---
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

**Purpose:** **Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of MBMissile from the subsystem API first
MBMissile mBMissile = ...;
var result = mBMissile.GetPosition();
```

### GetOldPosition
`public Vec3 GetOldPosition()`

**Purpose:** **Purpose:** Reads and returns the old position value held by the this instance.

```csharp
// Obtain an instance of MBMissile from the subsystem API first
MBMissile mBMissile = ...;
var result = mBMissile.GetOldPosition();
```

### GetVelocity
`public Vec3 GetVelocity()`

**Purpose:** **Purpose:** Reads and returns the velocity value held by the this instance.

```csharp
// Obtain an instance of MBMissile from the subsystem API first
MBMissile mBMissile = ...;
var result = mBMissile.GetVelocity();
```

### SetVelocity
`public void SetVelocity(in Vec3 velocity)`

**Purpose:** **Purpose:** Assigns a new value to velocity and updates the object's internal state.

```csharp
// Obtain an instance of MBMissile from the subsystem API first
MBMissile mBMissile = ...;
mBMissile.SetVelocity(velocity);
```

### GetHasRigidBody
`public bool GetHasRigidBody()`

**Purpose:** **Purpose:** Reads and returns the has rigid body value held by the this instance.

```csharp
// Obtain an instance of MBMissile from the subsystem API first
MBMissile mBMissile = ...;
var result = mBMissile.GetHasRigidBody();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MBMissile instance = ...;
```

## See Also

- [Area Index](../)