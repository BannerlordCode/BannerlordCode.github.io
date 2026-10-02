---
title: "GameEntityExtensions"
description: "GameEntityExtensions 的自动生成类参考。"
---
# GameEntityExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameEntityExtensions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/GameEntityExtensions.cs

## 概述

`GameEntityExtensions` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/GameEntityExtensions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Instantiate
`public static GameEntity Instantiate(Scene scene,MissionWeapon weapon,bool showHolsterWithWeapon,bool needBatchedVersion) `

### CreateSimpleSkeleton
`public static void CreateSimpleSkeleton(this GameEntity gameEntity,string skeletonName) `
`public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity,string skeletonName) `

### CreateAgentSkeleton
`public static void CreateAgentSkeleton(this GameEntity gameEntity,string skeletonName,bool isHumanoid,MBActionSet actionSet,string monsterUsageSetName,Monster monster) `
`public static void CreateAgentSkeleton(this WeakGameEntity gameEntity,string skeletonName,bool isHumanoid,MBActionSet actionSet,string monsterUsageSetName,Monster monster) `

### CreateSkeletonWithActionSet
`public static void CreateSkeletonWithActionSet(this GameEntity gameEntity,ref AnimationSystemData animationSystemData) `
`public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity,ref AnimationSystemData animationSystemData) `

### FadeOut
`public static void FadeOut(this GameEntity gameEntity,float interval,bool isRemovingFromScene) `

### FadeIn
`public static void FadeIn(this GameEntity gameEntity,bool resetAlpha = true) `

### HideIfNotFadingOut
`public static void HideIfNotFadingOut(this GameEntity gameEntity) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
