---
title: "TacticPerimeterDefense"
description: "TacticPerimeterDefense: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticPerimeterDefense.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticPerimeterDefense

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticPerimeterDefense : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticPerimeterDefense.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticPerimeterDefense lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticPerimeterDefense.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticPerimeterDefense → TacticComponent. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticPerimeterDefense lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticPerimeterDefense → TacticComponent. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticPerimeterDefense.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TacticPerimeterDefense` | `public TacticPerimeterDefense(Team team) : base(team)` | constructor |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
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
