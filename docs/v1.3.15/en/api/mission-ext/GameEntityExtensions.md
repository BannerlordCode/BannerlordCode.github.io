<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GameEntityExtensions` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)