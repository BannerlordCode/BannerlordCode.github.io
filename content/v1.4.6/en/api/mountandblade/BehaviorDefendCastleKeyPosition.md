---
title: "BehaviorDefendCastleKeyPosition"
description: "BehaviorDefendCastleKeyPosition: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 10 exposed members (8 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorDefendCastleKeyPosition.cs."
---
# BehaviorDefendCastleKeyPosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorDefendCastleKeyPosition : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefendCastleKeyPosition.cs`

## Overview

BehaviorDefendCastleKeyPosition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorDefendCastleKeyPosition.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorDefendCastleKeyPosition → BehaviorComponent. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorDefendCastleKeyPosition is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorDefendCastleKeyPosition → BehaviorComponent. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorDefendCastleKeyPosition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty` | property |
| `BehaviorDefendCastleKeyPosition` | `public BehaviorDefendCastleKeyPosition(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | method |
| `OnValidBehaviorSideChanged` | `public override void OnValidBehaviorSideChanged()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `ResetBehavior` | `public override void ResetBehavior()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `GetAiWeight` | `protected override float GetAiWeight()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BehaviorComponent](../BehaviorComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
