---
title: "BehaviorRetreatToKeep"
description: "BehaviorRetreatToKeep: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorRetreatToKeep.cs."
---
# BehaviorRetreatToKeep

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorRetreatToKeep : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorRetreatToKeep.cs`

## Overview

BehaviorRetreatToKeep lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorRetreatToKeep.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorRetreatToKeep → BehaviorComponent. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorRetreatToKeep is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorRetreatToKeep → BehaviorComponent. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorRetreatToKeep.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorRetreatToKeep` | `public BehaviorRetreatToKeep(Formation formation) : base(formation)` | constructor |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
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
