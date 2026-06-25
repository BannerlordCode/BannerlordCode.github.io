---
title: "ShipPhysicsReference"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipPhysicsReference`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShipPhysicsReference

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipPhysicsReference : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ShipPhysicsReference.cs`

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

**Purpose:** Handles logic related to `deserialize`.

### GetDefaultWaterDensity
`public static float GetDefaultWaterDensity()`

**Purpose:** Gets the current value of `default water density`.

## Usage Example

```csharp
var value = new ShipPhysicsReference();
value.Deserialize(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)