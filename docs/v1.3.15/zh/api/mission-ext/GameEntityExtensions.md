<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class GameEntityExtensions`
**领域:** mission-ext

## 概述

`GameEntityExtensions` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Instantiate
`public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)`

**用途 / Purpose:** 处理 `instantiate` 相关逻辑。

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)`

**用途 / Purpose:** 创建一个 `simple skeleton` 实例或对象。

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)`

**用途 / Purpose:** 创建一个 `simple skeleton` 实例或对象。

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**用途 / Purpose:** 创建一个 `agent skeleton` 实例或对象。

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**用途 / Purpose:** 创建一个 `agent skeleton` 实例或对象。

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 创建一个 `skeleton with action set` 实例或对象。

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 创建一个 `skeleton with action set` 实例或对象。

### FadeOut
`public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)`

**用途 / Purpose:** 处理 `fade out` 相关逻辑。

### FadeIn
`public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)`

**用途 / Purpose:** 处理 `fade in` 相关逻辑。

### HideIfNotFadingOut
`public static void HideIfNotFadingOut(this GameEntity gameEntity)`

**用途 / Purpose:** 处理 `hide if not fading out` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
GameEntityExtensions.Instantiate(scene, weapon, false, false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
