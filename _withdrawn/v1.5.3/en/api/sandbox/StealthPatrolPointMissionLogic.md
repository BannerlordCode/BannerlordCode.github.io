---
title: "StealthPatrolPointMissionLogic"
description: "Auto-generated class reference for StealthPatrolPointMissionLogic."
---
# StealthPatrolPointMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs

## Overview

Auto-generated stub for `StealthPatrolPointMissionLogic`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnEndMission
`protected override void OnEndMission()`

### AfterStart
`public override void AfterStart()`

### OnLocationCharacterAgentSpawned
`public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent)`

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent,Agent agent,sbyte agentBoneIndex)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent,Agent otherAgent)`

### OnCheckpointLoadedEvent
`public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent)`

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)`

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

## See Also

- [Section index](../)
