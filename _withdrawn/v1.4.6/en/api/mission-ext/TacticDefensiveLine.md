---
title: "TacticDefensiveLine"
description: "TacticDefensiveLine: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticDefensiveLine.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticDefensiveLine

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticDefensiveLine : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticDefensiveLine.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticDefensiveLine lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticDefensiveLine.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticDefensiveLine → TacticComponent. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticDefensiveLine lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticDefensiveLine → TacticComponent. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticDefensiveLine.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TacticDefensiveLine` | `public TacticDefensiveLine(Team team) : base(team)` | constructor |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | method |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `ResetTacticalPositions` | `protected internal override bool ResetTacticalPositions()` | method |
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
