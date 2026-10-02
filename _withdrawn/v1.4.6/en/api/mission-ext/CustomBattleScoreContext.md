---
title: "CustomBattleScoreContext"
description: "CustomBattleScoreContext: a public class in TaleWorlds.MountAndBlade.Missions.BattleScore, inheriting BattleScoreContext; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/BattleScore/CustomBattleScoreContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleScoreContext

**Namespace:** `TaleWorlds.MountAndBlade.Missions.BattleScore`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleScoreContext : BattleScoreContext`
**File:** `TaleWorlds.MountAndBlade/Missions/BattleScore/CustomBattleScoreContext.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleScoreContext lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/BattleScore/CustomBattleScoreContext.cs. It is a public class, implementing/inheriting BattleScoreContext; the inheritance chain is CustomBattleScoreContext → BattleScoreContext. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleScoreContext lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions.BattleScore`, inheritance chain CustomBattleScoreContext → BattleScoreContext. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/BattleScore/CustomBattleScoreContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomBattleScoreContext` | `public CustomBattleScoreContext(Mission mission)` | constructor |
| `IsPowerComparisonRelevant` | `public override bool IsPowerComparisonRelevant` | property |
| `GetAttackerBanner` | `public override Banner GetAttackerBanner()` | method |
| `GetDefenderBanner` | `public override Banner GetDefenderBanner()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleScoreContext](../BattleScoreContext/)
- [same namespace BattleScoreContext](../BattleScoreContext/)
