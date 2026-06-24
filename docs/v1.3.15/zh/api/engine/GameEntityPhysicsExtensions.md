<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityPhysicsExtensions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityPhysicsExtensions

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public static class GameEntityPhysicsExtensions`
**领域:** engine

## 概述

`GameEntityPhysicsExtensions` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this GameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**用途 / Purpose:** 向当前集合/状态中添加 `capsule as body`。

### PushCapsuleShapeToEntityBody
`public static void PushCapsuleShapeToEntityBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, string physicsMaterialName)`

**用途 / Purpose:** 处理 `push capsule shape to entity body` 相关逻辑。

### AddSphereAsBody
`public static void AddSphereAsBody(this WeakGameEntity gameEntity, Vec3 sphere, float radius, BodyFlags bodyFlags)`

**用途 / Purpose:** 向当前集合/状态中添加 `sphere as body`。

### AddCapsuleAsBody
`public static void AddCapsuleAsBody(this WeakGameEntity gameEntity, Vec3 p1, Vec3 p2, float radius, BodyFlags bodyFlags, string physicsMaterialName = "")`

**用途 / Purpose:** 向当前集合/状态中添加 `capsule as body`。

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

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `physics triangle count` 的当前值。

### GetPhysicsTriangleCount
`public static int GetPhysicsTriangleCount(this GameEntity gameEntity)`

**用途 / Purpose:** 获取 `physics triangle count` 的当前值。

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
GameEntityPhysicsExtensions.HasBody(gameEntity);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
