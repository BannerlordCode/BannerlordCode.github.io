---
title: "TacticDefendCastle"
description: "TacticDefendCastle: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 9 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticDefendCastle.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticDefendCastle

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticDefendCastle : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticDefendCastle.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticDefendCastle lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticDefendCastle.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticDefendCastle → TacticComponent. It exposes 9 public/protected members: 5 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticDefendCastle lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticDefendCastle → TacticComponent. The surface is method-led (methods 5/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticDefendCastle.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentTacticState` | `public TacticDefendCastle.TacticState CurrentTacticState` | property |
| `TacticDefendCastle` | `public TacticDefendCastle(Team team) : base(team)` | constructor |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | method |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | method |
| `StopUsingAllMachines` | `protected override void StopUsingAllMachines()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | method |
| `TacticState` | `public enum TacticState` | property |
| `TacticState` | `public enum TacticState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TacticComponent](../TacticComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
