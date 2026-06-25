---
title: "PhysicsShape"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PhysicsShape`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PhysicsShape

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public sealed class PhysicsShape : Resource`
**Base:** `Resource`
**领域:** engine

## 概述

`PhysicsShape` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFromResource
`public static PhysicsShape GetFromResource(string bodyName, bool mayReturnNull = false)`

**用途 / Purpose:** 获取 `from resource` 的当前值。

### AddPreloadQueueWithName
`public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)`

**用途 / Purpose:** 向当前集合/状态中添加 `preload queue with name`。

### ProcessPreloadQueue
`public static void ProcessPreloadQueue()`

**用途 / Purpose:** 处理 `process preload queue` 相关逻辑。

### UnloadDynamicBodies
`public static void UnloadDynamicBodies()`

**用途 / Purpose:** 处理 `unload dynamic bodies` 相关逻辑。

### CreateCopy
`public PhysicsShape CreateCopy()`

**用途 / Purpose:** 创建一个 `copy` 实例或对象。

### SphereCount
`public int SphereCount()`

**用途 / Purpose:** 处理 `sphere count` 相关逻辑。

### GetSphere
`public void GetSphere(ref SphereData data, int index)`

**用途 / Purpose:** 获取 `sphere` 的当前值。

### GetSphere
`public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)`

**用途 / Purpose:** 获取 `sphere` 的当前值。

### GetDominantMaterialForTriangleMesh
`public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)`

**用途 / Purpose:** 获取 `dominant material for triangle mesh` 的当前值。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### TriangleMeshCount
`public int TriangleMeshCount()`

**用途 / Purpose:** 处理 `triangle mesh count` 相关逻辑。

### TriangleCountInTriangleMesh
`public int TriangleCountInTriangleMesh(int meshIndex)`

**用途 / Purpose:** 处理 `triangle count in triangle mesh` 相关逻辑。

### GetTriangle
`public void GetTriangle(Vec3 triangle, int meshIndex, int triangleIndex)`

**用途 / Purpose:** 获取 `triangle` 的当前值。

### Prepare
`public void Prepare()`

**用途 / Purpose:** 处理 `prepare` 相关逻辑。

### CapsuleCount
`public int CapsuleCount()`

**用途 / Purpose:** 处理 `capsule count` 相关逻辑。

### AddCapsule
`public void AddCapsule(CapsuleData data)`

**用途 / Purpose:** 向当前集合/状态中添加 `capsule`。

### InitDescription
`public void InitDescription()`

**用途 / Purpose:** 初始化 `description` 的状态、资源或绑定。

### AddSphere
`public void AddSphere(SphereData data)`

**用途 / Purpose:** 向当前集合/状态中添加 `sphere`。

### SetCapsule
`public void SetCapsule(CapsuleData data, int index)`

**用途 / Purpose:** 设置 `capsule` 的值或状态。

### GetCapsule
`public void GetCapsule(ref CapsuleData data, int index)`

**用途 / Purpose:** 获取 `capsule` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
PhysicsShape.GetFromResource("example", false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
