---
title: "AlleyFightMissionHandler"
description: "Auto-generated class reference for AlleyFightMissionHandler."
---
# AlleyFightMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox
**Type:** `public class AlleyFightMissionHandler : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs

## Overview

Auto-generated stub for `AlleyFightMissionHandler`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### EarlyStart
`public override void EarlyStart()`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### AfterStart
`public override void AfterStart()`

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

### OnRetreatMission
`public override void OnRetreatMission()`

### OnRenderingStarted
`public override void OnRenderingStarted()`

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

## See Also

- [Section index](../)
