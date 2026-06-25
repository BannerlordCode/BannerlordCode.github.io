---
title: "MBMissile"
description: "MBMissile 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 MBMissile 实例
MBMissile mBMissile = ...;
var result = mBMissile.GetPosition();
```

### GetOldPosition
`public Vec3 GetOldPosition()`

**用途 / Purpose:** 读取并返回当前对象中 old position 的结果。

```csharp
// 先通过子系统 API 拿到 MBMissile 实例
MBMissile mBMissile = ...;
var result = mBMissile.GetOldPosition();
```

### GetVelocity
`public Vec3 GetVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 velocity 的结果。

```csharp
// 先通过子系统 API 拿到 MBMissile 实例
MBMissile mBMissile = ...;
var result = mBMissile.GetVelocity();
```

### SetVelocity
`public void SetVelocity(in Vec3 velocity)`

**用途 / Purpose:** 为 velocity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBMissile 实例
MBMissile mBMissile = ...;
mBMissile.SetVelocity(velocity);
```

### GetHasRigidBody
`public bool GetHasRigidBody()`

**用途 / Purpose:** 读取并返回当前对象中 has rigid body 的结果。

```csharp
// 先通过子系统 API 拿到 MBMissile 实例
MBMissile mBMissile = ...;
var result = mBMissile.GetHasRigidBody();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MBMissile instance = ...;
```

## 参见

- [本区域目录](../)