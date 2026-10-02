---
title: "WhileEnteringSettlementBattleMissionController"
description: "Auto-generated class reference for WhileEnteringSettlementBattleMissionController."
---
# WhileEnteringSettlementBattleMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs

## Overview

Auto-generated stub for `WhileEnteringSettlementBattleMissionController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

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

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

## See Also

- [Section index](../)
