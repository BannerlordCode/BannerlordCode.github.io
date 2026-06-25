---
title: "MissionShipObject"
description: "Auto-generated class reference for MissionShipObject."
---
# MissionShipObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionShipObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/MissionShipObject.cs`

## Overview

`MissionShipObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Prefab` | `public string Prefab { get; }` |
| `DeploymentArea` | `public Vec2 DeploymentArea { get; }` |
| `Mass` | `public float Mass { get; }` |
| `FloatingForceMultiplier` | `public float FloatingForceMultiplier { get; }` |
| `MaximumSubmergedVolumeRatio` | `public float MaximumSubmergedVolumeRatio { get; }` |
| `RudderStockPosition` | `public Vec3 RudderStockPosition { get; }` |
| `MaxLateralDragShift` | `public float MaxLateralDragShift { get; }` |
| `LateralDragShiftCriticalAngle` | `public float LateralDragShiftCriticalAngle { get; }` |
| `PhysicsReference` | `public ShipPhysicsReference PhysicsReference { get; }` |
| `MomentOfInertiaMultiplier` | `public Vec3 MomentOfInertiaMultiplier { get; }` |
| `LinearFrictionMultiplier` | `public LinearFrictionTerm LinearFrictionMultiplier { get; }` |
| `AngularFrictionMultiplier` | `public Vec3 AngularFrictionMultiplier { get; }` |
| `TorqueMultiplierOfLateralBuoyantForces` | `public float TorqueMultiplierOfLateralBuoyantForces { get; }` |
| `TorqueMultiplierOfVerticalBuoyantForces` | `public Vec3 TorqueMultiplierOfVerticalBuoyantForces { get; }` |
| `OarsmenForceMultiplier` | `public float OarsmenForceMultiplier { get; }` |
| `OarsTipSpeed` | `public float OarsTipSpeed { get; }` |
| `OarFrictionMultiplier` | `public float OarFrictionMultiplier { get; }` |
| `Sails` | `public MBReadOnlyList<ShipSail> Sails { get; }` |
| `OarCount` | `public int OarCount { get; }` |
| `RudderBladeLength` | `public float RudderBladeLength { get; }` |
| `RudderBladeHeight` | `public float RudderBladeHeight { get; }` |
| `RudderDeflectionCoef` | `public float RudderDeflectionCoef { get; }` |
| `RudderRotationMax` | `public float RudderRotationMax { get; }` |
| `RudderRotationRate` | `public float RudderRotationRate { get; }` |
| `RudderForceMax` | `public float RudderForceMax { get; }` |
| `MaxLinearSpeed` | `public float MaxLinearSpeed { get; }` |
| `MaxLinearAccel` | `public float MaxLinearAccel { get; }` |
| `MaxAngularSpeed` | `public float MaxAngularSpeed { get; }` |
| `MaxAngularAccel` | `public float MaxAngularAccel { get; }` |
| `PartialHitPointsRatio` | `public float PartialHitPointsRatio { get; }` |
| `HasSails` | `public bool HasSails { get; }` |
| `HasValidRudderStockPosition` | `public bool HasValidRudderStockPosition { get; }` |
| `ShipPhysicsReferenceId` | `public string ShipPhysicsReferenceId { get; }` |
| `BowAngleLimitFromCenterline` | `public float BowAngleLimitFromCenterline { get; }` |

## Key Methods

### SetPhysicsReference
`public void SetPhysicsReference(ShipPhysicsReference physicsReference)`

**Purpose:** Assigns a new value to physics reference and updates the object's internal state.

```csharp
// Obtain an instance of MissionShipObject from the subsystem API first
MissionShipObject missionShipObject = ...;
missionShipObject.SetPhysicsReference(physicsReference);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of MissionShipObject from the subsystem API first
MissionShipObject missionShipObject = ...;
missionShipObject.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionShipObject missionShipObject = ...;
missionShipObject.SetPhysicsReference(physicsReference);
```

## See Also

- [Area Index](../)