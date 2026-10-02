---
title: "CircularFormation"
description: "Auto-generated class reference for CircularFormation."
---
# CircularFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularFormation : LineFormation `
**Base:** LineFormation
**Source:** TaleWorlds.MountAndBlade/CircularFormation.cs

## Overview

Auto-generated stub for `CircularFormation`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

### IsDeepenApplicable
`protected override bool IsDeepenApplicable()`

### IsNarrowApplicable
`protected override bool IsNarrowApplicable(int amount)`

### IsUnitPositionRestrained
`protected override bool IsUnitPositionRestrained(int fileIndex,int rankIndex)`

### MakeRestrainedPositionsUnavailable
`protected override void MakeRestrainedPositionsUnavailable()`

### GetLocalDirectionOfUnit
`protected override Vec2 GetLocalDirectionOfUnit(int fileIndex,int rankIndex)`

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

### GetLocalPositionOfUnit
`protected override Vec2 GetLocalPositionOfUnit(int fileIndex,int rankIndex)`

### GetLocalPositionOfUnitWithAdjustment
`protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex,int rankIndex,float distanceBetweenAgentsAdjustment)`

### TryGetUnitPositionIndexFromLocalPosition
`protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition,out int fileIndex,out int rankIndex)`

### GetCurrentMaximumRankCount
`protected int GetCurrentMaximumRankCount(int unitCount)`

### GetCircumferenceFromRankCount
`public float GetCircumferenceFromRankCount(int rankCount)`

### FormFromCircumference
`public void FormFromCircumference(float circumference)`

### GetCircumferenceAux
`protected float GetCircumferenceAux(int unitCount,int rankCount,float radialInterval,float distanceInterval)`

### UpdateFrontUnitTypeDelegate
`protected override void UpdateFrontUnitTypeDelegate()`

## See Also

- [Section index](../)
