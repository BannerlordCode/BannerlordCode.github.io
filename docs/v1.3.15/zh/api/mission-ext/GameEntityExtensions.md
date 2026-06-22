<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GameEntityExtensions` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### Instantiate

```csharp
public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)
```

### CreateSimpleSkeleton

```csharp
public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)
```

### CreateSimpleSkeleton

```csharp
public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)
```

### CreateAgentSkeleton

```csharp
public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)
```

### CreateAgentSkeleton

```csharp
public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)
```

### CreateSkeletonWithActionSet

```csharp
public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)
```

### CreateSkeletonWithActionSet

```csharp
public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)
```

### FadeOut

```csharp
public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)
```

### FadeIn

```csharp
public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)
```

### HideIfNotFadingOut

```csharp
public static void HideIfNotFadingOut(this GameEntity gameEntity)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)