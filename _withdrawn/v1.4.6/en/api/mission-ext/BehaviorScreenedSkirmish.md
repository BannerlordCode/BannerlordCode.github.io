---
title: "BehaviorScreenedSkirmish"
description: "BehaviorScreenedSkirmish: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BehaviorScreenedSkirmish.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BehaviorScreenedSkirmish

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorScreenedSkirmish : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorScreenedSkirmish.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BehaviorScreenedSkirmish lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorScreenedSkirmish.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorScreenedSkirmish → BehaviorComponent. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorScreenedSkirmish lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BehaviorScreenedSkirmish → BehaviorComponent. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorScreenedSkirmish.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BehaviorScreenedSkirmish` | `public BehaviorScreenedSkirmish(Formation formation) : base(formation)` | constructor |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | method |
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
