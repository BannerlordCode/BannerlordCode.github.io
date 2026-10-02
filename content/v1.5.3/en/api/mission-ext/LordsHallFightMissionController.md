---
title: "LordsHallFightMissionController"
description: "Auto-generated class reference for LordsHallFightMissionController."
---
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs

## Overview

Auto-generated stub for `LordsHallFightMissionController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

### OnCreated
`public override void OnCreated()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

## See Also

- [Section index](../)
