<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionShipObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionShipObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MissionShipObject` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### SetPhysicsReference

```csharp
public void SetPhysicsReference(ShipPhysicsReference physicsReference)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)