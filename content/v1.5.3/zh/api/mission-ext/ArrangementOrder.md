---
title: "ArrangementOrder"
description: "ArrangementOrder 的自动生成类参考。"
---
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementOrder `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/ArrangementOrder.cs

## 概述

`ArrangementOrder` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/ArrangementOrder.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetUnitSpacingOf
`public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a) `

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a) `

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction,out float? walkRestriction) `

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation) `

### OnApply
`public unsafe void OnApply(Formation formation) `

### SoftUpdate
`public void SoftUpdate(Formation formation) `

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation,Agent unit,ArrangementOrder.ArrangementOrderEnum orderEnum) `

### GetUnitSpacing
`public int GetUnitSpacing() `

### Rearrange
`public void Rearrange(Formation formation) `

### RearrangeAux
`public void RearrangeAux(Formation formation,bool isDirectly) `

### TransposeLineFormation
`public unsafe static void TransposeLineFormation(Formation formation) `

### OnCancel
`public void OnCancel(Formation formation) `

### TickOccasionally
`public void TickOccasionally(Formation formation) `

### GetNativeEnum
`public ArrangementOrder.ArrangementOrderEnum GetNativeEnum() `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### OnOrderPositionChanged
`public void OnOrderPositionChanged(Formation formation,Vec2 previousOrderPosition) `

### GetArrangementOrderDefensiveness
`public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum) `

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum,ArrangementOrder.ArrangementOrderEnum nextOrderEnum) `

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex,int rankCount) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
