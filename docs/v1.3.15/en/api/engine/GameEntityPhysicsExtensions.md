<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityPhysicsExtensions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityPhysicsExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `GameEntityPhysicsExtensions` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### HasBody

```csharp
public static bool HasBody(this GameEntity gameEntity)
```

### HasBody

```csharp
public static bool HasBody(this WeakGameEntity gameEntity)
```

### AddSphereAsBody

```csharp
public static void AddSphereAsBody(this GameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)
```

### AddCapsuleAsBody

```csharp
public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")
```

### PushCapsuleShapeToEntityBody

```csharp
public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)
```

### AddSphereAsBody

```csharp
public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)
```

### AddCapsuleAsBody

```csharp
public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")
```

### PopCapsuleShapeFromEntityBody

```csharp
public static void PopCapsuleShapeFromEntityBody(this WeakGameEntity gameEntity)
```

### RemovePhysics

```csharp
public static void RemovePhysics(this GameEntity gameEntity, bool clearingTheScene = false)
```

### RemovePhysics

```csharp
public static void RemovePhysics(this WeakGameEntity gameEntity, bool clearingTheScene = false)
```

### GetPhysicsState

```csharp
public static bool GetPhysicsState(this GameEntity gameEntity)
```

### GetPhysicsState

```csharp
public static bool GetPhysicsState(this WeakGameEntity gameEntity)
```

### GetPhysicsTriangleCount

```csharp
public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)
```

### GetPhysicsTriangleCount

```csharp
public static int GetPhysicsTriangleCount(this GameEntity gameEntity)
```

### HasPhysicsDefinitionWithoutFlags

```csharp
public static bool HasPhysicsDefinitionWithoutFlags(this GameEntity gameEntity, int excludeFlags)
```

### HasPhysicsDefinitionWithoutFlags

```csharp
public static bool HasPhysicsDefinitionWithoutFlags(this WeakGameEntity gameEntity, int excludeFlags)
```

### HasPhysicsBody

```csharp
public static bool HasPhysicsBody(this GameEntity gameEntity)
```

### HasPhysicsBody

```csharp
public static bool HasPhysicsBody(this WeakGameEntity gameEntity)
```

### HasDynamicRigidBody

```csharp
public static bool HasDynamicRigidBody(this GameEntity gameEntity)
```

### HasDynamicRigidBody

```csharp
public static bool HasDynamicRigidBody(this WeakGameEntity gameEntity)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)