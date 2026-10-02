---
title: "MissionBattleSideSpawnContext"
description: "MissionBattleSideSpawnContext: a public class in TaleWorlds.MountAndBlade; 28 exposed members (13 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs."
---
# MissionBattleSideSpawnContext

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionBattleSideSpawnContext`
**File:** `TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs`

## Overview

MissionBattleSideSpawnContext lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs. It is a public class; the inheritance chain is MissionBattleSideSpawnContext. It exposes 28 public/protected members: 13 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionBattleSideSpawnContext is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionBattleSideSpawnContext. The surface is property-led (properties 14/28, methods 13/28), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TroopSpawnActive` | `public bool TroopSpawnActive` | property |
| `IsPlayerSide` | `public bool IsPlayerSide` | property |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive` | property |
| `SpawnWithHorses` | `public bool SpawnWithHorses` | property |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch` | property |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops` | property |
| `ReinforcementQuotaRequirement` | `public int ReinforcementQuotaRequirement` | property |
| `ReinforcementsSpawnedInLastBatch` | `public int ReinforcementsSpawnedInLastBatch` | property |
| `ReinforcementBatchSize` | `public float ReinforcementBatchSize` | property |
| `HasReservedTroops` | `public bool HasReservedTroops` | property |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements` | property |
| `ForceSpawnPlayerMounted` | `public bool ForceSpawnPlayerMounted` | property |
| `ReinforcementBatchPriority` | `public float ReinforcementBatchPriority` | property |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `ReservedTroopsCount` | `public int ReservedTroopsCount` | property |
| `MissionBattleSideSpawnContext` | `public MissionBattleSideSpawnContext(IBattleMissionAgentSpawnLogic spawnLogic, BattleSideEnum side, IMissionTroopSupplier troopSupplier, bool isPlayerSide, bool forceSpawnPlayerMounted = true)` | constructor |
| `TryReinforcementSpawn` | `public int TryReinforcementSpawn()` | method |
| `GetTeamFormationsSpawnData` | `public void GetTeamFormationsSpawnData([TupleElementNames(new string[]` | method |
| `ReserveTroops` | `public void ReserveTroops(int number)` | method |
| `GetGeneralCharacter` | `public BasicCharacterObject GetGeneralCharacter()` | method |
| `CheckReinforcementBatch` | `public unsafe bool CheckReinforcementBatch()` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroops()` | method |
| `SpawnTroops` | `public int SpawnTroops(int number, bool isReinforcement)` | method |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(bool spawnWithHorses)` | method |
| `SetBannerBearerLogic` | `public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)` | method |
| `SetReinforcementsNotifiedOnLastBatch` | `public void SetReinforcementsNotifiedOnLastBatch(bool value)` | method |
| `SetSpawnTroops` | `public void SetSpawnTroops(bool spawnTroops)` | method |
| `OnInitialSpawnOver` | `public void OnInitialSpawnOver()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
