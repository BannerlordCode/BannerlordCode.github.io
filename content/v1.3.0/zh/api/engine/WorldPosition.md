---
title: "WorldPosition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorldPosition`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `vec3` 的值或状态。

### GetNavMesh
`public UIntPtr GetNavMesh()`

**用途 / Purpose:** 获取 `nav mesh` 的当前值。

### GetNavMeshMT
`public UIntPtr GetNavMeshMT()`

**用途 / Purpose:** 获取 `nav mesh m t` 的当前值。

### GetNearestNavMesh
`public UIntPtr GetNearestNavMesh()`

**用途 / Purpose:** 获取 `nearest nav mesh` 的当前值。

### GetNavMeshZ
`public float GetNavMeshZ()`

**用途 / Purpose:** 获取 `nav mesh z` 的当前值。

### GetNavMeshZMT
`public float GetNavMeshZMT()`

**用途 / Purpose:** 获取 `nav mesh z m t` 的当前值。

### GetGroundZ
`public float GetGroundZ()`

**用途 / Purpose:** 获取 `ground z` 的当前值。

### GetGroundZMT
`public float GetGroundZMT()`

**用途 / Purpose:** 获取 `ground z m t` 的当前值。

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**用途 / Purpose:** 获取 `nav mesh vec3` 的当前值。

### GetNavMeshVec3MT
`public Vec3 GetNavMeshVec3MT()`

**用途 / Purpose:** 获取 `nav mesh vec3 m t` 的当前值。

### GetGroundVec3
`public Vec3 GetGroundVec3()`

**用途 / Purpose:** 获取 `ground vec3` 的当前值。

### GetGroundVec3MT
`public Vec3 GetGroundVec3MT()`

**用途 / Purpose:** 获取 `ground vec3 m t` 的当前值。

### GetVec3WithoutValidity
`public Vec3 GetVec3WithoutValidity()`

**用途 / Purpose:** 获取 `vec3 without validity` 的当前值。

### SetVec2
`public void SetVec2(Vec2 value)`

**用途 / Purpose:** 设置 `vec2` 的值或状态。

### DistanceSquaredWithLimit
`public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)`

**用途 / Purpose:** 处理 `distance squared with limit` 相关逻辑。

## 使用示例

```csharp
var value = new WorldPosition();
value.SetVec3(navMesh, position, false);
```

## 参见

- [完整类目录](../catalog)