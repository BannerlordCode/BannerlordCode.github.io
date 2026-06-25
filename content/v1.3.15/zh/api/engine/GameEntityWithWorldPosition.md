---
title: "GameEntityWithWorldPosition"
description: "GameEntityWithWorldPosition 的自动生成类参考。"
---
# GameEntityWithWorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class GameEntityWithWorldPosition`
**Base:** 无
**File:** `TaleWorlds.Engine/GameEntityWithWorldPosition.cs`

## 概述

`GameEntityWithWorldPosition` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameEntity` | `public WeakGameEntity GameEntity { get; }` |
| `WorldPosition` | `public WorldPosition WorldPosition { get; }` |
| `WorldFrame` | `public WorldFrame WorldFrame { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; }` |

## 主要方法

### InvalidateWorldPosition
`public void InvalidateWorldPosition()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameEntityWithWorldPosition 实例
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
gameEntityWithWorldPosition.InvalidateWorldPosition();
```

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**用途 / Purpose:** 为 「custom local frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntityWithWorldPosition 实例
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
gameEntityWithWorldPosition.SetCustomLocalFrame(customLocalFrame);
```

### GetNavMesh
`public UIntPtr GetNavMesh()`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh」 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntityWithWorldPosition 实例
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
var result = gameEntityWithWorldPosition.GetNavMesh();
```

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh vec3」 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntityWithWorldPosition 实例
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
var result = gameEntityWithWorldPosition.GetNavMeshVec3();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
gameEntityWithWorldPosition.InvalidateWorldPosition();
```

## 参见

- [本区域目录](../)