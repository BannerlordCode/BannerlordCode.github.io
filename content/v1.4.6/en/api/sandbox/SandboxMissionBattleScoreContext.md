---
title: "SandboxMissionBattleScoreContext"
description: "SandboxMissionBattleScoreContext: a public class in SandBox, inheriting BattleScoreContext; 4 exposed members (2 methods, 1 properties, 0 fields). Source: SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs."
---
# SandboxMissionBattleScoreContext

**Namespace:** `SandBox.Missions.BattleScore`
**Module:** `SandBox`
**Type:** `public class SandboxMissionBattleScoreContext : BattleScoreContext`
**File:** `SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs`

## Overview

SandboxMissionBattleScoreContext lives in the SandBox module, source file SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs. It is a public class, implementing/inheriting BattleScoreContext; the inheritance chain is SandboxMissionBattleScoreContext → BattleScoreContext. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxMissionBattleScoreContext is a top-level type in SandBox, namespace differing from (SandBox.Missions.BattleScore) the module directory; inheritance chain SandboxMissionBattleScoreContext → BattleScoreContext. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. BattleScoreContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandboxMissionBattleScoreContext` | `public SandboxMissionBattleScoreContext(Mission mission)` | constructor |
| `IsPowerComparisonRelevant` | `public override bool IsPowerComparisonRelevant` | property |
| `GetAttackerBanner` | `public override Banner GetAttackerBanner()` | method |
| `GetDefenderBanner` | `public override Banner GetDefenderBanner()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SandboxSimulationBattleScoreContext](../SandboxSimulationBattleScoreContext)
