<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityPhysicsExtensions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class GameEntityPhysicsExtensions`
**Area:** engine

## Overview

`GameEntityPhysicsExtensions` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**Purpose:** Adds `capsule as body` to the current collection or state.

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)`

**Purpose:** Handles logic related to `push capsule shape to entity body`.

### AddSphereAsBody
`public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**Purpose:** Adds `sphere as body` to the current collection or state.

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**Purpose:** Adds `capsule as body` to the current collection or state.

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

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `physics triangle count`.

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this GameEntity gameEntity)`

**Purpose:** Gets the current value of `physics triangle count`.

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
