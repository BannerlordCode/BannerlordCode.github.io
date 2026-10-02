---
title: "HideoutMissionController"
description: "Auto-generated class reference for HideoutMissionController."
---
# HideoutMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox
**Type:** `public class HideoutMissionController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs

## Overview

Auto-generated stub for `HideoutMissionController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnCreated
`public override void OnCreated()`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnObjectStoppedBeingUsed
`public override void OnObjectStoppedBeingUsed(Agent userAgent,UsableMissionObject usedObject)`

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent,Agent.AIStateFlag flag)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

### OnEndMission
`protected override void OnEndMission()`

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)`

### IsSideDepleted
`public unsafe bool IsSideDepleted(BattleSideEnum side)`

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

## See Also

- [Section index](../)
