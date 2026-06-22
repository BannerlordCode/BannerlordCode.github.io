<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityPhysicsExtensions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityPhysicsExtensions

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`GameEntityPhysicsExtensions` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)