---
title: "CircularFormation"
description: "CircularFormation: a public class in TaleWorlds.MountAndBlade, inheriting LineFormation; 20 exposed members (15 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CircularFormation.cs."
---
# CircularFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CircularFormation : LineFormation`
**File:** `TaleWorlds.MountAndBlade/CircularFormation.cs`

## Overview

CircularFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CircularFormation.cs. It is a public class, implementing/inheriting LineFormation; the inheritance chain is CircularFormation → LineFormation → IFormationArrangement. It exposes 20 public/protected members: 15 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CircularFormation is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CircularFormation → LineFormation → IFormationArrangement. The surface is method-led (methods 15/20, properties 4/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CircularFormation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CircularFormation` | `public CircularFormation(IFormation owner) : base(owner, true, true)` | constructor |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | method |
| `IsDeepenApplicable` | `protected override bool IsDeepenApplicable()` | method |
| `IsNarrowApplicable` | `protected override bool IsNarrowApplicable(int amount)` | method |
| `Width` | `public override float Width` | property |
| `Depth` | `public override float Depth` | property |
| `MinimumWidth` | `public override float MinimumWidth` | property |
| `MaximumWidth` | `public override float MaximumWidth` | property |
| `IsUnitPositionRestrained` | `protected override bool IsUnitPositionRestrained(int fileIndex, int rankIndex)` | method |
| `MakeRestrainedPositionsUnavailable` | `protected override void MakeRestrainedPositionsUnavailable()` | method |
| `GetLocalDirectionOfUnit` | `protected override Vec2 GetLocalDirectionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalDirectionOfUnitOrDefault` | `public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` | method |
| `GetLocalPositionOfUnit` | `protected override Vec2 GetLocalPositionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalPositionOfUnitWithAdjustment` | `protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgentsAdjustment)` | method |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` | method |
| `GetCurrentMaximumRankCount` | `protected int GetCurrentMaximumRankCount(int unitCount)` | method |
| `GetCircumferenceFromRankCount` | `public float GetCircumferenceFromRankCount(int rankCount)` | method |
| `FormFromCircumference` | `public void FormFromCircumference(float circumference)` | method |
| `GetCircumferenceAux` | `protected float GetCircumferenceAux(int unitCount, int rankCount, float radialInterval, float distanceInterval)` | method |
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
