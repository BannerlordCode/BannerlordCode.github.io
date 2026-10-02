---
title: "BehaviorDefend"
description: "BehaviorDefend: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 7 exposed members (5 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/BehaviorDefend.cs."
---
# BehaviorDefend

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorDefend : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefend.cs`

## Overview

BehaviorDefend lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorDefend.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorDefend → BehaviorComponent. It exposes 7 public/protected members: 5 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorDefend is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorDefend → BehaviorComponent. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorDefend.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorDefend` | `public BehaviorDefend(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `ResetBehavior` | `public override void ResetBehavior()` | method |
| `GetAiWeight` | `protected override float GetAiWeight()` | method |
| `DefensePosition` | `public WorldPosition DefensePosition` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BehaviorComponent](../BehaviorComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
