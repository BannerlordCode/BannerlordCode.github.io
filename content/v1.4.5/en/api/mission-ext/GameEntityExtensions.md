---
title: "GameEntityExtensions"
description: "Auto-generated class reference for GameEntityExtensions."
---
# GameEntityExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameEntityExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameEntityExtensions.cs`

## Overview

`GameEntityExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Instantiate
`public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)`

**Purpose:** Executes the Instantiate logic.

```csharp
// Static call; no instance required
GameEntityExtensions.Instantiate(scene, weapon, false, false);
```

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)`

**Purpose:** Constructs a new simple skeleton entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityExtensions.CreateSimpleSkeleton(gameEntity, "example");
```

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)`

**Purpose:** Constructs a new simple skeleton entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityExtensions.CreateSimpleSkeleton(gameEntity, "example");
```

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**Purpose:** Constructs a new agent skeleton entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityExtensions.CreateAgentSkeleton(gameEntity, "example", false, actionSet, "example", monster);
```

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)`

**Purpose:** Constructs a new agent skeleton entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityExtensions.CreateAgentSkeleton(gameEntity, "example", false, actionSet, "example", monster);
```

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**Purpose:** Constructs a new skeleton with action set entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityExtensions.CreateSkeletonWithActionSet(gameEntity, animationSystemData);
```

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)`

**Purpose:** Constructs a new skeleton with action set entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntityExtensions.CreateSkeletonWithActionSet(gameEntity, animationSystemData);
```

### FadeOut
`public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)`

**Purpose:** Executes the FadeOut logic.

```csharp
// Static call; no instance required
GameEntityExtensions.FadeOut(gameEntity, 0, false);
```

### FadeIn
`public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)`

**Purpose:** Executes the FadeIn logic.

```csharp
// Static call; no instance required
GameEntityExtensions.FadeIn(gameEntity, false);
```

### HideIfNotFadingOut
`public static void HideIfNotFadingOut(this GameEntity gameEntity)`

**Purpose:** Hides the UI or element associated with if not fading out.

```csharp
// Static call; no instance required
GameEntityExtensions.HideIfNotFadingOut(gameEntity);
```

## Usage Example

```csharp
GameEntityExtensions.Instantiate(scene, weapon, false, false);
```

## See Also

- [Area Index](../)