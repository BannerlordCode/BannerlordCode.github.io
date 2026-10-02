---
title: "MissionOptionsComponent"
description: "MissionOptionsComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs."
---
# MissionOptionsComponent

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionOptionsComponent : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs`

## Overview

MissionOptionsComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionOptionsComponent → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 1 methods, 1 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionOptionsComponent is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Source.Missions) the module directory; inheritance chain MissionOptionsComponent → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnOptionsAdded;` | `public event OnMissionAddOptionsDelegate OnOptionsAdded;` | event |
| `OnAddOptionsUIHandler` | `public void OnAddOptionsUIHandler()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace BaseBattleMissionController](../BaseBattleMissionController)
- [same namespace BattleSpawnLogic](../BattleSpawnLogic)
- [same namespace CaravanBattleMissionHandler](../CaravanBattleMissionHandler)
- [same namespace DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController)
