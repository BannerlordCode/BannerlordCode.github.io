---
title: "CircularFormation"
description: "CircularFormation 的自动生成类参考。"
---
# CircularFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularFormation : LineFormation `
**Base:** LineFormation
**Source:** TaleWorlds.MountAndBlade/CircularFormation.cs

## 概述

`CircularFormation` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/CircularFormation.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Clone
`public override IFormationArrangement Clone(IFormation formation) `

### IsDeepenApplicable
`protected override bool IsDeepenApplicable() `

### IsNarrowApplicable
`protected override bool IsNarrowApplicable(int amount) `

### IsUnitPositionRestrained
`protected override bool IsUnitPositionRestrained(int fileIndex,int rankIndex) `

### MakeRestrainedPositionsUnavailable
`protected override void MakeRestrainedPositionsUnavailable() `

### GetLocalDirectionOfUnit
`protected override Vec2 GetLocalDirectionOfUnit(int fileIndex,int rankIndex) `

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit) `

### GetLocalPositionOfUnit
`protected override Vec2 GetLocalPositionOfUnit(int fileIndex,int rankIndex) `

### GetLocalPositionOfUnitWithAdjustment
`protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex,int rankIndex,float distanceBetweenAgentsAdjustment) `

### TryGetUnitPositionIndexFromLocalPosition
`protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition,out int fileIndex,out int rankIndex) `

### GetCurrentMaximumRankCount
`protected int GetCurrentMaximumRankCount(int unitCount) `

### GetCircumferenceFromRankCount
`public float GetCircumferenceFromRankCount(int rankCount) `

### FormFromCircumference
`public void FormFromCircumference(float circumference) `

### GetCircumferenceAux
`protected float GetCircumferenceAux(int unitCount,int rankCount,float radialInterval,float distanceInterval) `

### UpdateFrontUnitTypeDelegate
`protected override void UpdateFrontUnitTypeDelegate() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
