---
title: "GameEntityPhysicsExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityPhysicsExtensions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class GameEntityPhysicsExtensions`
**Base:** 无
**File:** `TaleWorlds.Engine/GameEntityPhysicsExtensions.cs`

## 概述

`GameEntityPhysicsExtensions` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### HasBody
`public static bool HasBody(this GameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `body`。

### HasBody
`public static bool HasBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `body`。

### AddSphereAsBody
`public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**用途 / Purpose:** 向当前集合/状态中添加 `sphere as body`。

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)`

**用途 / Purpose:** 处理 `push capsule shape to entity body` 相关逻辑。

### AddSphereAsBody
`public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**用途 / Purpose:** 向当前集合/状态中添加 `sphere as body`。

### PopCapsuleShapeFromEntityBody
`public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `pop capsule shape from entity body` 相关逻辑。

### RemovePhysics
`public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)`

**用途 / Purpose:** 从当前集合/状态中移除 `physics`。

### RemovePhysics
`public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)`

**用途 / Purpose:** 从当前集合/状态中移除 `physics`。

### GetPhysicsState
`public static bool GetPhysicsState(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `physics state` 的当前值。

### GetPhysicsState
`public static bool GetPhysicsState(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `physics state` 的当前值。

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this GameEntity gameEntity, GameEntity otherGameEntity, float minDistance, float maxDistance)`

**用途 / Purpose:** 向当前集合/状态中添加 `distance joint`。

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this WeakGameEntity gameEntity, GameEntity otherGameEntity, float minDistance, float maxDistance)`

**用途 / Purpose:** 向当前集合/状态中添加 `distance joint`。

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this GameEntity gameEntity, GameEntity otherGameEntity, MatrixFrame globalFrameOnA, MatrixFrame globalFrameOnB, float minDistance, float maxDistance)`

**用途 / Purpose:** 向当前集合/状态中添加 `distance joint`。

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this WeakGameEntity gameEntity, GameEntity otherGameEntity, MatrixFrame globalFrameOnA, MatrixFrame globalFrameOnB, float minDistance, float maxDistance)`

**用途 / Purpose:** 向当前集合/状态中添加 `distance joint`。

### RemoveJoint
`public static void RemoveJoint(this GameEntity gameEntity, PhysicsJoint jointToRemove)`

**用途 / Purpose:** 从当前集合/状态中移除 `joint`。

### RemoveJoint
`public static void RemoveJoint(this WeakGameEntity gameEntity, PhysicsJoint jointToRemove)`

**用途 / Purpose:** 从当前集合/状态中移除 `joint`。

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `physics definition without flags`。

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `physics definition without flags`。

### HasPhysicsBody
`public static bool HasPhysicsBody(this GameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `physics body`。

### HasPhysicsBody
`public static bool HasPhysicsBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `physics body`。

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this GameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `dynamic rigid body`。

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `dynamic rigid body`。

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this GameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `kinematic rigid body`。

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `kinematic rigid body`。

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this GameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `static physics body`。

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `static physics body`。

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `dynamic rigid body and active simulation`。

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `dynamic rigid body and active simulation`。

### SetPhysicsState
`public static void SetPhysicsState(this GameEntity gameEntity, bool isEnabled, bool setChildren)`

**用途 / Purpose:** 设置 `physics state` 的值或状态。

### SetPhysicsState
`public static void SetPhysicsState(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)`

**用途 / Purpose:** 设置 `physics state` 的值或状态。

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this GameEntity gameEntity)`

**用途 / Purpose:** 从当前集合/状态中移除 `engine physics`。

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 从当前集合/状态中移除 `engine physics`。

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `is engine body sleeping` 相关逻辑。

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `is engine body sleeping` 相关逻辑。

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `is dynamic body stationary` 相关逻辑。

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `is dynamic body stationary` 相关逻辑。

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `is dynamic body stationary m t` 相关逻辑。

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `is dynamic body stationary m t` 相关逻辑。

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity, Vec3 vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, int indices, int numberOfIndices)`

**用途 / Purpose:** 处理 `replace physics body with quad physics body` 相关逻辑。

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity, Vec3 vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, int indices, int numberOfIndices)`

**用途 / Purpose:** 处理 `replace physics body with quad physics body` 相关逻辑。

### GetBodyShape
`public static PhysicsShape GetBodyShape(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `body shape` 的当前值。

### GetBodyShape
`public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `body shape` 的当前值。

### SetBodyShape
`public static void SetBodyShape(this GameEntity gameEntity, PhysicsShape shape)`

**用途 / Purpose:** 设置 `body shape` 的值或状态。

### SetBodyShape
`public static void SetBodyShape(this WeakGameEntity gameEntity, PhysicsShape shape)`

**用途 / Purpose:** 设置 `body shape` 的值或状态。

### AddPhysics
`public static void AddPhysics(this GameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialGlobalVelocity, Vec3 angularGlobalVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**用途 / Purpose:** 向当前集合/状态中添加 `physics`。

### AddPhysics
`public static void AddPhysics(this WeakGameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialVelocity, Vec3 angularVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**用途 / Purpose:** 向当前集合/状态中添加 `physics`。

### SetVelocityLimits
`public static void SetVelocityLimits(this GameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**用途 / Purpose:** 设置 `velocity limits` 的值或状态。

### SetVelocityLimits
`public static void SetVelocityLimits(this WeakGameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**用途 / Purpose:** 设置 `velocity limits` 的值或状态。

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity, float maxDepenetrationVelocity)`

**用途 / Purpose:** 设置 `max depenetration velocity` 的值或状态。

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity, float maxDepenetrationVelocity)`

**用途 / Purpose:** 设置 `max depenetration velocity` 的值或状态。

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this GameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**用途 / Purpose:** 设置 `solver iteration counts` 的值或状态。

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this WeakGameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**用途 / Purpose:** 设置 `solver iteration counts` 的值或状态。

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**用途 / Purpose:** 将 `local impulse to dynamic body` 应用到当前对象。

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**用途 / Purpose:** 将 `local impulse to dynamic body` 应用到当前对象。

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this GameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `force to dynamic body` 应用到当前对象。

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `force to dynamic body` 应用到当前对象。

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `global force at local pos to dynamic body` 应用到当前对象。

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `global force at local pos to dynamic body` 应用到当前对象。

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `torque to dynamic body` 应用到当前对象。

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `torque to dynamic body` 应用到当前对象。

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `local force at local pos to dynamic body` 应用到当前对象。

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** 将 `local force at local pos to dynamic body` 应用到当前对象。

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity, Vec3 acceleration)`

**用途 / Purpose:** 将 `acceleration to dynamic body` 应用到当前对象。

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity, Vec3 acceleration)`

**用途 / Purpose:** 将 `acceleration to dynamic body` 应用到当前对象。

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `disable dynamic body simulation` 相关逻辑。

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `disable dynamic body simulation` 相关逻辑。

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `disable dynamic body simulation m t` 相关逻辑。

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `disable dynamic body simulation m t` 相关逻辑。

### ConvertDynamicBodyToKinematic
`public static void ConvertDynamicBodyToKinematic(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `convert dynamic body to kinematic` 相关逻辑。

### ConvertDynamicBodyToKinematic
`public static void ConvertDynamicBodyToKinematic(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `convert dynamic body to kinematic` 相关逻辑。

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `convert dynamic body to ray cast` 相关逻辑。

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `convert dynamic body to ray cast` 相关逻辑。

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this GameEntity gameEntity, bool value)`

**用途 / Purpose:** 设置 `physics move to batched` 的值或状态。

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity, bool value)`

**用途 / Purpose:** 设置 `physics move to batched` 的值或状态。

### EnableDynamicBody
`public static void EnableDynamicBody(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `enable dynamic body` 相关逻辑。

### EnableDynamicBody
`public static void EnableDynamicBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `enable dynamic body` 相关逻辑。

### GetMass
`public static float GetMass(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `mass` 的当前值。

### GetMass
`public static float GetMass(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `mass` 的当前值。

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity, float mass)`

**用途 / Purpose:** 设置 `mass and update inertia and center of mass` 的值或状态。

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity, float mass)`

**用途 / Purpose:** 设置 `mass and update inertia and center of mass` 的值或状态。

### SetCenterOfMass
`public static void SetCenterOfMass(this GameEntity gameEntity, Vec3 localCenterOfMass)`

**用途 / Purpose:** 设置 `center of mass` 的值或状态。

### SetCenterOfMass
`public static void SetCenterOfMass(this WeakGameEntity gameEntity, Vec3 centerOfMass)`

**用途 / Purpose:** 设置 `center of mass` 的值或状态。

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `mass space inertia` 的当前值。

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `mass space inertia` 的当前值。

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `mass space inverse inertia` 的当前值。

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `mass space inverse inertia` 的当前值。

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this GameEntity gameEntity, Vec3 inertia)`

**用途 / Purpose:** 设置 `mass space inertia` 的值或状态。

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this WeakGameEntity gameEntity, Vec3 inertia)`

**用途 / Purpose:** 设置 `mass space inertia` 的值或状态。

### SetDamping
`public static void SetDamping(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** 设置 `damping` 的值或状态。

### SetDamping
`public static void SetDamping(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** 设置 `damping` 的值或状态。

### SetDampingMT
`public static void SetDampingMT(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** 设置 `damping m t` 的值或状态。

### SetDampingMT
`public static void SetDampingMT(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** 设置 `damping m t` 的值或状态。

### DisableGravity
`public static void DisableGravity(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `disable gravity` 相关逻辑。

### DisableGravity
`public static void DisableGravity(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `disable gravity` 相关逻辑。

### IsGravityDisabled
`public static bool IsGravityDisabled(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `is gravity disabled` 相关逻辑。

### IsGravityDisabled
`public static bool IsGravityDisabled(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 处理 `is gravity disabled` 相关逻辑。

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `linear velocity` 的当前值。

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `linear velocity` 的当前值。

### SetLinearVelocity
`public static void SetLinearVelocity(this GameEntity gameEntity, Vec3 newLinearVelocity)`

**用途 / Purpose:** 设置 `linear velocity` 的值或状态。

### SetLinearVelocity
`public static void SetLinearVelocity(this WeakGameEntity gameEntity, Vec3 newLinearVelocity)`

**用途 / Purpose:** 设置 `linear velocity` 的值或状态。

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `linear velocity m t` 的当前值。

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `linear velocity m t` 的当前值。

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `angular velocity` 的当前值。

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `angular velocity` 的当前值。

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `angular velocity m t` 的当前值。

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `angular velocity m t` 的当前值。

### SetAngularVelocity
`public static void SetAngularVelocity(this GameEntity gameEntity, Vec3 newAngularVelocity)`

**用途 / Purpose:** 设置 `angular velocity` 的值或状态。

### SetAngularVelocity
`public static void SetAngularVelocity(this WeakGameEntity gameEntity, Vec3 newAngularVelocity)`

**用途 / Purpose:** 设置 `angular velocity` 的值或状态。

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this GameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**用途 / Purpose:** 获取 `physics min max` 的当前值。

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity, Vec3 point)`

**用途 / Purpose:** 获取 `linear velocity at global point for entity with dynamic body` 的当前值。

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this WeakGameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**用途 / Purpose:** 获取 `physics min max` 的当前值。

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity, bool includeChildren)`

**用途 / Purpose:** 获取 `local physics bounding box` 的当前值。

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity, bool includeChildren)`

**用途 / Purpose:** 获取 `local physics bounding box` 的当前值。

## 使用示例

```csharp
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

## 参见

- [完整类目录](../catalog)