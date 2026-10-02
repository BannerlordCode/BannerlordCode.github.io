---
title: "BehaviorAdvance"
description: "BehaviorAdvance: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorAdvance.cs."
---
# BehaviorAdvance

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class BehaviorAdvance : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorAdvance.cs`

## Overview

BehaviorAdvance lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorAdvance.cs. It is a public class (sealed), implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorAdvance → BehaviorComponent. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorAdvance is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorAdvance → BehaviorComponent. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorAdvance.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorAdvance` | `public BehaviorAdvance(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
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
