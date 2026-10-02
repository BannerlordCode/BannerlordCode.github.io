---
title: "BattleSpawnPathSelector"
description: "BattleSpawnPathSelector 的自动生成类参考。"
---
# BattleSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnPathSelector `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs

## 概述

`BattleSpawnPathSelector` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public void Initialize() `

### HasPath
`public bool HasPath(Path path) `

### GetInitialPathDataOfSide
`public bool GetInitialPathDataOfSide(BattleSideEnum side,out SpawnPathData pathPathData) `

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<ValueTuple<SpawnPathData,float>> GetReinforcementPathsDataOfSide(BattleSideEnum side) `

### FindBestInitialPath
`public static Path FindBestInitialPath(Mission mission,out float pathPivotOffset,out float pathLength,out bool isPathInverted) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
