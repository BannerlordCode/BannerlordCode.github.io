---
title: "BehaviorSallyOut"
description: "BehaviorSallyOut: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 6 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorSallyOut.cs."
---
# BehaviorSallyOut

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorSallyOut : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorSallyOut.cs`

## Overview

BehaviorSallyOut lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorSallyOut.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorSallyOut → BehaviorComponent. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorSallyOut is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorSallyOut → BehaviorComponent. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorSallyOut.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorSallyOut` | `public BehaviorSallyOut(Formation formation) : base(formation)` | constructor |
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
