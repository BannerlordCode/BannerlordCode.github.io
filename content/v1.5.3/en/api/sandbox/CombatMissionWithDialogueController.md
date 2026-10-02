---
title: "CombatMissionWithDialogueController"
description: "Auto-generated class reference for CombatMissionWithDialogueController."
---
# CombatMissionWithDialogueController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class CombatMissionWithDialogueController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/CombatMissionWithDialogueController.cs

## Overview

Auto-generated stub for `CombatMissionWithDialogueController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnCreated
`public override void OnCreated()`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AfterStart
`public override void AfterStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent,Agent affectorAgent,in MissionWeapon affectorWeapon,in Blow blow,in AttackCollisionData attackCollisionData)`

### StartFight
`public void StartFight(bool hasPlayerChangedSide)`

### StartConversation
`public void StartConversation(Agent agent,bool setActionsInstantly)`

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)`

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
