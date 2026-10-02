---
title: "HideoutMissionController"
description: "HideoutMissionController: a public class in SandBox.Missions.MissionLogics.Hideout, inheriting MissionLogic, IMissionAgentSpawnLogic; 21 exposed members (19 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HideoutMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

HideoutMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs. It is a public class, implementing/inheriting MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is HideoutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 21 public/protected members: 19 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Hideout`, inheritance chain HideoutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 19/21, properties 1/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | property |
| `HideoutMissionController` | `public HideoutMissionController(IMissionTroopSupplier[]suppliers, BattleSideEnum playerSide, int firstPhaseEnemyTroopCount, int firstPhasePlayerSideTroopCount)` | constructor |
| `OnCreated` | `public override void OnCreated()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnObjectStoppedBeingUsed` | `public override void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)` | method |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | method |
| `SetOverriddenHideoutBossCharacterObject` | `public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | method |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | method |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | method |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)` | method |
| `IsSideDepleted` | `public unsafe bool IsSideDepleted(BattleSideEnum side)` | method |
| `StartBossFightDuelMode` | `public static void StartBossFightDuelMode()` | method |
| `StartBossFightBattleMode` | `public static void StartBossFightBattleMode()` | method |
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
- [same namespace HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController/)
- [same namespace HideoutAmbushMissionController](../HideoutAmbushMissionController/)
- [same namespace HideoutCinematicController](../HideoutCinematicController/)
