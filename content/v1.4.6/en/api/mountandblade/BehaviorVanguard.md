---
title: "BehaviorVanguard"
description: "BehaviorVanguard: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 7 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorVanguard.cs."
---
# BehaviorVanguard

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorVanguard : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorVanguard.cs`

## Overview

BehaviorVanguard lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorVanguard.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorVanguard → BehaviorComponent. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorVanguard is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorVanguard → BehaviorComponent. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorVanguard.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorVanguard` | `public BehaviorVanguard(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `OnValidBehaviorSideChanged` | `public override void OnValidBehaviorSideChanged()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | method |
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
