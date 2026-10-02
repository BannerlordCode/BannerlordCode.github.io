---
title: "BehaviorWaitForLadders"
description: "BehaviorWaitForLadders: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorWaitForLadders.cs."
---
# BehaviorWaitForLadders

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorWaitForLadders : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorWaitForLadders.cs`

## Overview

BehaviorWaitForLadders lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorWaitForLadders.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorWaitForLadders → BehaviorComponent. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorWaitForLadders is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorWaitForLadders → BehaviorComponent. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorWaitForLadders.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorWaitForLadders` | `public BehaviorWaitForLadders(Formation formation) : base(formation)` | constructor |
| `OnValidBehaviorSideChanged` | `public override void OnValidBehaviorSideChanged()` | method |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty` | property |
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
