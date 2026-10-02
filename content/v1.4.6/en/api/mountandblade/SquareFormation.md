---
title: "SquareFormation"
description: "SquareFormation: a public class in TaleWorlds.MountAndBlade, inheriting LineFormation; 22 exposed members (17 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SquareFormation.cs."
---
# SquareFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SquareFormation : LineFormation`
**File:** `TaleWorlds.MountAndBlade/SquareFormation.cs`

## Overview

SquareFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SquareFormation.cs. It is a public class, implementing/inheriting LineFormation; the inheritance chain is SquareFormation → LineFormation → IFormationArrangement. It exposes 22 public/protected members: 17 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SquareFormation is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SquareFormation → LineFormation → IFormationArrangement. The surface is method-led (methods 17/22, properties 4/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SquareFormation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `public override float Width` | property |
| `Depth` | `public override float Depth` | property |
| `MinimumWidth` | `public override float MinimumWidth` | property |
| `MaximumWidth` | `public override float MaximumWidth` | property |
| `SquareFormation` | `public SquareFormation(IFormation owner) : base(owner, true, true)` | constructor |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | method |
| `DeepCopyFrom` | `public override void DeepCopyFrom(IFormationArrangement arrangement)` | method |
| `FormFromBorderSideWidth` | `public void FormFromBorderSideWidth(float borderSideWidth)` | method |
| `FormFromBorderUnitCountPerSide` | `public void FormFromBorderUnitCountPerSide(int unitCountPerSide)` | method |
| `GetUnitsPerSideFromRankCount` | `public int GetUnitsPerSideFromRankCount(int rankCount)` | method |
| `GetMaximumRankCount` | `protected static int GetMaximumRankCount(int unitCount, out int minimumFlankCount)` | method |
| `FormFromRankCount` | `public void FormFromRankCount(int rankCount)` | method |
| `GetLocalPositionOfUnit` | `protected override Vec2 GetLocalPositionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalPositionOfUnitWithAdjustment` | `protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgentsAdjustment)` | method |
| `GetLocalDirectionOfUnit` | `protected override Vec2 GetLocalDirectionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalDirectionOfUnitOrDefault` | `public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` | method |
| `IsUnitPositionRestrained` | `protected override bool IsUnitPositionRestrained(int fileIndex, int rankIndex)` | method |
| `MakeRestrainedPositionsUnavailable` | `protected override void MakeRestrainedPositionsUnavailable()` | method |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` | method |
| `GetSideWidthFromUnitCount` | `protected static float GetSideWidthFromUnitCount(int sideUnitCount, float interval, float unitDiameter)` | method |
| `TurnBackwards` | `public override void TurnBackwards()` | method |
| `UpdateFrontUnitTypeDelegate` | `protected override void UpdateFrontUnitTypeDelegate()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface LineFormation](../LineFormation)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
