---
title: "BattleSpawnLogic"
description: "BattleSpawnLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 5 exposed members (1 methods, 0 properties, 3 fields). Source: TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs."
---
# BattleSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`

## Overview

BattleSpawnLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 1 methods, 3 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSpawnLogic is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Source.Missions) the module directory; inheritance chain BattleSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleSpawnLogic` | `public BattleSpawnLogic(string selectedSpawnPointSetTag)` | constructor |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `BattleTag` | `public const string BattleTag` | field |
| `SallyOutTag` | `public const string SallyOutTag` | field |
| `ReliefForceAttackTag` | `public const string ReliefForceAttackTag` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace BaseBattleMissionController](../BaseBattleMissionController)
- [same namespace CaravanBattleMissionHandler](../CaravanBattleMissionHandler)
- [same namespace DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController)
- [same namespace DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController)
