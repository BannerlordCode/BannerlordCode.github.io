---
title: "GameEntityPhysicsExtensions"
description: "GameEntityPhysicsExtensions：TaleWorlds.Engine 的 public 类；公开成员 118 个（方法 116、属性 1、字段 0）。源文件 TaleWorlds.Engine/GameEntityPhysicsExtensions.cs。"
---
# GameEntityPhysicsExtensions

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class GameEntityPhysicsExtensions`
**File:** `TaleWorlds.Engine/GameEntityPhysicsExtensions.cs`

## 概述

GameEntityPhysicsExtensions 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/GameEntityPhysicsExtensions.cs。它是一个 public 类，继承链为 GameEntityPhysicsExtensions。public/protected 成员共 118 个：116 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameEntityPhysicsExtensions 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 GameEntityPhysicsExtensions。成员构成以方法为主（方法 116/118，属性 1/118），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/GameEntityPhysicsExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasBody` | `public static bool HasBody(this GameEntity gameEntity)` | 方法 |
| `HasBody` | `public static bool HasBody(this WeakGameEntity gameEntity)` | 方法 |
| `AddSphereAsBody` | `public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)` | 方法 |
| `AddCapsuleAsBody` | `public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")` | 方法 |
| `UpdateBodyRestOffset` | `public static void UpdateBodyRestOffset(this WeakGameEntity gameEntity, float restOffset)` | 方法 |
| `PushCapsuleShapeToEntityBody` | `public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)` | 方法 |
| `AddSphereAsBody` | `public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)` | 方法 |
| `AddCapsuleAsBody` | `public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")` | 方法 |
| `PopCapsuleShapeFromEntityBody` | `public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)` | 方法 |
| `RemovePhysics` | `public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)` | 方法 |
| `RemovePhysics` | `public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)` | 方法 |
| `GetPhysicsState` | `public static bool GetPhysicsState(this GameEntity gameEntity)` | 方法 |
| `GetPhysicsState` | `public static bool GetPhysicsState(this WeakGameEntity gameEntity)` | 方法 |
| `GetPhysicsTriangleCount` | `public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)` | 方法 |
| `GetPhysicsTriangleCount` | `public static int GetPhysicsTriangleCount(this GameEntity gameEntity)` | 方法 |
| `HasPhysicsDefinitionWithoutFlags` | `public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)` | 方法 |
| `HasPhysicsDefinitionWithoutFlags` | `public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)` | 方法 |
| `HasPhysicsBody` | `public static bool HasPhysicsBody(this GameEntity gameEntity)` | 方法 |
| `HasPhysicsBody` | `public static bool HasPhysicsBody(this WeakGameEntity gameEntity)` | 方法 |
| `HasDynamicRigidBody` | `public static bool HasDynamicRigidBody(this GameEntity gameEntity)` | 方法 |
| `HasDynamicRigidBody` | `public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)` | 方法 |
| `HasKinematicRigidBody` | `public static bool HasKinematicRigidBody(this GameEntity gameEntity)` | 方法 |
| `HasKinematicRigidBody` | `public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity)` | 方法 |
| `HasStaticPhysicsBody` | `public static bool HasStaticPhysicsBody(this GameEntity gameEntity)` | 方法 |
| `HasStaticPhysicsBody` | `public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity)` | 方法 |
| `HasDynamicRigidBodyAndActiveSimulation` | `public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)` | 方法 |
| `HasDynamicRigidBodyAndActiveSimulation` | `public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity)` | 方法 |
| `CreateVariableRatePhysics` | `public static void CreateVariableRatePhysics(this GameEntity gameEntity, bool forChildren)` | 方法 |
| `CreateVariableRatePhysics` | `public static void CreateVariableRatePhysics(this WeakGameEntity gameEntity, bool forChildren)` | 方法 |
| `SetPhysicsState` | `public static void SetPhysicsState(this GameEntity gameEntity, bool isEnabled, bool setChildren)` | 方法 |
| `SetPhysicsState` | `public static void SetPhysicsState(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)` | 方法 |
| `SetPhysicsStateOnlyVariable` | `public static void SetPhysicsStateOnlyVariable(this GameEntity gameEntity, bool isEnabled, bool setChildren)` | 方法 |
| `SetPhysicsStateOnlyVariable` | `public static void SetPhysicsStateOnlyVariable(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)` | 方法 |
| `RemoveEnginePhysics` | `public static void RemoveEnginePhysics(this GameEntity gameEntity)` | 方法 |
| `RemoveEnginePhysics` | `public static void RemoveEnginePhysics(this WeakGameEntity gameEntity)` | 方法 |
| `IsEngineBodySleeping` | `public static bool IsEngineBodySleeping(this GameEntity gameEntity)` | 方法 |
| `IsEngineBodySleeping` | `public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity)` | 方法 |
| `IsDynamicBodyStationary` | `public static bool IsDynamicBodyStationary(this GameEntity gameEntity)` | 方法 |
| `IsDynamicBodyStationary` | `public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity)` | 方法 |
| `IsDynamicBodyStationaryMT` | `public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)` | 方法 |
| `IsDynamicBodyStationaryMT` | `public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity)` | 方法 |
| `ReplacePhysicsBodyWithQuadPhysicsBody` | `public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)` | 方法 |
| `ReplacePhysicsBodyWithQuadPhysicsBody` | `public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)` | 方法 |
| `GetBodyShape` | `public static PhysicsShape GetBodyShape(this GameEntity gameEntity)` | 方法 |
| `GetBodyShape` | `public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity)` | 方法 |
| `SetBodyShape` | `public static void SetBodyShape(this GameEntity gameEntity, PhysicsShape shape)` | 方法 |
| `SetBodyShape` | `public static void SetBodyShape(this WeakGameEntity gameEntity, PhysicsShape shape)` | 方法 |
| `AddPhysics` | `public static void AddPhysics(this GameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialGlobalVelocity, Vec3 angularGlobalVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)` | 方法 |
| `AddPhysics` | `public static void AddPhysics(this WeakGameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialVelocity, Vec3 angularVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)` | 方法 |
| `SetVelocityLimits` | `public static void SetVelocityLimits(this GameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)` | 方法 |
| `SetVelocityLimits` | `public static void SetVelocityLimits(this WeakGameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)` | 方法 |
| `SetMaxDepenetrationVelocity` | `public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity, float maxDepenetrationVelocity)` | 方法 |
| `SetMaxDepenetrationVelocity` | `public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity, float maxDepenetrationVelocity)` | 方法 |
| `SetSolverIterationCounts` | `public static void SetSolverIterationCounts(this GameEntity gameEntity, int positionIterationCount, int velocityIterationCount)` | 方法 |
| `SetSolverIterationCounts` | `public static void SetSolverIterationCounts(this WeakGameEntity gameEntity, int positionIterationCount, int velocityIterationCount)` | 方法 |
| `ApplyLocalImpulseToDynamicBody` | `public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 impulse)` | 方法 |
| `ApplyLocalImpulseToDynamicBody` | `public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 impulse)` | 方法 |
| `ApplyForceToDynamicBody` | `public static void ApplyForceToDynamicBody(this GameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyForceToDynamicBody` | `public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyGlobalForceAtLocalPosToDynamicBody` | `public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyGlobalForceAtLocalPosToDynamicBody` | `public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyTorqueToDynamicBody` | `public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyTorqueToDynamicBody` | `public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyLocalForceAtLocalPosToDynamicBody` | `public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyLocalForceAtLocalPosToDynamicBody` | `public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)` | 方法 |
| `ApplyAccelerationToDynamicBody` | `public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity, Vec3 acceleration)` | 方法 |
| `ApplyAccelerationToDynamicBody` | `public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity, Vec3 acceleration)` | 方法 |
| `DisableDynamicBodySimulation` | `public static void DisableDynamicBodySimulation(this GameEntity gameEntity)` | 方法 |
| `DisableDynamicBodySimulation` | `public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity)` | 方法 |
| `DisableDynamicBodySimulationMT` | `public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)` | 方法 |
| `DisableDynamicBodySimulationMT` | `public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity)` | 方法 |
| `ConvertDynamicBodyToRayCast` | `public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)` | 方法 |
| `ConvertDynamicBodyToRayCast` | `public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity)` | 方法 |
| `SetPhysicsMoveToBatched` | `public static void SetPhysicsMoveToBatched(this GameEntity gameEntity, bool value)` | 方法 |
| `SetPhysicsMoveToBatched` | `public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity, bool value)` | 方法 |
| `EnableDynamicBody` | `public static void EnableDynamicBody(this GameEntity gameEntity)` | 方法 |
| `EnableDynamicBody` | `public static void EnableDynamicBody(this WeakGameEntity gameEntity)` | 方法 |
| `GetMass` | `public static float GetMass(this GameEntity gameEntity)` | 方法 |
| `GetMass` | `public static float GetMass(this WeakGameEntity gameEntity)` | 方法 |
| `SetMassAndUpdateInertiaAndCenterOfMass` | `public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity, float mass)` | 方法 |
| `SetMassAndUpdateInertiaAndCenterOfMass` | `public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity, float mass)` | 方法 |
| `SetCenterOfMass` | `public static void SetCenterOfMass(this GameEntity gameEntity, Vec3 localCenterOfMass)` | 方法 |
| `SetCenterOfMass` | `public static void SetCenterOfMass(this WeakGameEntity gameEntity, Vec3 centerOfMass)` | 方法 |
| `GetMassSpaceInertia` | `public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)` | 方法 |
| `GetMassSpaceInertia` | `public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity)` | 方法 |
| `GetMassSpaceInverseInertia` | `public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)` | 方法 |
| `GetMassSpaceInverseInertia` | `public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity)` | 方法 |
| `SetMassSpaceInertia` | `public static void SetMassSpaceInertia(this GameEntity gameEntity, Vec3 inertia)` | 方法 |
| `SetMassSpaceInertia` | `public static void SetMassSpaceInertia(this WeakGameEntity gameEntity, Vec3 inertia)` | 方法 |
| `SetDamping` | `public static void SetDamping(this GameEntity gameEntity, float linearDamping, float angularDamping)` | 方法 |
| `SetDamping` | `public static void SetDamping(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)` | 方法 |
| `SetDampingMT` | `public static void SetDampingMT(this GameEntity gameEntity, float linearDamping, float angularDamping)` | 方法 |
| `SetDampingMT` | `public static void SetDampingMT(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)` | 方法 |
| `DisableGravity` | `public static void DisableGravity(this GameEntity gameEntity)` | 方法 |
| `DisableGravity` | `public static void DisableGravity(this WeakGameEntity gameEntity)` | 方法 |
| `IsGravityDisabled` | `public static bool IsGravityDisabled(this GameEntity gameEntity)` | 方法 |
| `IsGravityDisabled` | `public static bool IsGravityDisabled(this WeakGameEntity gameEntity)` | 方法 |
| `GetLinearVelocity` | `public static Vec3 GetLinearVelocity(this GameEntity gameEntity)` | 方法 |
| `GetLinearVelocity` | `public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity)` | 方法 |
| `SetLinearVelocity` | `public static void SetLinearVelocity(this GameEntity gameEntity, Vec3 newLinearVelocity)` | 方法 |
| `SetLinearVelocity` | `public static void SetLinearVelocity(this WeakGameEntity gameEntity, Vec3 newLinearVelocity)` | 方法 |
| `GetLinearVelocityMT` | `public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)` | 方法 |
| `GetLinearVelocityMT` | `public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity)` | 方法 |
| `GetAngularVelocity` | `public static Vec3 GetAngularVelocity(this GameEntity gameEntity)` | 方法 |
| `GetAngularVelocity` | `public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity)` | 方法 |
| `GetAngularVelocityMT` | `public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)` | 方法 |
| `GetAngularVelocityMT` | `public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity)` | 方法 |
| `SetAngularVelocity` | `public static void SetAngularVelocity(this GameEntity gameEntity, Vec3 newAngularVelocity)` | 方法 |
| `SetAngularVelocity` | `public static void SetAngularVelocity(this WeakGameEntity gameEntity, Vec3 newAngularVelocity)` | 方法 |
| `GetPhysicsMinMax` | `public static void GetPhysicsMinMax(this GameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)` | 方法 |
| `GetPhysicsMinMax` | `public static void GetPhysicsMinMax(this WeakGameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)` | 方法 |
| `GetLocalPhysicsBoundingBox` | `public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity, bool includeChildren)` | 方法 |
| `GetLocalPhysicsBoundingBox` | `public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity, bool includeChildren)` | 方法 |
| `GetLinearVelocityAtGlobalPointForEntityWithDynamicBody` | `public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity, Vec3 globalPoint)` | 方法 |
| `GetLinearVelocityAtGlobalPointForEntityWithDynamicBody` | `public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this GameEntity entity, Vec3 globalPoint)` | 方法 |
| `ComputeVelocityDeltaFromImpulse` | `public static void ComputeVelocityDeltaFromImpulse(this WeakGameEntity gameEntity, in Vec3 impulseGlobal, in Vec3 impulsiveTorqueGlobal, out Vec3 deltaGlobalLinearVelocity, out Vec3 deltaGlobalAngularVelocity)` | 方法 |
| `sbyte` | `public enum ForceMode : sbyte` | 属性 |
| `sbyte` | `public enum ForceMode : sbyte` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
