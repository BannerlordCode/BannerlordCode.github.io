---
title: "BehaviorSkirmishBehindFormation"
description: "BehaviorSkirmishBehindFormation: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorSkirmishBehindFormation.cs."
---
# BehaviorSkirmishBehindFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorSkirmishBehindFormation : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorSkirmishBehindFormation.cs`

## Overview

BehaviorSkirmishBehindFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorSkirmishBehindFormation.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorSkirmishBehindFormation → BehaviorComponent. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorSkirmishBehindFormation is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorSkirmishBehindFormation → BehaviorComponent. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorSkirmishBehindFormation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorSkirmishBehindFormation` | `public BehaviorSkirmishBehindFormation(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
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
