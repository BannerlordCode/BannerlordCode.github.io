---
title: "SandboxSimulationBattleScoreContext"
description: "SandboxSimulationBattleScoreContext: a public class in SandBox.Missions.BattleScore, inheriting BattleScoreContext; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxSimulationBattleScoreContext

**Namespace:** `SandBox.Missions.BattleScore`
**Module:** `SandBox`
**Type:** `public class SandboxSimulationBattleScoreContext : BattleScoreContext`
**File:** `SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxSimulationBattleScoreContext lives in the SandBox module, source file SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs. It is a public class, implementing/inheriting BattleScoreContext; the inheritance chain is SandboxSimulationBattleScoreContext → BattleScoreContext. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxSimulationBattleScoreContext lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.BattleScore`, inheritance chain SandboxSimulationBattleScoreContext → BattleScoreContext. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SandboxSimulationBattleScoreContext` | `public SandboxSimulationBattleScoreContext(BattleSimulation battleSimulation)` | constructor |
| `IsPowerComparisonRelevant` | `public override bool IsPowerComparisonRelevant` | property |
| `GetAttackerBanner` | `public override Banner GetAttackerBanner()` | method |
| `GetDefenderBanner` | `public override Banner GetDefenderBanner()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleScoreContext](../../mission-ext/BattleScoreContext/)
- [same namespace SandboxMissionBattleScoreContext](../SandboxMissionBattleScoreContext/)
