---
title: "BattleSpawnLogic"
description: "BattleSpawnLogic: a public class in TaleWorlds.MountAndBlade.Source.Missions, inheriting MissionLogic; 5 exposed members (1 methods, 0 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleSpawnLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 1 methods, 3 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSpawnLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Source.Missions`, inheritance chain BattleSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BattleSpawnLogic` | `public BattleSpawnLogic(string selectedSpawnPointSetTag)` | constructor |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `BattleTag` | `public const string BattleTag` | field |
| `SallyOutTag` | `public const string SallyOutTag` | field |
| `ReliefForceAttackTag` | `public const string ReliefForceAttackTag` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace BaseBattleMissionController](../BaseBattleMissionController/)
- [same namespace CaravanBattleMissionHandler](../CaravanBattleMissionHandler/)
- [same namespace DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController/)
- [same namespace DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController/)
