---
title: "GameEntityExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntityExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameEntityExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameEntityExtensions.cs`

## Overview

`GameEntityExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Instantiate
`public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)`

**Purpose:** Handles logic related to `instantiate`.

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)`

**Purpose:** Creates a new `simple skeleton` instance or object.

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)`

**Purpose:** Creates a new `simple skeleton` instance or object.

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**Purpose:** Creates a new `agent skeleton` instance or object.

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**Purpose:** Creates a new `agent skeleton` instance or object.

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**Purpose:** Creates a new `skeleton with action set` instance or object.

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**Purpose:** Creates a new `skeleton with action set` instance or object.

### FadeOut
`public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)`

**Purpose:** Handles logic related to `fade out`.

### FadeIn
`public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)`

**Purpose:** Handles logic related to `fade in`.

### HideIfNotFadingOut
`public static void HideIfNotFadingOut(this GameEntity gameEntity)`

**Purpose:** Handles logic related to `hide if not fading out`.

## Usage Example

```csharp
GameEntityExtensions.Instantiate(scene, weapon, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)