---
title: "WorldPosition"
description: "WorldPosition 的自动生成类参考。"
---
# WorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WorldPosition`
**Base:** 无
**File:** `TaleWorlds.Engine/WorldPosition.cs`

## 概述

`WorldPosition` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AsVec2` | `public Vec2 AsVec2 { get; }` |
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### SetVec3
`public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)`

**用途 / Purpose:** **用途 / Purpose:** 为 vec3 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
worldPosition.SetVec3(navMesh, position, false);
```

### GetNavMesh
`public UIntPtr GetNavMesh()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nav mesh 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMesh();
```

### GetNavMeshMT
`public UIntPtr GetNavMeshMT()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nav mesh m t 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshMT();
```

### GetNearestNavMesh
`public UIntPtr GetNearestNavMesh()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nearest nav mesh 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNearestNavMesh();
```

### GetNavMeshZ
`public float GetNavMeshZ()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nav mesh z 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshZ();
```

### GetNavMeshZMT
`public float GetNavMeshZMT()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nav mesh z m t 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshZMT();
```

### GetGroundZ
`public float GetGroundZ()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ground z 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundZ();
```

### GetGroundZMT
`public float GetGroundZMT()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ground z m t 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundZMT();
```

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nav mesh vec3 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshVec3();
```

### GetNavMeshVec3MT
`public Vec3 GetNavMeshVec3MT()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 nav mesh vec3 m t 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshVec3MT();
```

### GetGroundVec3
`public Vec3 GetGroundVec3()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ground vec3 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundVec3();
```

### GetGroundVec3MT
`public Vec3 GetGroundVec3MT()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ground vec3 m t 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundVec3MT();
```

### GetVec3WithoutValidity
`public Vec3 GetVec3WithoutValidity()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 vec3 without validity 的结果。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.GetVec3WithoutValidity();
```

### SetVec2
`public void SetVec2(Vec2 value)`

**用途 / Purpose:** **用途 / Purpose:** 为 vec2 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
worldPosition.SetVec2(value);
```

### DistanceSquaredWithLimit
`public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistanceSquaredWithLimit 对应的操作。

```csharp
// 先通过子系统 API 拿到 WorldPosition 实例
WorldPosition worldPosition = ...;
var result = worldPosition.DistanceSquaredWithLimit(targetPoint, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WorldPosition worldPosition = ...;
worldPosition.SetVec3(navMesh, position, false);
```

## 参见

- [本区域目录](../)