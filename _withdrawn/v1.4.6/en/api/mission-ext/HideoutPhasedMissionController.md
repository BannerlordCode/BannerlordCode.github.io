---
title: "HideoutPhasedMissionController"
description: "HideoutPhasedMissionController: a public class in TaleWorlds.MountAndBlade.Source.Missions, inheriting MissionLogic; 6 exposed members (4 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HideoutPhasedMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

HideoutPhasedMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HideoutPhasedMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 4 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutPhasedMissionController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Source.Missions`, inheritance chain HideoutPhasedMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | property |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `PhaseCount` | `public const int PhaseCount` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace BaseBattleMissionController](../BaseBattleMissionController/)
- [same namespace BattleSpawnLogic](../BattleSpawnLogic/)
- [same namespace CaravanBattleMissionHandler](../CaravanBattleMissionHandler/)
- [same namespace DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController/)
