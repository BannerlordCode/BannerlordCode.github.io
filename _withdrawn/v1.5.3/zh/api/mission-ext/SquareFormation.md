---
title: "SquareFormation"
description: "SquareFormation 的自动生成类参考。"
---
# SquareFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SquareFormation : LineFormation `
**Base:** LineFormation
**Source:** TaleWorlds.MountAndBlade/SquareFormation.cs

## 概述

`SquareFormation` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SquareFormation.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Clone
`public override IFormationArrangement Clone(IFormation formation) `

### DeepCopyFrom
`public override void DeepCopyFrom(IFormationArrangement arrangement) `

### FormFromBorderSideWidth
`public void FormFromBorderSideWidth(float borderSideWidth) `

### FormFromBorderUnitCountPerSide
`public void FormFromBorderUnitCountPerSide(int unitCountPerSide) `

### GetUnitsPerSideFromRankCount
`public int GetUnitsPerSideFromRankCount(int rankCount) `

### GetMaximumRankCount
`protected static int GetMaximumRankCount(int unitCount,out int minimumFlankCount) `

### FormFromRankCount
`public void FormFromRankCount(int rankCount) `

### GetLocalPositionOfUnit
`protected override Vec2 GetLocalPositionOfUnit(int fileIndex,int rankIndex) `

### GetLocalPositionOfUnitWithAdjustment
`protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex,int rankIndex,float distanceBetweenAgentsAdjustment) `

### GetLocalDirectionOfUnit
`protected override Vec2 GetLocalDirectionOfUnit(int fileIndex,int rankIndex) `

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit) `

### IsUnitPositionRestrained
`protected override bool IsUnitPositionRestrained(int fileIndex,int rankIndex) `

### MakeRestrainedPositionsUnavailable
`protected override void MakeRestrainedPositionsUnavailable() `

### TryGetUnitPositionIndexFromLocalPosition
`protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition,out int fileIndex,out int rankIndex) `

### GetSideWidthFromUnitCount
`protected static float GetSideWidthFromUnitCount(int sideUnitCount,float interval,float unitDiameter) `

### TurnBackwards
`public override void TurnBackwards() `

### UpdateFrontUnitTypeDelegate
`protected override void UpdateFrontUnitTypeDelegate() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
