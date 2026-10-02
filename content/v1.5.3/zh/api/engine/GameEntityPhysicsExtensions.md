---
title: "GameEntityPhysicsExtensions"
description: "GameEntityPhysicsExtensions 的自动生成类参考。"
---
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class GameEntityPhysicsExtensions `
**Base:** System.Object
**Source:** TaleWorlds.Engine/GameEntityPhysicsExtensions.cs

## 概述

`GameEntityPhysicsExtensions` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/GameEntityPhysicsExtensions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### HasBody
`public static bool HasBody(this GameEntity gameEntity) `
`public static bool HasBody(this WeakGameEntity gameEntity) `

### AddSphereAsBody
`public static void AddSphereAsBody(this GameEntity gameEntity,Vec3 sphere,float radius,BodyFlags bodyFlags) `
`public static void AddSphereAsBody(this WeakGameEntity gameEntity,Vec3 sphere,float radius,BodyFlags bodyFlags) `

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this GameEntity gameEntity,Vec3 p1,Vec3 p2,float radius,BodyFlags bodyFlags,string physicsMaterialName = "") `
`public static void AddCapsuleAsBody(this WeakGameEntity gameEntity,Vec3 p1,Vec3 p2,float radius,BodyFlags bodyFlags,string physicsMaterialName = "") `

### UpdateBodyRestOffset
`public static void UpdateBodyRestOffset(this WeakGameEntity gameEntity,float restOffset) `

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity,Vec3 p1,Vec3 p2,float radius,string physicsMaterialName) `

### PopCapsuleShapeFromEntityBody
`public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity) `

### RemovePhysics
`public static void RemovePhysics(this GameEntity gameEntity,bool clearingTheScene = false) `
`public static void RemovePhysics(this WeakGameEntity gameEntity,bool clearingTheScene = false) `

### GetPhysicsState
`public static bool GetPhysicsState(this GameEntity gameEntity) `
`public static bool GetPhysicsState(this WeakGameEntity gameEntity) `

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity) `
`public static int GetPhysicsTriangleCount(this GameEntity gameEntity) `

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity,int excludeFlags) `
`public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity,int excludeFlags) `

### HasPhysicsBody
`public static bool HasPhysicsBody(this GameEntity gameEntity) `
`public static bool HasPhysicsBody(this WeakGameEntity gameEntity) `

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this GameEntity gameEntity) `
`public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity) `

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this GameEntity gameEntity) `
`public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity) `

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this GameEntity gameEntity) `
`public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity) `

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity) `
`public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity) `

### CreateVariableRatePhysics
`public static void CreateVariableRatePhysics(this GameEntity gameEntity,bool forChildren) `
`public static void CreateVariableRatePhysics(this WeakGameEntity gameEntity,bool forChildren) `

### SetPhysicsState
`public static void SetPhysicsState(this GameEntity gameEntity,bool isEnabled,bool setChildren) `
`public static void SetPhysicsState(this WeakGameEntity gameEntity,bool isEnabled,bool setChildren) `

### SetPhysicsStateOnlyVariable
`public static void SetPhysicsStateOnlyVariable(this GameEntity gameEntity,bool isEnabled,bool setChildren) `
`public static void SetPhysicsStateOnlyVariable(this WeakGameEntity gameEntity,bool isEnabled,bool setChildren) `

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this GameEntity gameEntity) `
`public static void RemoveEnginePhysics(this WeakGameEntity gameEntity) `

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this GameEntity gameEntity) `
`public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity) `

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this GameEntity gameEntity) `
`public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity) `

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity) `
`public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity) `

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity,UIntPtr vertices,int numberOfVertices,PhysicsMaterial physicsMaterial,BodyFlags bodyFlags,UIntPtr indices,int numberOfIndices,bool replaceTrianglemeshDescriptions = false) `
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity,UIntPtr vertices,int numberOfVertices,PhysicsMaterial physicsMaterial,BodyFlags bodyFlags,UIntPtr indices,int numberOfIndices,bool replaceTrianglemeshDescriptions = false) `

### GetBodyShape
`public static PhysicsShape GetBodyShape(this GameEntity gameEntity) `
`public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity) `

### SetBodyShape
`public static void SetBodyShape(this GameEntity gameEntity,PhysicsShape shape) `
`public static void SetBodyShape(this WeakGameEntity gameEntity,PhysicsShape shape) `

### AddPhysics
`public static void AddPhysics(this GameEntity gameEntity,float mass,Vec3 localCenterOfMass,PhysicsShape body,Vec3 initialGlobalVelocity,Vec3 angularGlobalVelocity,PhysicsMaterial physicsMaterial,bool isStatic,int collisionGroupID) `
`public static void AddPhysics(this WeakGameEntity gameEntity,float mass,Vec3 localCenterOfMass,PhysicsShape body,Vec3 initialVelocity,Vec3 angularVelocity,PhysicsMaterial physicsMaterial,bool isStatic,int collisionGroupID) `

### SetVelocityLimits
`public static void SetVelocityLimits(this GameEntity gameEntity,float maxLinearVelocity,float maxAngularVelocity) `
`public static void SetVelocityLimits(this WeakGameEntity gameEntity,float maxLinearVelocity,float maxAngularVelocity) `

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity,float maxDepenetrationVelocity) `
`public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity,float maxDepenetrationVelocity) `

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this GameEntity gameEntity,int positionIterationCount,int velocityIterationCount) `
`public static void SetSolverIterationCounts(this WeakGameEntity gameEntity,int positionIterationCount,int velocityIterationCount) `

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity,Vec3 localPosition,Vec3 impulse) `
`public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity,Vec3 localPosition,Vec3 impulse) `

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this GameEntity gameEntity,Vec3 force,GameEntityPhysicsExtensions.ForceMode forceMode) `
`public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity,Vec3 force,GameEntityPhysicsExtensions.ForceMode forceMode) `

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity,Vec3 localPosition,Vec3 globalForce,GameEntityPhysicsExtensions.ForceMode forceMode) `
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity,Vec3 localPosition,Vec3 globalForce,GameEntityPhysicsExtensions.ForceMode forceMode) `

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity,Vec3 torque,GameEntityPhysicsExtensions.ForceMode forceMode) `
`public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity,Vec3 torque,GameEntityPhysicsExtensions.ForceMode forceMode) `

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity,Vec3 localPosition,Vec3 localForce,GameEntityPhysicsExtensions.ForceMode forceMode) `
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity,Vec3 localPosition,Vec3 localForce,GameEntityPhysicsExtensions.ForceMode forceMode) `

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity,Vec3 acceleration) `
`public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity,Vec3 acceleration) `

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this GameEntity gameEntity) `
`public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity) `

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity) `
`public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity) `

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity) `
`public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity) `

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this GameEntity gameEntity,bool value) `
`public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity,bool value) `

### EnableDynamicBody
`public static void EnableDynamicBody(this GameEntity gameEntity) `
`public static void EnableDynamicBody(this WeakGameEntity gameEntity) `

### GetMass
`public static float GetMass(this GameEntity gameEntity) `
`public static float GetMass(this WeakGameEntity gameEntity) `

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity,float mass) `
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity,float mass) `

### SetCenterOfMass
`public static void SetCenterOfMass(this GameEntity gameEntity,Vec3 localCenterOfMass) `
`public static void SetCenterOfMass(this WeakGameEntity gameEntity,Vec3 centerOfMass) `

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity) `
`public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity) `

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity) `
`public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity) `

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this GameEntity gameEntity,Vec3 inertia) `
`public static void SetMassSpaceInertia(this WeakGameEntity gameEntity,Vec3 inertia) `

### SetDamping
`public static void SetDamping(this GameEntity gameEntity,float linearDamping,float angularDamping) `
`public static void SetDamping(this WeakGameEntity gameEntity,float linearDamping,float angularDamping) `

### SetDampingMT
`public static void SetDampingMT(this GameEntity gameEntity,float linearDamping,float angularDamping) `
`public static void SetDampingMT(this WeakGameEntity gameEntity,float linearDamping,float angularDamping) `

### DisableGravity
`public static void DisableGravity(this GameEntity gameEntity) `
`public static void DisableGravity(this WeakGameEntity gameEntity) `

### IsGravityDisabled
`public static bool IsGravityDisabled(this GameEntity gameEntity) `
`public static bool IsGravityDisabled(this WeakGameEntity gameEntity) `

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this GameEntity gameEntity) `
`public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity) `

### SetLinearVelocity
`public static void SetLinearVelocity(this GameEntity gameEntity,Vec3 newLinearVelocity) `
`public static void SetLinearVelocity(this WeakGameEntity gameEntity,Vec3 newLinearVelocity) `

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity) `
`public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity) `

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this GameEntity gameEntity) `
`public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity) `

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity) `
`public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity) `

### SetAngularVelocity
`public static void SetAngularVelocity(this GameEntity gameEntity,Vec3 newAngularVelocity) `
`public static void SetAngularVelocity(this WeakGameEntity gameEntity,Vec3 newAngularVelocity) `

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this GameEntity gameEntity,bool includeChildren,out Vec3 bbmin,out Vec3 bbmax,bool returnLocal) `
`public static void GetPhysicsMinMax(this WeakGameEntity gameEntity,bool includeChildren,out Vec3 bbmin,out Vec3 bbmax,bool returnLocal) `

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity,bool includeChildren) `
`public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity,bool includeChildren) `

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity,Vec3 globalPoint) `
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this GameEntity entity,Vec3 globalPoint) `

### ComputeVelocityDeltaFromImpulse
`public static void ComputeVelocityDeltaFromImpulse(this WeakGameEntity gameEntity,in Vec3 impulseGlobal,in Vec3 impulsiveTorqueGlobal,out Vec3 deltaGlobalLinearVelocity,out Vec3 deltaGlobalAngularVelocity) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
