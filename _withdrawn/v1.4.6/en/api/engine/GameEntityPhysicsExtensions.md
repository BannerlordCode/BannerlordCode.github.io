---
title: "GameEntityPhysicsExtensions"
description: "GameEntityPhysicsExtensions: a public class in TaleWorlds.Engine; 118 exposed members (116 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/GameEntityPhysicsExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameEntityPhysicsExtensions

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class GameEntityPhysicsExtensions`
**File:** `TaleWorlds.Engine/GameEntityPhysicsExtensions.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

GameEntityPhysicsExtensions lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/GameEntityPhysicsExtensions.cs. It is a public class; the inheritance chain is GameEntityPhysicsExtensions. It exposes 118 public/protected members: 116 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameEntityPhysicsExtensions lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain GameEntityPhysicsExtensions. The surface is method-led (methods 116/118, properties 1/118), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/GameEntityPhysicsExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HasBody` | `public static bool HasBody(this GameEntity gameEntity)` | method |
| `HasBody` | `public static bool HasBody(this WeakGameEntity gameEntity)` | method |
| `AddSphereAsBody` | `public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)` | method |
| `AddCapsuleAsBody` | `public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")` | method |
| `UpdateBodyRestOffset` | `public static void UpdateBodyRestOffset(this WeakGameEntity gameEntity, float restOffset)` | method |
| `PushCapsuleShapeToEntityBody` | `public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)` | method |
| `AddSphereAsBody` | `public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)` | method |
| `AddCapsuleAsBody` | `public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")` | method |
| `PopCapsuleShapeFromEntityBody` | `public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)` | method |
| `RemovePhysics` | `public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)` | method |
| `RemovePhysics` | `public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)` | method |
| `GetPhysicsState` | `public static bool GetPhysicsState(this GameEntity gameEntity)` | method |
| `GetPhysicsState` | `public static bool GetPhysicsState(this WeakGameEntity gameEntity)` | method |
| `GetPhysicsTriangleCount` | `public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)` | method |
| `GetPhysicsTriangleCount` | `public static int GetPhysicsTriangleCount(this GameEntity gameEntity)` | method |
| `HasPhysicsDefinitionWithoutFlags` | `public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)` | method |
| `HasPhysicsDefinitionWithoutFlags` | `public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)` | method |
| `HasPhysicsBody` | `public static bool HasPhysicsBody(this GameEntity gameEntity)` | method |
| `HasPhysicsBody` | `public static bool HasPhysicsBody(this WeakGameEntity gameEntity)` | method |
| `HasDynamicRigidBody` | `public static bool HasDynamicRigidBody(this GameEntity gameEntity)` | method |
| `HasDynamicRigidBody` | `public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)` | method |
| `HasKinematicRigidBody` | `public static bool HasKinematicRigidBody(this GameEntity gameEntity)` | method |
| `HasKinematicRigidBody` | `public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity)` | method |
| `HasStaticPhysicsBody` | `public static bool HasStaticPhysicsBody(this GameEntity gameEntity)` | method |
| `HasStaticPhysicsBody` | `public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity)` | method |
| `HasDynamicRigidBodyAndActiveSimulation` | `public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)` | method |
| `HasDynamicRigidBodyAndActiveSimulation` | `public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity)` | method |
| `CreateVariableRatePhysics` | `public static void CreateVariableRatePhysics(this GameEntity gameEntity, bool forChildren)` | method |
| `CreateVariableRatePhysics` | `public static void CreateVariableRatePhysics(this WeakGameEntity gameEntity, bool forChildren)` | method |
| `SetPhysicsState` | `public static void SetPhysicsState(this GameEntity gameEntity, bool isEnabled, bool setChildren)` | method |
| `SetPhysicsState` | `public static void SetPhysicsState(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)` | method |
| `SetPhysicsStateOnlyVariable` | `public static void SetPhysicsStateOnlyVariable(this GameEntity gameEntity, bool isEnabled, bool setChildren)` | method |
| `SetPhysicsStateOnlyVariable` | `public static void SetPhysicsStateOnlyVariable(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)` | method |
| `RemoveEnginePhysics` | `public static void RemoveEnginePhysics(this GameEntity gameEntity)` | method |
| `RemoveEnginePhysics` | `public static void RemoveEnginePhysics(this WeakGameEntity gameEntity)` | method |
| `IsEngineBodySleeping` | `public static bool IsEngineBodySleeping(this GameEntity gameEntity)` | method |
| `IsEngineBodySleeping` | `public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity)` | method |
| `IsDynamicBodyStationary` | `public static bool IsDynamicBodyStationary(this GameEntity gameEntity)` | method |
| `IsDynamicBodyStationary` | `public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity)` | method |
| `IsDynamicBodyStationaryMT` | `public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)` | method |
| `IsDynamicBodyStationaryMT` | `public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity)` | method |
| `ReplacePhysicsBodyWithQuadPhysicsBody` | `public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)` | method |
| `ReplacePhysicsBodyWithQuadPhysicsBody` | `public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)` | method |
| `GetBodyShape` | `public static PhysicsShape GetBodyShape(this GameEntity gameEntity)` | method |
| `GetBodyShape` | `public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity)` | method |
| `SetBodyShape` | `public static void SetBodyShape(this GameEntity gameEntity, PhysicsShape shape)` | method |
| `SetBodyShape` | `public static void SetBodyShape(this WeakGameEntity gameEntity, PhysicsShape shape)` | method |
| `AddPhysics` | `public static void AddPhysics(this GameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialGlobalVelocity, Vec3 angularGlobalVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)` | method |
| `AddPhysics` | `public static void AddPhysics(this WeakGameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialVelocity, Vec3 angularVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)` | method |
| `SetVelocityLimits` | `public static void SetVelocityLimits(this GameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)` | method |
| `SetVelocityLimits` | `public static void SetVelocityLimits(this WeakGameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)` | method |
| `SetMaxDepenetrationVelocity` | `public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity, float maxDepenetrationVelocity)` | method |
| `SetMaxDepenetrationVelocity` | `public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity, float maxDepenetrationVelocity)` | method |
| `SetSolverIterationCounts` | `public static void SetSolverIterationCounts(this GameEntity gameEntity, int positionIterationCount, int velocityIterationCount)` | method |
| `SetSolverIterationCounts` | `public static void SetSolverIterationCounts(this WeakGameEntity gameEntity, int positionIterationCount, int velocityIterationCount)` | method |
| `ApplyLocalImpulseToDynamicBody` | `public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 impulse)` | method |
| `ApplyLocalImpulseToDynamicBody` | `public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 impulse)` | method |
| `ApplyForceToDynamicBody` | `public static void ApplyForceToDynamicBody(this GameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyForceToDynamicBody` | `public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyGlobalForceAtLocalPosToDynamicBody` | `public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyGlobalForceAtLocalPosToDynamicBody` | `public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyTorqueToDynamicBody` | `public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyTorqueToDynamicBody` | `public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyLocalForceAtLocalPosToDynamicBody` | `public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyLocalForceAtLocalPosToDynamicBody` | `public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | method |
| `ApplyAccelerationToDynamicBody` | `public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity, Vec3 acceleration)` | method |
| `ApplyAccelerationToDynamicBody` | `public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity, Vec3 acceleration)` | method |
| `DisableDynamicBodySimulation` | `public static void DisableDynamicBodySimulation(this GameEntity gameEntity)` | method |
| `DisableDynamicBodySimulation` | `public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity)` | method |
| `DisableDynamicBodySimulationMT` | `public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)` | method |
| `DisableDynamicBodySimulationMT` | `public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity)` | method |
| `ConvertDynamicBodyToRayCast` | `public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)` | method |
| `ConvertDynamicBodyToRayCast` | `public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity)` | method |
| `SetPhysicsMoveToBatched` | `public static void SetPhysicsMoveToBatched(this GameEntity gameEntity, bool value)` | method |
| `SetPhysicsMoveToBatched` | `public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity, bool value)` | method |
| `EnableDynamicBody` | `public static void EnableDynamicBody(this GameEntity gameEntity)` | method |
| `EnableDynamicBody` | `public static void EnableDynamicBody(this WeakGameEntity gameEntity)` | method |
| `GetMass` | `public static float GetMass(this GameEntity gameEntity)` | method |
| `GetMass` | `public static float GetMass(this WeakGameEntity gameEntity)` | method |
| `SetMassAndUpdateInertiaAndCenterOfMass` | `public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity, float mass)` | method |
| `SetMassAndUpdateInertiaAndCenterOfMass` | `public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity, float mass)` | method |
| `SetCenterOfMass` | `public static void SetCenterOfMass(this GameEntity gameEntity, Vec3 localCenterOfMass)` | method |
| `SetCenterOfMass` | `public static void SetCenterOfMass(this WeakGameEntity gameEntity, Vec3 centerOfMass)` | method |
| `GetMassSpaceInertia` | `public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)` | method |
| `GetMassSpaceInertia` | `public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity)` | method |
| `GetMassSpaceInverseInertia` | `public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)` | method |
| `GetMassSpaceInverseInertia` | `public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity)` | method |
| `SetMassSpaceInertia` | `public static void SetMassSpaceInertia(this GameEntity gameEntity, Vec3 inertia)` | method |
| `SetMassSpaceInertia` | `public static void SetMassSpaceInertia(this WeakGameEntity gameEntity, Vec3 inertia)` | method |
| `SetDamping` | `public static void SetDamping(this GameEntity gameEntity, float linearDamping, float angularDamping)` | method |
| `SetDamping` | `public static void SetDamping(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)` | method |
| `SetDampingMT` | `public static void SetDampingMT(this GameEntity gameEntity, float linearDamping, float angularDamping)` | method |
| `SetDampingMT` | `public static void SetDampingMT(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)` | method |
| `DisableGravity` | `public static void DisableGravity(this GameEntity gameEntity)` | method |
| `DisableGravity` | `public static void DisableGravity(this WeakGameEntity gameEntity)` | method |
| `IsGravityDisabled` | `public static bool IsGravityDisabled(this GameEntity gameEntity)` | method |
| `IsGravityDisabled` | `public static bool IsGravityDisabled(this WeakGameEntity gameEntity)` | method |
| `GetLinearVelocity` | `public static Vec3 GetLinearVelocity(this GameEntity gameEntity)` | method |
| `GetLinearVelocity` | `public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity)` | method |
| `SetLinearVelocity` | `public static void SetLinearVelocity(this GameEntity gameEntity, Vec3 newLinearVelocity)` | method |
| `SetLinearVelocity` | `public static void SetLinearVelocity(this WeakGameEntity gameEntity, Vec3 newLinearVelocity)` | method |
| `GetLinearVelocityMT` | `public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)` | method |
| `GetLinearVelocityMT` | `public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity)` | method |
| `GetAngularVelocity` | `public static Vec3 GetAngularVelocity(this GameEntity gameEntity)` | method |
| `GetAngularVelocity` | `public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity)` | method |
| `GetAngularVelocityMT` | `public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)` | method |
| `GetAngularVelocityMT` | `public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity)` | method |
| `SetAngularVelocity` | `public static void SetAngularVelocity(this GameEntity gameEntity, Vec3 newAngularVelocity)` | method |
| `SetAngularVelocity` | `public static void SetAngularVelocity(this WeakGameEntity gameEntity, Vec3 newAngularVelocity)` | method |
| `GetPhysicsMinMax` | `public static void GetPhysicsMinMax(this GameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)` | method |
| `GetPhysicsMinMax` | `public static void GetPhysicsMinMax(this WeakGameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)` | method |
| `GetLocalPhysicsBoundingBox` | `public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity, bool includeChildren)` | method |
| `GetLocalPhysicsBoundingBox` | `public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity, bool includeChildren)` | method |
| `GetLinearVelocityAtGlobalPointForEntityWithDynamicBody` | `public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity, Vec3 globalPoint)` | method |
| `GetLinearVelocityAtGlobalPointForEntityWithDynamicBody` | `public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this GameEntity entity, Vec3 globalPoint)` | method |
| `ComputeVelocityDeltaFromImpulse` | `public static void ComputeVelocityDeltaFromImpulse(this WeakGameEntity gameEntity, in Vec3 impulseGlobal, in Vec3 impulsiveTorqueGlobal, out Vec3 deltaGlobalLinearVelocity, out Vec3 deltaGlobalAngularVelocity)` | method |
| `sbyte` | `public enum ForceMode : sbyte` | property |
| `sbyte` | `public enum ForceMode : sbyte` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
