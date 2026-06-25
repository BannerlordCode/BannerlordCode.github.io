---
title: "GameEntityPhysicsExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityPhysicsExtensions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class GameEntityPhysicsExtensions`
**Base:** none
**File:** `TaleWorlds.Engine/GameEntityPhysicsExtensions.cs`

## Overview

`GameEntityPhysicsExtensions` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasBody
`public static bool HasBody(this GameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `body`.

### HasBody
`public static bool HasBody(this WeakGameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `body`.

### AddSphereAsBody
`public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**Purpose:** Adds `sphere as body` to the current collection or state.

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)`

**Purpose:** Handles logic related to `push capsule shape to entity body`.

### AddSphereAsBody
`public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**Purpose:** Adds `sphere as body` to the current collection or state.

### PopCapsuleShapeFromEntityBody
`public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `pop capsule shape from entity body`.

### RemovePhysics
`public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)`

**Purpose:** Removes `physics` from the current collection or state.

### RemovePhysics
`public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)`

**Purpose:** Removes `physics` from the current collection or state.

### GetPhysicsState
`public static bool GetPhysicsState(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `physics state`.

### GetPhysicsState
`public static bool GetPhysicsState(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `physics state`.

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this GameEntity gameEntity, GameEntity otherGameEntity, float minDistance, float maxDistance)`

**Purpose:** Adds `distance joint` to the current collection or state.

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this WeakGameEntity gameEntity, GameEntity otherGameEntity, float minDistance, float maxDistance)`

**Purpose:** Adds `distance joint` to the current collection or state.

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this GameEntity gameEntity, GameEntity otherGameEntity, MatrixFrame globalFrameOnA, MatrixFrame globalFrameOnB, float minDistance, float maxDistance)`

**Purpose:** Adds `distance joint` to the current collection or state.

### AddDistanceJoint
`public static PhysicsJoint AddDistanceJoint(this WeakGameEntity gameEntity, GameEntity otherGameEntity, MatrixFrame globalFrameOnA, MatrixFrame globalFrameOnB, float minDistance, float maxDistance)`

**Purpose:** Adds `distance joint` to the current collection or state.

### RemoveJoint
`public static void RemoveJoint(this GameEntity gameEntity, PhysicsJoint jointToRemove)`

**Purpose:** Removes `joint` from the current collection or state.

### RemoveJoint
`public static void RemoveJoint(this WeakGameEntity gameEntity, PhysicsJoint jointToRemove)`

**Purpose:** Removes `joint` from the current collection or state.

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)`

**Purpose:** Checks whether the current object has/contains `physics definition without flags`.

### HasPhysicsDefinitionWithoutFlags
`public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)`

**Purpose:** Checks whether the current object has/contains `physics definition without flags`.

### HasPhysicsBody
`public static bool HasPhysicsBody(this GameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `physics body`.

### HasPhysicsBody
`public static bool HasPhysicsBody(this WeakGameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `physics body`.

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this GameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `dynamic rigid body`.

### HasDynamicRigidBody
`public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `dynamic rigid body`.

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this GameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `kinematic rigid body`.

### HasKinematicRigidBody
`public static bool HasKinematicRigidBody(this WeakGameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `kinematic rigid body`.

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this GameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `static physics body`.

### HasStaticPhysicsBody
`public static bool HasStaticPhysicsBody(this WeakGameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `static physics body`.

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this GameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `dynamic rigid body and active simulation`.

### HasDynamicRigidBodyAndActiveSimulation
`public static bool HasDynamicRigidBodyAndActiveSimulation(this WeakGameEntity gameEntity)`

**Purpose:** Checks whether the current object has/contains `dynamic rigid body and active simulation`.

### SetPhysicsState
`public static void SetPhysicsState(this GameEntity gameEntity, bool isEnabled, bool setChildren)`

**Purpose:** Sets the value or state of `physics state`.

### SetPhysicsState
`public static void SetPhysicsState(this WeakGameEntity gameEntity, bool isEnabled, bool setChildren)`

**Purpose:** Sets the value or state of `physics state`.

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this GameEntity gameEntity)`

**Purpose:** Removes `engine physics` from the current collection or state.

### RemoveEnginePhysics
`public static void RemoveEnginePhysics(this WeakGameEntity gameEntity)`

**Purpose:** Removes `engine physics` from the current collection or state.

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `is engine body sleeping`.

### IsEngineBodySleeping
`public static bool IsEngineBodySleeping(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `is engine body sleeping`.

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `is dynamic body stationary`.

### IsDynamicBodyStationary
`public static bool IsDynamicBodyStationary(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `is dynamic body stationary`.

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `is dynamic body stationary m t`.

### IsDynamicBodyStationaryMT
`public static bool IsDynamicBodyStationaryMT(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `is dynamic body stationary m t`.

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this GameEntity gameEntity, Vec3 vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, int indices, int numberOfIndices)`

**Purpose:** Handles logic related to `replace physics body with quad physics body`.

### ReplacePhysicsBodyWithQuadPhysicsBody
`public static void ReplacePhysicsBodyWithQuadPhysicsBody(this WeakGameEntity gameEntity, Vec3 vertices, int numberOfVertices, PhysicsMaterial physicsMaterial, BodyFlags bodyFlags, int indices, int numberOfIndices)`

**Purpose:** Handles logic related to `replace physics body with quad physics body`.

### GetBodyShape
`public static PhysicsShape GetBodyShape(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `body shape`.

### GetBodyShape
`public static PhysicsShape GetBodyShape(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `body shape`.

### SetBodyShape
`public static void SetBodyShape(this GameEntity gameEntity, PhysicsShape shape)`

**Purpose:** Sets the value or state of `body shape`.

### SetBodyShape
`public static void SetBodyShape(this WeakGameEntity gameEntity, PhysicsShape shape)`

**Purpose:** Sets the value or state of `body shape`.

### AddPhysics
`public static void AddPhysics(this GameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialGlobalVelocity, Vec3 angularGlobalVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**Purpose:** Adds `physics` to the current collection or state.

### AddPhysics
`public static void AddPhysics(this WeakGameEntity gameEntity, float mass, Vec3 localCenterOfMass, PhysicsShape body, Vec3 initialVelocity, Vec3 angularVelocity, PhysicsMaterial physicsMaterial, bool isStatic, int collisionGroupID)`

**Purpose:** Adds `physics` to the current collection or state.

### SetVelocityLimits
`public static void SetVelocityLimits(this GameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**Purpose:** Sets the value or state of `velocity limits`.

### SetVelocityLimits
`public static void SetVelocityLimits(this WeakGameEntity gameEntity, float maxLinearVelocity, float maxAngularVelocity)`

**Purpose:** Sets the value or state of `velocity limits`.

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this GameEntity gameEntity, float maxDepenetrationVelocity)`

**Purpose:** Sets the value or state of `max depenetration velocity`.

### SetMaxDepenetrationVelocity
`public static void SetMaxDepenetrationVelocity(this WeakGameEntity gameEntity, float maxDepenetrationVelocity)`

**Purpose:** Sets the value or state of `max depenetration velocity`.

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this GameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**Purpose:** Sets the value or state of `solver iteration counts`.

### SetSolverIterationCounts
`public static void SetSolverIterationCounts(this WeakGameEntity gameEntity, int positionIterationCount, int velocityIterationCount)`

**Purpose:** Sets the value or state of `solver iteration counts`.

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**Purpose:** Applies `local impulse to dynamic body` to the current object.

### ApplyLocalImpulseToDynamicBody
`public static void ApplyLocalImpulseToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 impulse)`

**Purpose:** Applies `local impulse to dynamic body` to the current object.

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this GameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `force to dynamic body` to the current object.

### ApplyForceToDynamicBody
`public static void ApplyForceToDynamicBody(this WeakGameEntity gameEntity, Vec3 force, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `force to dynamic body` to the current object.

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `global force at local pos to dynamic body` to the current object.

### ApplyGlobalForceAtLocalPosToDynamicBody
`public static void ApplyGlobalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 globalForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `global force at local pos to dynamic body` to the current object.

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this GameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `torque to dynamic body` to the current object.

### ApplyTorqueToDynamicBody
`public static void ApplyTorqueToDynamicBody(this WeakGameEntity gameEntity, Vec3 torque, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `torque to dynamic body` to the current object.

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this GameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `local force at local pos to dynamic body` to the current object.

### ApplyLocalForceAtLocalPosToDynamicBody
`public static void ApplyLocalForceAtLocalPosToDynamicBody(this WeakGameEntity gameEntity, Vec3 localPosition, Vec3 localForce, GameEntityPhysicsExtensions.ForceMode forceMode)`

**Purpose:** Applies `local force at local pos to dynamic body` to the current object.

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this GameEntity gameEntity, Vec3 acceleration)`

**Purpose:** Applies `acceleration to dynamic body` to the current object.

### ApplyAccelerationToDynamicBody
`public static void ApplyAccelerationToDynamicBody(this WeakGameEntity gameEntity, Vec3 acceleration)`

**Purpose:** Applies `acceleration to dynamic body` to the current object.

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `disable dynamic body simulation`.

### DisableDynamicBodySimulation
`public static void DisableDynamicBodySimulation(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `disable dynamic body simulation`.

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `disable dynamic body simulation m t`.

### DisableDynamicBodySimulationMT
`public static void DisableDynamicBodySimulationMT(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `disable dynamic body simulation m t`.

### ConvertDynamicBodyToKinematic
`public static void ConvertDynamicBodyToKinematic(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `convert dynamic body to kinematic`.

### ConvertDynamicBodyToKinematic
`public static void ConvertDynamicBodyToKinematic(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `convert dynamic body to kinematic`.

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `convert dynamic body to ray cast`.

### ConvertDynamicBodyToRayCast
`public static void ConvertDynamicBodyToRayCast(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `convert dynamic body to ray cast`.

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this GameEntity gameEntity, bool value)`

**Purpose:** Sets the value or state of `physics move to batched`.

### SetPhysicsMoveToBatched
`public static void SetPhysicsMoveToBatched(this WeakGameEntity gameEntity, bool value)`

**Purpose:** Sets the value or state of `physics move to batched`.

### EnableDynamicBody
`public static void EnableDynamicBody(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `enable dynamic body`.

### EnableDynamicBody
`public static void EnableDynamicBody(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `enable dynamic body`.

### GetMass
`public static float GetMass(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `mass`.

### GetMass
`public static float GetMass(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `mass`.

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this GameEntity gameEntity, float mass)`

**Purpose:** Sets the value or state of `mass and update inertia and center of mass`.

### SetMassAndUpdateInertiaAndCenterOfMass
`public static void SetMassAndUpdateInertiaAndCenterOfMass(this WeakGameEntity gameEntity, float mass)`

**Purpose:** Sets the value or state of `mass and update inertia and center of mass`.

### SetCenterOfMass
`public static void SetCenterOfMass(this GameEntity gameEntity, Vec3 localCenterOfMass)`

**Purpose:** Sets the value or state of `center of mass`.

### SetCenterOfMass
`public static void SetCenterOfMass(this WeakGameEntity gameEntity, Vec3 centerOfMass)`

**Purpose:** Sets the value or state of `center of mass`.

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `mass space inertia`.

### GetMassSpaceInertia
`public static Vec3 GetMassSpaceInertia(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `mass space inertia`.

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `mass space inverse inertia`.

### GetMassSpaceInverseInertia
`public static Vec3 GetMassSpaceInverseInertia(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `mass space inverse inertia`.

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this GameEntity gameEntity, Vec3 inertia)`

**Purpose:** Sets the value or state of `mass space inertia`.

### SetMassSpaceInertia
`public static void SetMassSpaceInertia(this WeakGameEntity gameEntity, Vec3 inertia)`

**Purpose:** Sets the value or state of `mass space inertia`.

### SetDamping
`public static void SetDamping(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Sets the value or state of `damping`.

### SetDamping
`public static void SetDamping(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Sets the value or state of `damping`.

### SetDampingMT
`public static void SetDampingMT(this GameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Sets the value or state of `damping m t`.

### SetDampingMT
`public static void SetDampingMT(this WeakGameEntity gameEntity, float linearDamping, float angularDamping)`

**Purpose:** Sets the value or state of `damping m t`.

### DisableGravity
`public static void DisableGravity(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `disable gravity`.

### DisableGravity
`public static void DisableGravity(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `disable gravity`.

### IsGravityDisabled
`public static bool IsGravityDisabled(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `is gravity disabled`.

### IsGravityDisabled
`public static bool IsGravityDisabled(this WeakGameEntity gameEntity)`

**Purpose:** Handles logic related to `is gravity disabled`.

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `linear velocity`.

### GetLinearVelocity
`public static Vec3 GetLinearVelocity(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `linear velocity`.

### SetLinearVelocity
`public static void SetLinearVelocity(this GameEntity gameEntity, Vec3 newLinearVelocity)`

**Purpose:** Sets the value or state of `linear velocity`.

### SetLinearVelocity
`public static void SetLinearVelocity(this WeakGameEntity gameEntity, Vec3 newLinearVelocity)`

**Purpose:** Sets the value or state of `linear velocity`.

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `linear velocity m t`.

### GetLinearVelocityMT
`public static Vec3 GetLinearVelocityMT(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `linear velocity m t`.

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `angular velocity`.

### GetAngularVelocity
`public static Vec3 GetAngularVelocity(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `angular velocity`.

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `angular velocity m t`.

### GetAngularVelocityMT
`public static Vec3 GetAngularVelocityMT(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `angular velocity m t`.

### SetAngularVelocity
`public static void SetAngularVelocity(this GameEntity gameEntity, Vec3 newAngularVelocity)`

**Purpose:** Sets the value or state of `angular velocity`.

### SetAngularVelocity
`public static void SetAngularVelocity(this WeakGameEntity gameEntity, Vec3 newAngularVelocity)`

**Purpose:** Sets the value or state of `angular velocity`.

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this GameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**Purpose:** Gets the current value of `physics min max`.

### GetLinearVelocityAtGlobalPointForEntityWithDynamicBody
`public static Vec3 GetLinearVelocityAtGlobalPointForEntityWithDynamicBody(this WeakGameEntity entity, Vec3 point)`

**Purpose:** Gets the current value of `linear velocity at global point for entity with dynamic body`.

### GetPhysicsMinMax
`public static void GetPhysicsMinMax(this WeakGameEntity gameEntity, bool includeChildren, out Vec3 bbmin, out Vec3 bbmax, bool returnLocal)`

**Purpose:** Gets the current value of `physics min max`.

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this GameEntity gameEntity, bool includeChildren)`

**Purpose:** Gets the current value of `local physics bounding box`.

### GetLocalPhysicsBoundingBox
`public static BoundingBox GetLocalPhysicsBoundingBox(this WeakGameEntity gameEntity, bool includeChildren)`

**Purpose:** Gets the current value of `local physics bounding box`.

## Usage Example

```csharp
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

## See Also

- [Complete Class Catalog](../catalog)