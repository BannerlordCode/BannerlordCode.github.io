---
title: "BehaviorTacticalCharge"
description: "BehaviorTacticalCharge: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BehaviorTacticalCharge.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BehaviorTacticalCharge

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorTacticalCharge : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorTacticalCharge.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BehaviorTacticalCharge lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorTacticalCharge.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorTacticalCharge → BehaviorComponent. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorTacticalCharge lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BehaviorTacticalCharge → BehaviorComponent. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorTacticalCharge.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BehaviorTacticalCharge` | `public BehaviorTacticalCharge(Formation formation) : base(formation)` | constructor |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | method |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty` | property |
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
