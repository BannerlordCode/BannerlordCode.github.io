---
title: "GameEntityPhysicsExtensions"
description: "Auto-generated class reference for GameEntityPhysicsExtensions."
---
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class GameEntityPhysicsExtensions `
**Base:** System.Object
**Source:** TaleWorlds.Engine/GameEntityPhysicsExtensions.cs

## Overview

Auto-generated stub for `GameEntityPhysicsExtensions`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### HasBody
`public static bool HasBody(this GameEntity gameEntity)`

### AddSphereAsBody
`public static void AddSphereAsBody(this GameEntity gameEntity,Vec3 sphere,float radius,BodyFlags bodyFlags)`

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this GameEntity gameEntity,Vec3 p1,Vec3 p2,float radius,BodyFlags bodyFlags,string physicsMaterialName = "")`

### UpdateBodyRestOffset
`public static void UpdateBodyRestOffset(this WeakGameEntity gameEntity,float restOffset)`

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity,Vec3 p1,Vec3 p2,float radius,string physicsMaterialName)`

### PopCapsuleShapeFromEntityBody
`public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)`

### RemovePhysics
`public static void RemovePhysics(this GameEntity gameEntity,bool clearingTheScene = false)`

### GetPhysicsState
`public static bool GetPhysicsState(this GameEntity gameEntity)`

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)`

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity,int excludeFlags)`

### HasPhysicsBody
`public static bool HasPhysicsBody(this GameEntity gameEntity)`

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this GameEntity gameEntity)`

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this GameEntity gameEntity)`

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this GameEntity gameEntity)`

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)`

### CreateVariableRatePhysics
`public static void CreateVariableRatePhysics(this GameEntity gameEntity,bool forChildren)`

### SetPhysicsState
`public static void SetPhysicsState(this GameEntity gameEntity,bool isEnabled,bool setChildren)`

### SetPhysicsStateOnlyVariable
`public static void SetPhysicsStateOnlyVariable(this GameEntity gameEntity,bool isEnabled,bool setChildren)`

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this GameEntity gameEntity)`

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this GameEntity gameEntity)`

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this GameEntity gameEntity)`

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)`

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity,UIntPtr vertices,int numberOfVertices,PhysicsMaterial physicsMaterial,BodyFlags bodyFlags,UIntPtr indices,int numberOfIndices,bool replaceTrianglemeshDescriptions = false)`

### GetBodyShape
`public static PhysicsShape GetBodyShape(this GameEntity gameEntity)`

### SetBodyShape
`public static void SetBodyShape(this GameEntity gameEntity,PhysicsShape shape)`

### AddPhysics
`public static void AddPhysics(this GameEntity gameEntity,float mass,Vec3 localCenterOfMass,PhysicsShape body,Vec3 initialGlobalVelocity,Vec3 angularGlobalVelocity,PhysicsMaterial physicsMaterial,bool isStatic,int collisionGroupID)`

### SetVelocityLimits
`public static void SetVelocityLimits(this GameEntity gameEntity,float maxLinearVelocity,float maxAngularVelocity)`

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity,float maxDepenetrationVelocity)`

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this GameEntity gameEntity,int positionIterationCount,int velocityIterationCount)`

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity,Vec3 localPosition,Vec3 impulse)`

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this GameEntity gameEntity,Vec3 force,GameEntityPhysicsExtensions.ForceMode forceMode)`

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity,Vec3 localPosition,Vec3 globalForce,GameEntityPhysicsExtensions.ForceMode forceMode)`

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity,Vec3 torque,GameEntityPhysicsExtensions.ForceMode forceMode)`

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity,Vec3 localPosition,Vec3 localForce,GameEntityPhysicsExtensions.ForceMode forceMode)`

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity,Vec3 acceleration)`

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this GameEntity gameEntity)`

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)`

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)`

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this GameEntity gameEntity,bool value)`

### EnableDynamicBody
`public static void EnableDynamicBody(this GameEntity gameEntity)`

### GetMass
`public static float GetMass(this GameEntity gameEntity)`

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity,float mass)`

### SetCenterOfMass
`public static void SetCenterOfMass(this GameEntity gameEntity,Vec3 localCenterOfMass)`

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)`

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)`

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this GameEntity gameEntity,Vec3 inertia)`

### SetDamping
`public static void SetDamping(this GameEntity gameEntity,float linearDamping,float angularDamping)`

### SetDampingMT
`public static void SetDampingMT(this GameEntity gameEntity,float linearDamping,float angularDamping)`

### DisableGravity
`public static void DisableGravity(this GameEntity gameEntity)`

### IsGravityDisabled
`public static bool IsGravityDisabled(this GameEntity gameEntity)`

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this GameEntity gameEntity)`

### SetLinearVelocity
`public static void SetLinearVelocity(this GameEntity gameEntity,Vec3 newLinearVelocity)`

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)`

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this GameEntity gameEntity)`

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)`

### SetAngularVelocity
`public static void SetAngularVelocity(this GameEntity gameEntity,Vec3 newAngularVelocity)`

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this GameEntity gameEntity,bool includeChildren,out Vec3 bbmin,out Vec3 bbmax,bool returnLocal)`

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity,bool includeChildren)`

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity,Vec3 globalPoint)`

### ComputeVelocityDeltaFromImpulse
`public static void ComputeVelocityDeltaFromImpulse(this WeakGameEntity gameEntity,in Vec3 impulseGlobal,in Vec3 impulsiveTorqueGlobal,out Vec3 deltaGlobalLinearVelocity,out Vec3 deltaGlobalAngularVelocity)`

## See Also

- [Section index](../)
