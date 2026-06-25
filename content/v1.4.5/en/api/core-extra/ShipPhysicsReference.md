---
title: "ShipPhysicsReference"
description: "Auto-generated class reference for ShipPhysicsReference."
---
# ShipPhysicsReference

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipPhysicsReference : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ShipPhysicsReference.cs`

## Overview

`ShipPhysicsReference` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LinearDragTerm` | `public LinearFrictionTerm LinearDragTerm { get; }` |
| `LinearDampingTerm` | `public LinearFrictionTerm LinearDampingTerm { get; }` |
| `ConstantLinearDampingTerm` | `public LinearFrictionTerm ConstantLinearDampingTerm { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of ShipPhysicsReference from the subsystem API first
ShipPhysicsReference shipPhysicsReference = ...;
shipPhysicsReference.Deserialize(objectManager, node);
```

### GetDefaultWaterDensity
`public static float GetDefaultWaterDensity()`

**Purpose:** Reads and returns the `default water density` value held by the current object.

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