---
title: "GameEntityWithWorldPosition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityWithWorldPosition`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntityWithWorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class GameEntityWithWorldPosition`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntityWithWorldPosition.cs`

## 概述

`GameEntityWithWorldPosition` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WorldPosition` | `public WorldPosition WorldPosition { get; }` |
| `WorldFrame` | `public WorldFrame WorldFrame { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; }` |

## 主要方法

### InvalidateWorldPosition
`public void InvalidateWorldPosition()`

**用途 / Purpose:** 处理 `invalidate world position` 相关逻辑。

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**用途 / Purpose:** 设置 `custom local frame` 的值或状态。

### GetNavMesh
`public UIntPtr GetNavMesh()`

**用途 / Purpose:** 获取 `nav mesh` 的当前值。

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**用途 / Purpose:** 获取 `nav mesh vec3` 的当前值。

## 使用示例

```csharp
var value = new GameEntityWithWorldPosition();
value.InvalidateWorldPosition();
```

## 参见

- [完整类目录](../catalog)