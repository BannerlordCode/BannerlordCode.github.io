---
title: "MissionShipObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionShipObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionShipObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionShipObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MissionShipObject.cs`

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
| `ShipPhysicsReferenceId` | `public string ShipPhysicsReferenceId { get; }` |
| `BowAngleLimitFromCenterline` | `public float BowAngleLimitFromCenterline { get; }` |
| `LandingDepth` | `public float LandingDepth { get; }` |

## Key Methods

### SetPhysicsReference
`public void SetPhysicsReference(ShipPhysicsReference physicsReference)`

**Purpose:** Sets the value or state of `physics reference`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new MissionShipObject();
value.SetPhysicsReference(physicsReference);
```

## See Also

- [Complete Class Catalog](../catalog)