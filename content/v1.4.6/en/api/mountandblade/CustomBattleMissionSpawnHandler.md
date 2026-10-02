---
title: "CustomBattleMissionSpawnHandler"
description: "CustomBattleMissionSpawnHandler: a public class in TaleWorlds.MountAndBlade, inheriting CustomMissionSpawnHandler; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs."
---
# CustomBattleMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleMissionSpawnHandler : CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs`

## Overview

CustomBattleMissionSpawnHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs. It is a public class, implementing/inheriting CustomMissionSpawnHandler; the inheritance chain is CustomBattleMissionSpawnHandler → CustomMissionSpawnHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleMissionSpawnHandler is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.MissionSpawnHandlers) the module directory; inheritance chain CustomBattleMissionSpawnHandler → CustomMissionSpawnHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleMissionSpawnHandler` | `public CustomBattleMissionSpawnHandler(CustomBattleCombatant defenderParty, CustomBattleCombatant attackerParty)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CustomMissionSpawnHandler](../CustomMissionSpawnHandler)
- [same namespace CustomMissionSpawnHandler](../CustomMissionSpawnHandler)
- [same namespace CustomSallyOutMissionController](../CustomSallyOutMissionController)
- [same namespace CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler)
