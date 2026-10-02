---
title: "BehaviorRegroup"
description: "BehaviorRegroup: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorRegroup.cs."
---
# BehaviorRegroup

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorRegroup : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorRegroup.cs`

## Overview

BehaviorRegroup lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorRegroup.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorRegroup → BehaviorComponent. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorRegroup is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorRegroup → BehaviorComponent. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorRegroup.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorRegroup` | `public BehaviorRegroup(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
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
