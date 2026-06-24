<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMissile`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBMissile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBMissile`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBMissile.cs`

## 概述

`MBMissile` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; set; }` |

## 主要方法

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

### GetOldPosition
`public Vec3 GetOldPosition()`

**用途 / Purpose:** 获取 `old position` 的当前值。

### GetVelocity
`public Vec3 GetVelocity()`

**用途 / Purpose:** 获取 `velocity` 的当前值。

### SetVelocity
`public void SetVelocity(in Vec3 velocity)`

**用途 / Purpose:** 设置 `velocity` 的值或状态。

### GetHasRigidBody
`public bool GetHasRigidBody()`

**用途 / Purpose:** 获取 `has rigid body` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMBMissile();
```

## 参见

- [完整类目录](../catalog)