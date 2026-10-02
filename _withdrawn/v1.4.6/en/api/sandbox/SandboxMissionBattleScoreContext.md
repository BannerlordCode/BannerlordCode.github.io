---
title: "SandboxMissionBattleScoreContext"
description: "SandboxMissionBattleScoreContext: a public class in SandBox.Missions.BattleScore, inheriting BattleScoreContext; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxMissionBattleScoreContext

**Namespace:** `SandBox.Missions.BattleScore`
**Module:** `SandBox`
**Type:** `public class SandboxMissionBattleScoreContext : BattleScoreContext`
**File:** `SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxMissionBattleScoreContext lives in the SandBox module, source file SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs. It is a public class, implementing/inheriting BattleScoreContext; the inheritance chain is SandboxMissionBattleScoreContext → BattleScoreContext. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxMissionBattleScoreContext lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.BattleScore`, inheritance chain SandboxMissionBattleScoreContext → BattleScoreContext. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SandboxMissionBattleScoreContext` | `public SandboxMissionBattleScoreContext(Mission mission)` | constructor |
| `IsPowerComparisonRelevant` | `public override bool IsPowerComparisonRelevant` | property |
| `GetAttackerBanner` | `public override Banner GetAttackerBanner()` | method |
| `GetDefenderBanner` | `public override Banner GetDefenderBanner()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleScoreContext](../../mission-ext/BattleScoreContext/)
- [same namespace SandboxSimulationBattleScoreContext](../SandboxSimulationBattleScoreContext/)
