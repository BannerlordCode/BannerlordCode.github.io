---
title: "GameEntityExtensions"
description: "GameEntityExtensions 的自动生成类参考。"
---
# GameEntityExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameEntityExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameEntityExtensions.cs`

## 概述

`GameEntityExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Instantiate
`public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.Instantiate(scene, weapon, false, false);
```

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)`

**用途 / Purpose:** 构建一个新的 「simple skeleton」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.CreateSimpleSkeleton(gameEntity, "example");
```

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)`

**用途 / Purpose:** 构建一个新的 「simple skeleton」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.CreateSimpleSkeleton(gameEntity, "example");
```

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**用途 / Purpose:** 构建一个新的 「agent skeleton」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.CreateAgentSkeleton(gameEntity, "example", false, actionSet, "example", monster);
```

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**用途 / Purpose:** 构建一个新的 「agent skeleton」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.CreateAgentSkeleton(gameEntity, "example", false, actionSet, "example", monster);
```

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 构建一个新的 「skeleton with action set」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.CreateSkeletonWithActionSet(gameEntity, animationSystemData);
```

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 构建一个新的 「skeleton with action set」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.CreateSkeletonWithActionSet(gameEntity, animationSystemData);
```

### FadeOut
`public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.FadeOut(gameEntity, 0, false);
```

### FadeIn
`public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.FadeIn(gameEntity, false);
```

### HideIfNotFadingOut
`public static void HideIfNotFadingOut(this GameEntity gameEntity)`

**用途 / Purpose:** 隐藏「if not fading out」对应的界面或元素。

```csharp
// 静态调用，不需要实例
GameEntityExtensions.HideIfNotFadingOut(gameEntity);
```

## 使用示例

```csharp
GameEntityExtensions.Instantiate(scene, weapon, false, false);
```

## 参见

- [本区域目录](../)