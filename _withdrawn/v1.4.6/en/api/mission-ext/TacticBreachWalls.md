---
title: "TacticBreachWalls"
description: "TacticBreachWalls: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 7 exposed members (4 methods, 0 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticBreachWalls.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticBreachWalls

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticBreachWalls : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticBreachWalls.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticBreachWalls lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticBreachWalls.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticBreachWalls → TacticComponent. It exposes 7 public/protected members: 4 methods, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticBreachWalls lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticBreachWalls → TacticComponent. The surface is method-led (methods 4/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticBreachWalls.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TacticBreachWalls` | `public TacticBreachWalls(Team team) : base(team)` | constructor |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | method |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | method |
| `SameBehaviorFactor` | `public const float SameBehaviorFactor` | field |
| `SameSideFactor` | `public const float SameSideFactor` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TacticComponent](../TacticComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
