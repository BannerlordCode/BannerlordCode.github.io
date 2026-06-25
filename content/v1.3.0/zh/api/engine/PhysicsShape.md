---
title: "PhysicsShape"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PhysicsShape`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PhysicsShape

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class PhysicsShape : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/PhysicsShape.cs`

## 概述

`PhysicsShape` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

### GetCapsule
`public void GetCapsule(ref CapsuleData data, out PhysicsMaterial material, int index)`

**用途 / Purpose:** 获取 `capsule` 的当前值。

### GetBoundingBox
`public void GetBoundingBox(out BoundingBox boundingBox)`

**用途 / Purpose:** 获取 `bounding box` 的当前值。

### GetBoundingBoxCenter
`public Vec3 GetBoundingBoxCenter()`

**用途 / Purpose:** 获取 `bounding box center` 的当前值。

### Transform
`public void Transform(ref MatrixFrame frame)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
PhysicsShape.GetFromResource("example", false);
```

## 参见

- [完整类目录](../catalog)