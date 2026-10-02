---
title: "HideoutMissionController"
description: "HideoutMissionController: a public class in SandBox, inheriting MissionLogic, IMissionAgentSpawnLogic; 21 exposed members (19 methods, 1 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs."
---
# HideoutMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs`

## Overview

HideoutMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs. It is a public class, implementing/inheriting MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is HideoutMissionController → MissionLogic. It exposes 21 public/protected members: 19 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Hideout) the module directory; inheritance chain HideoutMissionController → MissionLogic. The surface is method-led (methods 19/21, properties 1/21), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController)
- [same namespace HideoutAmbushMissionController](../HideoutAmbushMissionController)
- [same namespace HideoutCinematicController](../HideoutCinematicController)
