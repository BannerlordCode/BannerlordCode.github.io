---
title: "ShipPhysicsReference"
description: "Auto-generated class reference for ShipPhysicsReference."
---
# ShipPhysicsReference

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipPhysicsReference : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipPhysicsReference.cs`

## Overview

`ShipPhysicsReference` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LinearDragTerm` | `public LinearFrictionTerm LinearDragTerm { get; }` |
| `AngularDragTerm` | `public Vec3 AngularDragTerm { get; }` |
| `LinearDampingTerm` | `public LinearFrictionTerm LinearDampingTerm { get; }` |
| `AngularDampingTerm` | `public Vec3 AngularDampingTerm { get; }` |
| `ConstantLinearDampingTerm` | `public LinearFrictionTerm ConstantLinearDampingTerm { get; }` |
| `ConstantAngularDampingTerm` | `public Vec3 ConstantAngularDampingTerm { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ShipPhysicsReference from the subsystem API first
ShipPhysicsReference shipPhysicsReference = ...;
shipPhysicsReference.Deserialize(objectManager, node);
```

### GetDefaultWaterDensity
`public static float GetDefaultWaterDensity()`

**Purpose:** Reads and returns the default water density value held by the this instance.

```csharp
// Static call; no instance required
ShipPhysicsReference.GetDefaultWaterDensity();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipPhysicsReference shipPhysicsReference = ...;
shipPhysicsReference.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)