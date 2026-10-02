---
title: "WhileEnteringSettlementBattleMissionController"
description: "WhileEnteringSettlementBattleMissionController: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic, IMissionAgentSpawnLogic; 12 exposed members (10 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WhileEnteringSettlementBattleMissionController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

WhileEnteringSettlementBattleMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs. It is a public class, implementing/inheriting MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is WhileEnteringSettlementBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 12 public/protected members: 10 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WhileEnteringSettlementBattleMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain WhileEnteringSettlementBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 10/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface IMissionAgentSpawnLogic](../../mission-ext/IMissionAgentSpawnLogic/)
- [base / interface IMissionBehavior](../../mission-ext/IMissionBehavior/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
