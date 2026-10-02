---
title: "WhileEnteringSettlementBattleMissionController"
description: "WhileEnteringSettlementBattleMissionController: a public class in SandBox, inheriting MissionLogic, IMissionAgentSpawnLogic; 12 exposed members (10 methods, 1 properties, 0 fields). Source: SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs."
---
# WhileEnteringSettlementBattleMissionController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs`

## Overview

WhileEnteringSettlementBattleMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs. It is a public class, implementing/inheriting MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is WhileEnteringSettlementBattleMissionController → MissionLogic. It exposes 12 public/protected members: 10 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WhileEnteringSettlementBattleMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain WhileEnteringSettlementBattleMissionController → MissionLogic. The surface is method-led (methods 10/12, properties 1/12), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | property |
| `WhileEnteringSettlementBattleMissionController` | `public WhileEnteringSettlementBattleMissionController(IMissionTroopSupplier[]suppliers, int numberOfMaxTroopForPlayer, int numberOfMaxTroopForEnemy)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | method |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | method |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | method |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | method |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | method |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
