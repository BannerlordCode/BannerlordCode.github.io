---
title: "GameEntityPhysicsExtensions"
description: "GameEntityPhysicsExtensions 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

### HasBody
`public static bool HasBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

### AddSphereAsBody
`public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**用途 / Purpose:** **用途 / Purpose:** 将 sphere as body 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.AddSphereAsBody(gameEntity, sphere, 0, bodyFlags);
```

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**用途 / Purpose:** **用途 / Purpose:** 将 capsule as body 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.AddCapsuleAsBody(gameEntity, p1, p2, 0, bodyFlags, "example");
```

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PushCapsuleShapeToEntityBody 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.PushCapsuleShapeToEntityBody(gameEntity, p1, p2, 0, "example");
```

### AddSphereAsBody
`public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**用途 / Purpose:** **用途 / Purpose:** 将 sphere as body 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.AddSphereAsBody(gameEntity, sphere, 0, bodyFlags);
```

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**用途 / Purpose:** **用途 / Purpose:** 将 capsule as body 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.AddCapsuleAsBody(gameEntity, p1, p2, 0, bodyFlags, "example");
```

### PopCapsuleShapeFromEntityBody
`public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PopCapsuleShapeFromEntityBody 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.PopCapsuleShapeFromEntityBody(gameEntity);
```

### RemovePhysics
`public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 physics。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.RemovePhysics(gameEntity, false);
```

### RemovePhysics
`public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 physics。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.RemovePhysics(gameEntity, false);
```

### GetPhysicsState
`public static bool GetPhysicsState(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 physics state 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetPhysicsState(gameEntity);
```

### GetPhysicsState
`public static bool GetPhysicsState(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 physics state 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetPhysicsState(gameEntity);
```

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 physics triangle count 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetPhysicsTriangleCount(gameEntity);
```

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 physics triangle count 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetPhysicsTriangleCount(gameEntity);
```

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 physics definition without flags。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasPhysicsDefinitionWithoutFlags(gameEntity, 0);
```

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 physics definition without flags。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasPhysicsDefinitionWithoutFlags(gameEntity, 0);
```

### HasPhysicsBody
`public static bool HasPhysicsBody(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 physics body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasPhysicsBody(gameEntity);
```

### HasPhysicsBody
`public static bool HasPhysicsBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 physics body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasPhysicsBody(gameEntity);
```

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 dynamic rigid body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasDynamicRigidBody(gameEntity);
```

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 dynamic rigid body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasDynamicRigidBody(gameEntity);
```

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 kinematic rigid body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasKinematicRigidBody(gameEntity);
```

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 kinematic rigid body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasKinematicRigidBody(gameEntity);
```

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 static physics body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasStaticPhysicsBody(gameEntity);
```

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 static physics body。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasStaticPhysicsBody(gameEntity);
```

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 dynamic rigid body and active simulation。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasDynamicRigidBodyAndActiveSimulation(gameEntity);
```

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 dynamic rigid body and active simulation。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.HasDynamicRigidBodyAndActiveSimulation(gameEntity);
```

### CreateVariableRatePhysics
`public static void CreateVariableRatePhysics(this GameEntity gameEntity, bool forChildren)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 variable rate physics 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.CreateVariableRatePhysics(gameEntity, false);
```

### CreateVariableRatePhysics
`public static void CreateVariableRatePhysics(this WeakGameEntity gameEntity, bool forChildren)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 variable rate physics 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.CreateVariableRatePhysics(gameEntity, false);
```

### SetPhysicsState
`public static void SetPhysicsState(this GameEntity gameEntity, bool isEnabled, bool setChildren)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics state 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetPhysicsState(gameEntity, false, false);
```

### SetPhysicsState
`public static void SetPhysicsState(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics state 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetPhysicsState(gameEntity, false, false);
```

### SetPhysicsStateOnlyVariable
`public static void SetPhysicsStateOnlyVariable(this GameEntity gameEntity, bool isEnabled, bool setChildren)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics state only variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetPhysicsStateOnlyVariable(gameEntity, false, false);
```

### SetPhysicsStateOnlyVariable
`public static void SetPhysicsStateOnlyVariable(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics state only variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetPhysicsStateOnlyVariable(gameEntity, false, false);
```

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 engine physics。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.RemoveEnginePhysics(gameEntity);
```

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 engine physics。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.RemoveEnginePhysics(gameEntity);
```

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 engine body sleeping 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsEngineBodySleeping(gameEntity);
```

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 engine body sleeping 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsEngineBodySleeping(gameEntity);
```

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 dynamic body stationary 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsDynamicBodyStationary(gameEntity);
```

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 dynamic body stationary 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsDynamicBodyStationary(gameEntity);
```

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 dynamic body stationary m t 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsDynamicBodyStationaryMT(gameEntity);
```

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 dynamic body stationary m t 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsDynamicBodyStationaryMT(gameEntity);
```

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReplacePhysicsBodyWithQuadPhysicsBody 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ReplacePhysicsBodyWithQuadPhysicsBody(gameEntity, vertices, 0, physicsMaterial, bodyFlags, indices, 0);
```

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReplacePhysicsBodyWithQuadPhysicsBody 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ReplacePhysicsBodyWithQuadPhysicsBody(gameEntity, vertices, 0, physicsMaterial, bodyFlags, indices, 0);
```

### GetBodyShape
`public static PhysicsShape GetBodyShape(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 body shape 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetBodyShape(gameEntity);
```

### GetBodyShape
`public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 body shape 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetBodyShape(gameEntity);
```

### SetBodyShape
`public static void SetBodyShape(this GameEntity gameEntity, PhysicsShape shape)`

**用途 / Purpose:** **用途 / Purpose:** 为 body shape 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetBodyShape(gameEntity, shape);
```

### SetBodyShape
`public static void SetBodyShape(this WeakGameEntity gameEntity, PhysicsShape shape)`

**用途 / Purpose:** **用途 / Purpose:** 为 body shape 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetBodyShape(gameEntity, shape);
```

### AddPhysics
`public static void AddPhysics(this GameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialGlobalVelocity, Vec3 angularGlobalVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**用途 / Purpose:** **用途 / Purpose:** 将 physics 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.AddPhysics(gameEntity, 0, localCenterOfMass, body, initialGlobalVelocity, angularGlobalVelocity, physicsMaterial, false, 0);
```

### AddPhysics
`public static void AddPhysics(this WeakGameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialVelocity, Vec3 angularVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**用途 / Purpose:** **用途 / Purpose:** 将 physics 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.AddPhysics(gameEntity, 0, localCenterOfMass, body, initialVelocity, angularVelocity, physicsMaterial, false, 0);
```

### SetVelocityLimits
`public static void SetVelocityLimits(this GameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 velocity limits 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetVelocityLimits(gameEntity, 0, 0);
```

### SetVelocityLimits
`public static void SetVelocityLimits(this WeakGameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 velocity limits 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetVelocityLimits(gameEntity, 0, 0);
```

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity, float maxDepenetrationVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 max depenetration velocity 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetMaxDepenetrationVelocity(gameEntity, 0);
```

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity, float maxDepenetrationVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 max depenetration velocity 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetMaxDepenetrationVelocity(gameEntity, 0);
```

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this GameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**用途 / Purpose:** **用途 / Purpose:** 为 solver iteration counts 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetSolverIterationCounts(gameEntity, 0, 0);
```

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this WeakGameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**用途 / Purpose:** **用途 / Purpose:** 为 solver iteration counts 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetSolverIterationCounts(gameEntity, 0, 0);
```

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**用途 / Purpose:** **用途 / Purpose:** 将 local impulse to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyLocalImpulseToDynamicBody(gameEntity, localPosition, impulse);
```

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**用途 / Purpose:** **用途 / Purpose:** 将 local impulse to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyLocalImpulseToDynamicBody(gameEntity, localPosition, impulse);
```

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this GameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 force to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyForceToDynamicBody(gameEntity, force, forceMode);
```

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 force to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyForceToDynamicBody(gameEntity, force, forceMode);
```

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 global force at local pos to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyGlobalForceAtLocalPosToDynamicBody(gameEntity, localPosition, globalForce, forceMode);
```

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 global force at local pos to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyGlobalForceAtLocalPosToDynamicBody(gameEntity, localPosition, globalForce, forceMode);
```

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 torque to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyTorqueToDynamicBody(gameEntity, torque, forceMode);
```

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 torque to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyTorqueToDynamicBody(gameEntity, torque, forceMode);
```

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 local force at local pos to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyLocalForceAtLocalPosToDynamicBody(gameEntity, localPosition, localForce, forceMode);
```

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 local force at local pos to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyLocalForceAtLocalPosToDynamicBody(gameEntity, localPosition, localForce, forceMode);
```

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity, Vec3 acceleration)`

**用途 / Purpose:** **用途 / Purpose:** 将 acceleration to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyAccelerationToDynamicBody(gameEntity, acceleration);
```

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity, Vec3 acceleration)`

**用途 / Purpose:** **用途 / Purpose:** 将 acceleration to dynamic body 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ApplyAccelerationToDynamicBody(gameEntity, acceleration);
```

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableDynamicBodySimulation 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.DisableDynamicBodySimulation(gameEntity);
```

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableDynamicBodySimulation 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.DisableDynamicBodySimulation(gameEntity);
```

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableDynamicBodySimulationMT 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.DisableDynamicBodySimulationMT(gameEntity);
```

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableDynamicBodySimulationMT 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.DisableDynamicBodySimulationMT(gameEntity);
```

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 把dynamic body to ray cast转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ConvertDynamicBodyToRayCast(gameEntity);
```

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 把dynamic body to ray cast转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ConvertDynamicBodyToRayCast(gameEntity);
```

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this GameEntity gameEntity, bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics move to batched 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetPhysicsMoveToBatched(gameEntity, false);
```

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity, bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics move to batched 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetPhysicsMoveToBatched(gameEntity, false);
```

### EnableDynamicBody
`public static void EnableDynamicBody(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableDynamicBody 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.EnableDynamicBody(gameEntity);
```

### EnableDynamicBody
`public static void EnableDynamicBody(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableDynamicBody 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.EnableDynamicBody(gameEntity);
```

### GetMass
`public static float GetMass(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mass 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetMass(gameEntity);
```

### GetMass
`public static float GetMass(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mass 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetMass(gameEntity);
```

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity, float mass)`

**用途 / Purpose:** **用途 / Purpose:** 为 mass and update inertia and center of mass 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetMassAndUpdateInertiaAndCenterOfMass(gameEntity, 0);
```

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity, float mass)`

**用途 / Purpose:** **用途 / Purpose:** 为 mass and update inertia and center of mass 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetMassAndUpdateInertiaAndCenterOfMass(gameEntity, 0);
```

### SetCenterOfMass
`public static void SetCenterOfMass(this GameEntity gameEntity, Vec3 localCenterOfMass)`

**用途 / Purpose:** **用途 / Purpose:** 为 center of mass 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetCenterOfMass(gameEntity, localCenterOfMass);
```

### SetCenterOfMass
`public static void SetCenterOfMass(this WeakGameEntity gameEntity, Vec3 centerOfMass)`

**用途 / Purpose:** **用途 / Purpose:** 为 center of mass 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetCenterOfMass(gameEntity, centerOfMass);
```

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mass space inertia 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetMassSpaceInertia(gameEntity);
```

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mass space inertia 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetMassSpaceInertia(gameEntity);
```

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mass space inverse inertia 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetMassSpaceInverseInertia(gameEntity);
```

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mass space inverse inertia 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetMassSpaceInverseInertia(gameEntity);
```

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this GameEntity gameEntity, Vec3 inertia)`

**用途 / Purpose:** **用途 / Purpose:** 为 mass space inertia 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetMassSpaceInertia(gameEntity, inertia);
```

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this WeakGameEntity gameEntity, Vec3 inertia)`

**用途 / Purpose:** **用途 / Purpose:** 为 mass space inertia 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetMassSpaceInertia(gameEntity, inertia);
```

### SetDamping
`public static void SetDamping(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** **用途 / Purpose:** 为 damping 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetDamping(gameEntity, 0, 0);
```

### SetDamping
`public static void SetDamping(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** **用途 / Purpose:** 为 damping 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetDamping(gameEntity, 0, 0);
```

### SetDampingMT
`public static void SetDampingMT(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** **用途 / Purpose:** 为 damping m t 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetDampingMT(gameEntity, 0, 0);
```

### SetDampingMT
`public static void SetDampingMT(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**用途 / Purpose:** **用途 / Purpose:** 为 damping m t 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetDampingMT(gameEntity, 0, 0);
```

### DisableGravity
`public static void DisableGravity(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableGravity 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.DisableGravity(gameEntity);
```

### DisableGravity
`public static void DisableGravity(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableGravity 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.DisableGravity(gameEntity);
```

### IsGravityDisabled
`public static bool IsGravityDisabled(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 gravity disabled 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsGravityDisabled(gameEntity);
```

### IsGravityDisabled
`public static bool IsGravityDisabled(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 gravity disabled 状态或条件。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.IsGravityDisabled(gameEntity);
```

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear velocity 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLinearVelocity(gameEntity);
```

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear velocity 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLinearVelocity(gameEntity);
```

### SetLinearVelocity
`public static void SetLinearVelocity(this GameEntity gameEntity, Vec3 newLinearVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 linear velocity 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetLinearVelocity(gameEntity, newLinearVelocity);
```

### SetLinearVelocity
`public static void SetLinearVelocity(this WeakGameEntity gameEntity, Vec3 newLinearVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 linear velocity 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetLinearVelocity(gameEntity, newLinearVelocity);
```

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear velocity m t 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLinearVelocityMT(gameEntity);
```

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear velocity m t 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLinearVelocityMT(gameEntity);
```

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 angular velocity 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetAngularVelocity(gameEntity);
```

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 angular velocity 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetAngularVelocity(gameEntity);
```

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 angular velocity m t 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetAngularVelocityMT(gameEntity);
```

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 angular velocity m t 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetAngularVelocityMT(gameEntity);
```

### SetAngularVelocity
`public static void SetAngularVelocity(this GameEntity gameEntity, Vec3 newAngularVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 angular velocity 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetAngularVelocity(gameEntity, newAngularVelocity);
```

### SetAngularVelocity
`public static void SetAngularVelocity(this WeakGameEntity gameEntity, Vec3 newAngularVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 为 angular velocity 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.SetAngularVelocity(gameEntity, newAngularVelocity);
```

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this GameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 physics min max 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetPhysicsMinMax(gameEntity, false, bbmin, bbmax, false);
```

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this WeakGameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 physics min max 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetPhysicsMinMax(gameEntity, false, bbmin, bbmax, false);
```

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity, bool includeChildren)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local physics bounding box 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLocalPhysicsBoundingBox(gameEntity, false);
```

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity, bool includeChildren)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local physics bounding box 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLocalPhysicsBoundingBox(gameEntity, false);
```

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity, Vec3 globalPoint)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear velocity at global point for entity with dynamic body 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(entity, globalPoint);
```

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this GameEntity entity, Vec3 globalPoint)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear velocity at global point for entity with dynamic body 的结果。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(entity, globalPoint);
```

### ComputeVelocityDeltaFromImpulse
`public static void ComputeVelocityDeltaFromImpulse(this WeakGameEntity gameEntity, in Vec3 impulseGlobal, in Vec3 impulsiveTorqueGlobal, out Vec3 deltaGlobalLinearVelocity, out Vec3 deltaGlobalAngularVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ComputeVelocityDeltaFromImpulse 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntityPhysicsExtensions.ComputeVelocityDeltaFromImpulse(gameEntity, impulseGlobal, impulsiveTorqueGlobal, deltaGlobalLinearVelocity, deltaGlobalAngularVelocity);
```

## 使用示例

```csharp
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

## 参见

- [本区域目录](../)