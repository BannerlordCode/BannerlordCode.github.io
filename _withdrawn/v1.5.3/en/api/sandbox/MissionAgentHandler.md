---
title: "MissionAgentHandler"
description: "Auto-generated class reference for MissionAgentHandler."
---
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class MissionAgentHandler : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/MissionAgentHandler.cs

## Overview

Auto-generated stub for `MissionAgentHandler`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### HasPassages
`public bool HasPassages()`

### EarlyStart
`public override void EarlyStart()`

### OnRenderingStarted
`public override void OnRenderingStarted()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnEndMission
`protected override void OnEndMission()`

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode,bool atStart)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### DetectMissingEntities
`public void DetectMissingEntities()`

### FindUnusedUsablePointCount
`public Dictionary<string,int> FindUnusedUsablePointCount()`

### SpawnLocationCharacters
`public void SpawnLocationCharacters(string overridenTagValue = null)`

### SpawnDefaultLocationCharacter
`public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter,bool simulateAgentAfterSpawn = false)`

### SimulateAgent
`public void SimulateAgent(Agent agent)`

### FadeoutExitingLocationCharacter
`public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)`

### SpawnEnteringLocationCharacter
`public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter,Location fromLocation)`

### HasUsablePointWithTag
`public bool HasUsablePointWithTag(string tag)`

### GetAllSpawnTags
`public IEnumerable<string> GetAllSpawnTags()`

### GetAllUsablePointsWithTag
`public List<UsableMachine> GetAllUsablePointsWithTag(string tag)`

### SpawnWanderingAgent
`public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)`

### SpawnWanderingAgentWithDelay
`public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter,MatrixFrame matrixFrame,GameEntity spawnEntity,bool noHorses = true,bool hasTorch = false,float delay = 3f)`

### SpawnWanderingAgentWithInitialFrame
`public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter,MatrixFrame spawnPointFrame,WeakGameEntity spawnEntity,bool noHorses = true,bool hasTorch = false)`

### GetRandomTournamentTeamColor
`public static uint GetRandomTournamentTeamColor(int teamIndex)`

### GetAgentSettlementColors
`public static ValueTuple<uint,uint> GetAgentSettlementColors(LocationCharacter locationCharacter)`

### FindUnusedPointWithTagForAgent
`public UsableMachine FindUnusedPointWithTagForAgent(Agent agent,string tag)`

### FindUnusedPoints
`public List<UsableMachine> FindUnusedPoints(string tag)`

### FindAllUnusedPoints
`public List<UsableMachine> FindAllUnusedPoints(Agent agent,string primaryTag)`

### TeleportTargetAgentNearReferenceAgent
`public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent,Agent teleportAgent,bool teleportFollowers,bool teleportOpposite)`

### GetPointCountOfUsableMachine
`public static int GetPointCountOfUsableMachine(UsableMachine usableMachine,bool checkForUnusedOnes)`

## See Also

- [Section index](../)
