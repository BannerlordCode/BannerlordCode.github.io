---
title: "SimpleMountedPlayerMissionController"
description: "SimpleMountedPlayerMissionController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs."
---
# SimpleMountedPlayerMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SimpleMountedPlayerMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs`

## Overview

SimpleMountedPlayerMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SimpleMountedPlayerMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SimpleMountedPlayerMissionController is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Source.Missions) the module directory; inheritance chain SimpleMountedPlayerMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace BaseBattleMissionController](../BaseBattleMissionController)
- [same namespace BattleSpawnLogic](../BattleSpawnLogic)
- [same namespace CaravanBattleMissionHandler](../CaravanBattleMissionHandler)
- [same namespace DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController)
