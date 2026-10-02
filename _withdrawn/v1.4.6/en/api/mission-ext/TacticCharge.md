---
title: "TacticCharge"
description: "TacticCharge: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticCharge.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticCharge

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticCharge : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticCharge.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticCharge lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticCharge.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticCharge → TacticComponent. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticCharge lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticCharge → TacticComponent. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticCharge.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TacticCharge` | `public TacticCharge(Team team) : base(team)` | constructor |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnApply` | `protected internal override void OnApply()` | method |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TacticComponent](../TacticComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
