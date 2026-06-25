---
title: "SiegeQuerySystem"
description: "SiegeQuerySystem 的自动生成类参考。"
---
# SiegeQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeQuerySystem`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeQuerySystem.cs`

## 概述

`SiegeQuerySystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin { get; }` |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin { get; }` |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin { get; }` |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin { get; }` |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin { get; }` |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin { get; }` |
| `LeftToMidDir` | `public Vec2 LeftToMidDir { get; }` |
| `MidToLeftDir` | `public Vec2 MidToLeftDir { get; }` |
| `MidToRightDir` | `public Vec2 MidToRightDir { get; }` |
| `RightToMidDir` | `public Vec2 RightToMidDir { get; }` |

## 主要方法

### Expire
`public void Expire()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeQuerySystem 实例
SiegeQuerySystem siegeQuerySystem = ...;
siegeQuerySystem.Expire();
```

### DeterminePositionAssociatedSide
`public int DeterminePositionAssociatedSide(Vec3 position)`

**用途 / Purpose:** 根据当前状态判定「position associated side」的结果。

```csharp
// 先通过子系统 API 拿到 SiegeQuerySystem 实例
SiegeQuerySystem siegeQuerySystem = ...;
var result = siegeQuerySystem.DeterminePositionAssociatedSide(position);
```

### AreSidesRelated
`public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
SiegeQuerySystem.AreSidesRelated(side, 0);
```

### SideDistance
`public static int SideDistance(int connectedSides, int side)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
SiegeQuerySystem.SideDistance(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeQuerySystem siegeQuerySystem = ...;
siegeQuerySystem.Expire();
```

## 参见

- [本区域目录](../)