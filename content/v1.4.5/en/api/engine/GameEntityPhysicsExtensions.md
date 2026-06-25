---
title: "GameEntityPhysicsExtensions"
description: "Auto-generated class reference for GameEntityPhysicsExtensions."
---
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class GameEntityPhysicsExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntityPhysicsExtensions.cs`

## Overview

`GameEntityPhysicsExtensions` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasBody
`public static bool HasBody(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

### HasBody
`public static bool HasBody(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

### AddSphereAsBody
`public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**Purpose:** Adds `sphere as body` to the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.AddSphereAsBody(gameEntity, sphere, 0, bodyFlags);
```

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**Purpose:** Adds `capsule as body` to the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.AddCapsuleAsBody(gameEntity, p1, p2, 0, bodyFlags, "example");
```

### UpdateBodyRestOffset
`public static void UpdateBodyRestOffset(this WeakGameEntity gameEntity, float restOffset)`

**Purpose:** Recalculates and stores the latest representation of `body rest offset`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.UpdateBodyRestOffset(gameEntity, 0);
```

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.PushCapsuleShapeToEntityBody(gameEntity, p1, p2, 0, "example");
```

### AddSphereAsBody
`public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**Purpose:** Adds `sphere as body` to the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.AddSphereAsBody(gameEntity, sphere, 0, bodyFlags);
```

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**Purpose:** Adds `capsule as body` to the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.AddCapsuleAsBody(gameEntity, p1, p2, 0, bodyFlags, "example");
```

### PopCapsuleShapeFromEntityBody
`public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.PopCapsuleShapeFromEntityBody(gameEntity);
```

### RemovePhysics
`public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)`

**Purpose:** Removes `physics` from the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.RemovePhysics(gameEntity, false);
```

### RemovePhysics
`public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)`

**Purpose:** Removes `physics` from the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.RemovePhysics(gameEntity, false);
```

### GetPhysicsState
`public static bool GetPhysicsState(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `physics state` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetPhysicsState(gameEntity);
```

### GetPhysicsState
`public static bool GetPhysicsState(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `physics state` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetPhysicsState(gameEntity);
```

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `physics triangle count` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetPhysicsTriangleCount(gameEntity);
```

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `physics triangle count` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetPhysicsTriangleCount(gameEntity);
```

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)`

**Purpose:** Determines whether the current object already holds `physics definition without flags`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasPhysicsDefinitionWithoutFlags(gameEntity, 0);
```

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)`

**Purpose:** Determines whether the current object already holds `physics definition without flags`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasPhysicsDefinitionWithoutFlags(gameEntity, 0);
```

### HasPhysicsBody
`public static bool HasPhysicsBody(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `physics body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasPhysicsBody(gameEntity);
```

### HasPhysicsBody
`public static bool HasPhysicsBody(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `physics body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasPhysicsBody(gameEntity);
```

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `dynamic rigid body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasDynamicRigidBody(gameEntity);
```

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `dynamic rigid body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasDynamicRigidBody(gameEntity);
```

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `kinematic rigid body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasKinematicRigidBody(gameEntity);
```

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `kinematic rigid body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasKinematicRigidBody(gameEntity);
```

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `static physics body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasStaticPhysicsBody(gameEntity);
```

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `static physics body`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasStaticPhysicsBody(gameEntity);
```

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `dynamic rigid body and active simulation`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasDynamicRigidBodyAndActiveSimulation(gameEntity);
```

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object already holds `dynamic rigid body and active simulation`.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.HasDynamicRigidBodyAndActiveSimulation(gameEntity);
```

### CreateVariableRatePhysics
`public static void CreateVariableRatePhysics(this GameEntity gameEntity, bool forChildren)`

**Purpose:** Constructs a new `variable rate physics` entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.CreateVariableRatePhysics(gameEntity, false);
```

### CreateVariableRatePhysics
`public static void CreateVariableRatePhysics(this WeakGameEntity gameEntity, bool forChildren)`

**Purpose:** Constructs a new `variable rate physics` entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.CreateVariableRatePhysics(gameEntity, false);
```

### SetPhysicsState
`public static void SetPhysicsState(this GameEntity gameEntity, bool isEnabled, bool setChildren)`

**Purpose:** Assigns a new value to `physics state` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetPhysicsState(gameEntity, false, false);
```

### SetPhysicsState
`public static void SetPhysicsState(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)`

**Purpose:** Assigns a new value to `physics state` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetPhysicsState(gameEntity, false, false);
```

### SetPhysicsStateOnlyVariable
`public static void SetPhysicsStateOnlyVariable(this GameEntity gameEntity, bool isEnabled, bool setChildren)`

**Purpose:** Assigns a new value to `physics state only variable` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetPhysicsStateOnlyVariable(gameEntity, false, false);
```

### SetPhysicsStateOnlyVariable
`public static void SetPhysicsStateOnlyVariable(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)`

**Purpose:** Assigns a new value to `physics state only variable` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetPhysicsStateOnlyVariable(gameEntity, false, false);
```

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this GameEntity gameEntity)`

**Purpose:** Removes `engine physics` from the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.RemoveEnginePhysics(gameEntity);
```

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this WeakGameEntity gameEntity)`

**Purpose:** Removes `engine physics` from the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.RemoveEnginePhysics(gameEntity);
```

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `engine body sleeping` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsEngineBodySleeping(gameEntity);
```

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `engine body sleeping` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsEngineBodySleeping(gameEntity);
```

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `dynamic body stationary` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsDynamicBodyStationary(gameEntity);
```

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `dynamic body stationary` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsDynamicBodyStationary(gameEntity);
```

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `dynamic body stationary m t` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsDynamicBodyStationaryMT(gameEntity);
```

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `dynamic body stationary m t` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsDynamicBodyStationaryMT(gameEntity);
```

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ReplacePhysicsBodyWithQuadPhysicsBody(gameEntity, vertices, 0, physicsMaterial, bodyFlags, indices, 0);
```

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity, UIntPtr vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, UIntPtr indices, int numberOfIndices)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ReplacePhysicsBodyWithQuadPhysicsBody(gameEntity, vertices, 0, physicsMaterial, bodyFlags, indices, 0);
```

### GetBodyShape
`public static PhysicsShape GetBodyShape(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `body shape` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetBodyShape(gameEntity);
```

### GetBodyShape
`public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `body shape` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetBodyShape(gameEntity);
```

### SetBodyShape
`public static void SetBodyShape(this GameEntity gameEntity, PhysicsShape shape)`

**Purpose:** Assigns a new value to `body shape` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetBodyShape(gameEntity, shape);
```

### SetBodyShape
`public static void SetBodyShape(this WeakGameEntity gameEntity, PhysicsShape shape)`

**Purpose:** Assigns a new value to `body shape` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetBodyShape(gameEntity, shape);
```

### AddPhysics
`public static void AddPhysics(this GameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialGlobalVelocity, Vec3 angularGlobalVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**Purpose:** Adds `physics` to the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.AddPhysics(gameEntity, 0, localCenterOfMass, body, initialGlobalVelocity, angularGlobalVelocity, physicsMaterial, false, 0);
```

### AddPhysics
`public static void AddPhysics(this WeakGameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialVelocity, Vec3 angularVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**Purpose:** Adds `physics` to the current collection or state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.AddPhysics(gameEntity, 0, localCenterOfMass, body, initialVelocity, angularVelocity, physicsMaterial, false, 0);
```

### SetVelocityLimits
`public static void SetVelocityLimits(this GameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**Purpose:** Assigns a new value to `velocity limits` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetVelocityLimits(gameEntity, 0, 0);
```

### SetVelocityLimits
`public static void SetVelocityLimits(this WeakGameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**Purpose:** Assigns a new value to `velocity limits` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetVelocityLimits(gameEntity, 0, 0);
```

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity, float maxDepenetrationVelocity)`

**Purpose:** Assigns a new value to `max depenetration velocity` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetMaxDepenetrationVelocity(gameEntity, 0);
```

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity, float maxDepenetrationVelocity)`

**Purpose:** Assigns a new value to `max depenetration velocity` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetMaxDepenetrationVelocity(gameEntity, 0);
```

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this GameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**Purpose:** Assigns a new value to `solver iteration counts` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetSolverIterationCounts(gameEntity, 0, 0);
```

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this WeakGameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**Purpose:** Assigns a new value to `solver iteration counts` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetSolverIterationCounts(gameEntity, 0, 0);
```

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**Purpose:** Applies the effect of `local impulse to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyLocalImpulseToDynamicBody(gameEntity, localPosition, impulse);
```

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**Purpose:** Applies the effect of `local impulse to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyLocalImpulseToDynamicBody(gameEntity, localPosition, impulse);
```

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this GameEntity gameEntity, Vec3 force, ForceMode forceMode)`

**Purpose:** Applies the effect of `force to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyForceToDynamicBody(gameEntity, force, forceMode);
```

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity, Vec3 force, ForceMode forceMode)`

**Purpose:** Applies the effect of `force to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyForceToDynamicBody(gameEntity, force, forceMode);
```

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, ForceMode forceMode)`

**Purpose:** Applies the effect of `global force at local pos to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyGlobalForceAtLocalPosToDynamicBody(gameEntity, localPosition, globalForce, forceMode);
```

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, ForceMode forceMode)`

**Purpose:** Applies the effect of `global force at local pos to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyGlobalForceAtLocalPosToDynamicBody(gameEntity, localPosition, globalForce, forceMode);
```

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity, Vec3 torque, ForceMode forceMode)`

**Purpose:** Applies the effect of `torque to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyTorqueToDynamicBody(gameEntity, torque, forceMode);
```

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity, Vec3 torque, ForceMode forceMode)`

**Purpose:** Applies the effect of `torque to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyTorqueToDynamicBody(gameEntity, torque, forceMode);
```

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 localForce, ForceMode forceMode)`

**Purpose:** Applies the effect of `local force at local pos to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyLocalForceAtLocalPosToDynamicBody(gameEntity, localPosition, localForce, forceMode);
```

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 localForce, ForceMode forceMode)`

**Purpose:** Applies the effect of `local force at local pos to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyLocalForceAtLocalPosToDynamicBody(gameEntity, localPosition, localForce, forceMode);
```

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity, Vec3 acceleration)`

**Purpose:** Applies the effect of `acceleration to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyAccelerationToDynamicBody(gameEntity, acceleration);
```

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity, Vec3 acceleration)`

**Purpose:** Applies the effect of `acceleration to dynamic body` to the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ApplyAccelerationToDynamicBody(gameEntity, acceleration);
```

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this GameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.DisableDynamicBodySimulation(gameEntity);
```

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.DisableDynamicBodySimulation(gameEntity);
```

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.DisableDynamicBodySimulationMT(gameEntity);
```

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.DisableDynamicBodySimulationMT(gameEntity);
```

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)`

**Purpose:** Converts `dynamic body to ray cast` into another representation or type.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ConvertDynamicBodyToRayCast(gameEntity);
```

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity)`

**Purpose:** Converts `dynamic body to ray cast` into another representation or type.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ConvertDynamicBodyToRayCast(gameEntity);
```

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this GameEntity gameEntity, bool value)`

**Purpose:** Assigns a new value to `physics move to batched` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetPhysicsMoveToBatched(gameEntity, false);
```

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity, bool value)`

**Purpose:** Assigns a new value to `physics move to batched` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetPhysicsMoveToBatched(gameEntity, false);
```

### EnableDynamicBody
`public static void EnableDynamicBody(this GameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.EnableDynamicBody(gameEntity);
```

### EnableDynamicBody
`public static void EnableDynamicBody(this WeakGameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.EnableDynamicBody(gameEntity);
```

### GetMass
`public static float GetMass(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `mass` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetMass(gameEntity);
```

### GetMass
`public static float GetMass(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `mass` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetMass(gameEntity);
```

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity, float mass)`

**Purpose:** Assigns a new value to `mass and update inertia and center of mass` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetMassAndUpdateInertiaAndCenterOfMass(gameEntity, 0);
```

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity, float mass)`

**Purpose:** Assigns a new value to `mass and update inertia and center of mass` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetMassAndUpdateInertiaAndCenterOfMass(gameEntity, 0);
```

### SetCenterOfMass
`public static void SetCenterOfMass(this GameEntity gameEntity, Vec3 localCenterOfMass)`

**Purpose:** Assigns a new value to `center of mass` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetCenterOfMass(gameEntity, localCenterOfMass);
```

### SetCenterOfMass
`public static void SetCenterOfMass(this WeakGameEntity gameEntity, Vec3 centerOfMass)`

**Purpose:** Assigns a new value to `center of mass` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetCenterOfMass(gameEntity, centerOfMass);
```

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `mass space inertia` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetMassSpaceInertia(gameEntity);
```

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `mass space inertia` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetMassSpaceInertia(gameEntity);
```

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `mass space inverse inertia` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetMassSpaceInverseInertia(gameEntity);
```

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `mass space inverse inertia` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetMassSpaceInverseInertia(gameEntity);
```

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this GameEntity gameEntity, Vec3 inertia)`

**Purpose:** Assigns a new value to `mass space inertia` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetMassSpaceInertia(gameEntity, inertia);
```

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this WeakGameEntity gameEntity, Vec3 inertia)`

**Purpose:** Assigns a new value to `mass space inertia` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetMassSpaceInertia(gameEntity, inertia);
```

### SetDamping
`public static void SetDamping(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Assigns a new value to `damping` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetDamping(gameEntity, 0, 0);
```

### SetDamping
`public static void SetDamping(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Assigns a new value to `damping` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetDamping(gameEntity, 0, 0);
```

### SetDampingMT
`public static void SetDampingMT(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Assigns a new value to `damping m t` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetDampingMT(gameEntity, 0, 0);
```

### SetDampingMT
`public static void SetDampingMT(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Assigns a new value to `damping m t` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetDampingMT(gameEntity, 0, 0);
```

### DisableGravity
`public static void DisableGravity(this GameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.DisableGravity(gameEntity);
```

### DisableGravity
`public static void DisableGravity(this WeakGameEntity gameEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.DisableGravity(gameEntity);
```

### IsGravityDisabled
`public static bool IsGravityDisabled(this GameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `gravity disabled` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsGravityDisabled(gameEntity);
```

### IsGravityDisabled
`public static bool IsGravityDisabled(this WeakGameEntity gameEntity)`

**Purpose:** Determines whether the current object is in the `gravity disabled` state or condition.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.IsGravityDisabled(gameEntity);
```

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `linear velocity` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLinearVelocity(gameEntity);
```

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `linear velocity` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLinearVelocity(gameEntity);
```

### SetLinearVelocity
`public static void SetLinearVelocity(this GameEntity gameEntity, Vec3 newLinearVelocity)`

**Purpose:** Assigns a new value to `linear velocity` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetLinearVelocity(gameEntity, newLinearVelocity);
```

### SetLinearVelocity
`public static void SetLinearVelocity(this WeakGameEntity gameEntity, Vec3 newLinearVelocity)`

**Purpose:** Assigns a new value to `linear velocity` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetLinearVelocity(gameEntity, newLinearVelocity);
```

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `linear velocity m t` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLinearVelocityMT(gameEntity);
```

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `linear velocity m t` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLinearVelocityMT(gameEntity);
```

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `angular velocity` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetAngularVelocity(gameEntity);
```

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `angular velocity` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetAngularVelocity(gameEntity);
```

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)`

**Purpose:** Reads and returns the `angular velocity m t` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetAngularVelocityMT(gameEntity);
```

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `angular velocity m t` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetAngularVelocityMT(gameEntity);
```

### SetAngularVelocity
`public static void SetAngularVelocity(this GameEntity gameEntity, Vec3 newAngularVelocity)`

**Purpose:** Assigns a new value to `angular velocity` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetAngularVelocity(gameEntity, newAngularVelocity);
```

### SetAngularVelocity
`public static void SetAngularVelocity(this WeakGameEntity gameEntity, Vec3 newAngularVelocity)`

**Purpose:** Assigns a new value to `angular velocity` and updates the object's internal state.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.SetAngularVelocity(gameEntity, newAngularVelocity);
```

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this GameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**Purpose:** Reads and returns the `physics min max` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetPhysicsMinMax(gameEntity, false, bbmin, bbmax, false);
```

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this WeakGameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**Purpose:** Reads and returns the `physics min max` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetPhysicsMinMax(gameEntity, false, bbmin, bbmax, false);
```

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity, bool includeChildren)`

**Purpose:** Reads and returns the `local physics bounding box` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLocalPhysicsBoundingBox(gameEntity, false);
```

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity, bool includeChildren)`

**Purpose:** Reads and returns the `local physics bounding box` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLocalPhysicsBoundingBox(gameEntity, false);
```

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity, Vec3 globalPoint)`

**Purpose:** Reads and returns the `linear velocity at global point for entity with dynamic body` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(entity, globalPoint);
```

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this GameEntity entity, Vec3 globalPoint)`

**Purpose:** Reads and returns the `linear velocity at global point for entity with dynamic body` value held by the current object.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(entity, globalPoint);
```

### ComputeVelocityDeltaFromImpulse
`public static void ComputeVelocityDeltaFromImpulse(this WeakGameEntity gameEntity, in Vec3 impulseGlobal, in Vec3 impulsiveTorqueGlobal, out Vec3 deltaGlobalLinearVelocity, out Vec3 deltaGlobalAngularVelocity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameEntityPhysicsExtensions.ComputeVelocityDeltaFromImpulse(gameEntity, impulseGlobal, impulsiveTorqueGlobal, deltaGlobalLinearVelocity, deltaGlobalAngularVelocity);
```

## Usage Example

```csharp
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

## See Also

- [Area Index](../)