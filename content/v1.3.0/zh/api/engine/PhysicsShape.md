---
title: "PhysicsShape"
description: "PhysicsShape 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 from resource 的结果。

```csharp
// 静态调用，不需要实例
PhysicsShape.GetFromResource("example", false);
```

### AddPreloadQueueWithName
`public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)`

**用途 / Purpose:** **用途 / Purpose:** 将 preload queue with name 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PhysicsShape.AddPreloadQueueWithName("example", scale);
```

### ProcessPreloadQueue
`public static void ProcessPreloadQueue()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProcessPreloadQueue 对应的操作。

```csharp
// 静态调用，不需要实例
PhysicsShape.ProcessPreloadQueue();
```

### UnloadDynamicBodies
`public static void UnloadDynamicBodies()`

**用途 / Purpose:** **用途 / Purpose:** 调用 UnloadDynamicBodies 对应的操作。

```csharp
// 静态调用，不需要实例
PhysicsShape.UnloadDynamicBodies();
```

### CreateCopy
`public PhysicsShape CreateCopy()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 copy 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.CreateCopy();
```

### SphereCount
`public int SphereCount()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SphereCount 对应的操作。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.SphereCount();
```

### GetSphere
`public void GetSphere(ref SphereData data, int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sphere 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.GetSphere(data, 0);
```

### GetSphere
`public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sphere 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.GetSphere(data, material, 0);
```

### GetDominantMaterialForTriangleMesh
`public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 dominant material for triangle mesh 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.GetDominantMaterialForTriangleMesh(0);
```

### GetName
`public string GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.GetName();
```

### TriangleMeshCount
`public int TriangleMeshCount()`

**用途 / Purpose:** **用途 / Purpose:** 调用 TriangleMeshCount 对应的操作。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.TriangleMeshCount();
```

### TriangleCountInTriangleMesh
`public int TriangleCountInTriangleMesh(int meshIndex)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TriangleCountInTriangleMesh 对应的操作。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.TriangleCountInTriangleMesh(0);
```

### GetTriangle
`public void GetTriangle(Vec3 triangle, int meshIndex, int triangleIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 triangle 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.GetTriangle(triangle, 0, 0);
```

### Prepare
`public void Prepare()`

**用途 / Purpose:** **用途 / Purpose:** 完成当前对象操作所需的前置准备。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.Prepare();
```

### CapsuleCount
`public int CapsuleCount()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CapsuleCount 对应的操作。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.CapsuleCount();
```

### AddCapsule
`public void AddCapsule(CapsuleData data)`

**用途 / Purpose:** **用途 / Purpose:** 将 capsule 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.AddCapsule(data);
```

### InitDescription
`public void InitDescription()`

**用途 / Purpose:** **用途 / Purpose:** 为 description 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.InitDescription();
```

### AddSphere
`public void AddSphere(SphereData data)`

**用途 / Purpose:** **用途 / Purpose:** 将 sphere 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.AddSphere(data);
```

### SetCapsule
`public void SetCapsule(CapsuleData data, int index)`

**用途 / Purpose:** **用途 / Purpose:** 为 capsule 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.SetCapsule(data, 0);
```

### GetCapsule
`public void GetCapsule(ref CapsuleData data, int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 capsule 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.GetCapsule(data, 0);
```

### GetCapsule
`public void GetCapsule(ref CapsuleData data, out PhysicsMaterial material, int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 capsule 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.GetCapsule(data, material, 0);
```

### GetBoundingBox
`public void GetBoundingBox(out BoundingBox boundingBox)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bounding box 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.GetBoundingBox(boundingBox);
```

### GetBoundingBoxCenter
`public Vec3 GetBoundingBoxCenter()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bounding box center 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
var result = physicsShape.GetBoundingBoxCenter();
```

### Transform
`public void Transform(ref MatrixFrame frame)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Transform 对应的操作。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.Transform(frame);
```

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 PhysicsShape 实例
PhysicsShape physicsShape = ...;
physicsShape.Clear();
```

## 使用示例

```csharp
PhysicsShape.GetFromResource("example", false);
```

## 参见

- [本区域目录](../)