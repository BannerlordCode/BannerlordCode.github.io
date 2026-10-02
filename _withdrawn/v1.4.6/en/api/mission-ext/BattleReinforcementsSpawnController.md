---
title: "BattleReinforcementsSpawnController"
description: "BattleReinforcementsSpawnController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleReinforcementsSpawnController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleReinforcementsSpawnController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleReinforcementsSpawnController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleReinforcementsSpawnController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleReinforcementsSpawnController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BattleReinforcementsSpawnController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
