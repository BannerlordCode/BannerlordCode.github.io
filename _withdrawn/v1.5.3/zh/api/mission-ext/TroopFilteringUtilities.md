---
title: "TroopFilteringUtilities"
description: "TroopFilteringUtilities 的自动生成类参考。"
---
# TroopFilteringUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class TroopFilteringUtilities `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs

## 概述

`TroopFilteringUtilities` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetFilter
`public static TroopTraitsMask GetFilter(bool isMounted,bool isRanged,bool isMelee,bool hasHeavyArmor,bool hasThrown,bool hasSpear,bool hasShield) `
`public static TroopTraitsMask GetFilter(params FormationClass[] formationClasses) `
`public static TroopTraitsMask GetFilter(params FormationFilterType[] filterTypes) `

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter,out Func<Agent,int> priorityFunc) `
`public static void GetPriorityFunction(TroopTraitsMask filter,out Func<IAgentOriginBase,int> priorityFunc) `

### GetTroopPriority
`public static int GetTroopPriority(TroopTraitsMask troopMask,int battleTier,TroopTraitsMask filter) `

### GetMaxPriority
`public static int GetMaxPriority(TroopTraitsMask filter) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
