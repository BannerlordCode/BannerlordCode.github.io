---
title: "BehaviorCautiousAdvance"
description: "BehaviorCautiousAdvance: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 7 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BehaviorCautiousAdvance.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BehaviorCautiousAdvance

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class BehaviorCautiousAdvance : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorCautiousAdvance.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BehaviorCautiousAdvance lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorCautiousAdvance.cs. It is a public class (sealed), implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorCautiousAdvance → BehaviorComponent. It exposes 7 public/protected members: 5 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorCautiousAdvance lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BehaviorCautiousAdvance → BehaviorComponent. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorCautiousAdvance.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BehaviorCautiousAdvance` | `public BehaviorCautiousAdvance()` | constructor |
| `BehaviorCautiousAdvance` | `public BehaviorCautiousAdvance(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `OnBehaviorCanceled` | `public override void OnBehaviorCanceled()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `GetAiWeight` | `protected override float GetAiWeight()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BehaviorComponent](../BehaviorComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
