---
title: "MissionShipObject"
description: "MissionShipObject: a public class in TaleWorlds.Core, inheriting MBObjectBase; 39 exposed members (2 methods, 35 properties, 0 fields). Source: TaleWorlds.Core/MissionShipObject.cs."
---
# MissionShipObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MissionShipObject : MBObjectBase`
**File:** `TaleWorlds.Core/MissionShipObject.cs`

## Overview

MissionShipObject lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MissionShipObject.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is MissionShipObject → MBObjectBase. It exposes 39 public/protected members: 2 methods, 35 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionShipObject is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MissionShipObject → MBObjectBase. The surface is property-led (properties 35/39, methods 2/39), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MissionShipObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Prefab` | `public string Prefab` | property |
| `DeploymentArea` | `public Vec2 DeploymentArea` | property |
| `Mass` | `public float Mass` | property |
| `FloatingForceMultiplier` | `public float FloatingForceMultiplier` | property |
| `MaximumSubmergedVolumeRatio` | `public float MaximumSubmergedVolumeRatio` | property |
| `RudderStockPosition` | `public Vec3 RudderStockPosition` | property |
| `MaxLateralDragShift` | `public float MaxLateralDragShift` | property |
| `LateralDragShiftCriticalAngle` | `public float LateralDragShiftCriticalAngle` | property |
| `PhysicsReference` | `public ShipPhysicsReference PhysicsReference` | property |
| `MomentOfInertiaMultiplier` | `public Vec3 MomentOfInertiaMultiplier` | property |
| `LinearFrictionMultiplier` | `public LinearFrictionTerm LinearFrictionMultiplier` | property |
| `AngularFrictionMultiplier` | `public Vec3 AngularFrictionMultiplier` | property |
| `TorqueMultiplierOfLateralBuoyantForces` | `public float TorqueMultiplierOfLateralBuoyantForces` | property |
| `TorqueMultiplierOfVerticalBuoyantForces` | `public Vec3 TorqueMultiplierOfVerticalBuoyantForces` | property |
| `OarsmenForceMultiplier` | `public float OarsmenForceMultiplier` | property |
| `OarsTipSpeed` | `public float OarsTipSpeed` | property |
| `OarFrictionMultiplier` | `public float OarFrictionMultiplier` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipSail>Sails` | property |
| `OarCount` | `public int OarCount` | property |
| `RudderBladeLength` | `public float RudderBladeLength` | property |
| `RudderBladeHeight` | `public float RudderBladeHeight` | property |
| `RudderDeflectionCoef` | `public float RudderDeflectionCoef` | property |
| `RudderRotationMax` | `public float RudderRotationMax` | property |
| `RudderRotationRate` | `public float RudderRotationRate` | property |
| `RudderForceMax` | `public float RudderForceMax` | property |
| `MaxLinearSpeed` | `public float MaxLinearSpeed` | property |
| `MaxLinearAccel` | `public float MaxLinearAccel` | property |
| `MaxAngularSpeed` | `public float MaxAngularSpeed` | property |
| `MaxAngularAccel` | `public float MaxAngularAccel` | property |
| `PartialHitPointsRatio` | `public float PartialHitPointsRatio` | property |
| `HasSails` | `public bool HasSails` | property |
| `HasValidRudderStockPosition` | `public bool HasValidRudderStockPosition` | property |
| `ShipPhysicsReferenceId` | `public string ShipPhysicsReferenceId` | property |
| `BowAngleLimitFromCenterline` | `public float BowAngleLimitFromCenterline` | property |
| `LandingDepth` | `public float LandingDepth` | property |
| `MissionShipObject` | `public MissionShipObject()` | constructor |
| `MissionShipObject` | `public MissionShipObject(string stringId) : base(stringId)` | constructor |
| `SetPhysicsReference` | `public void SetPhysicsReference(ShipPhysicsReference physicsReference)` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
