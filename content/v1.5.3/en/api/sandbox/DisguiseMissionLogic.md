---
title: "DisguiseMissionLogic"
description: "Auto-generated class reference for DisguiseMissionLogic."
---
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class DisguiseMissionLogic : MissionLogic,IPlayerInputEffector,IMissionBehavior `
**Base:** MissionLogic, IPlayerInputEffector, IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs

## Overview

Auto-generated stub for `DisguiseMissionLogic`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnCreated
`public override void OnCreated()`

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

### ContactAlreadySetCommonCondition
`public bool ContactAlreadySetCommonCondition()`

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA,Vec2 lineB,Vec2 point)`

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnEndMission
`protected override void OnEndMission()`

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter,Vec3 initialPosition,Vec2 initialDirection,string actionSetId,bool isEnemy = true)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### GetAgentOffenseInfo
`public DisguiseMissionLogic.ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent,Agent detectorAgent)`

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

### OnCollectPlayerEventControlFlags
`public Agent.EventControlFlag OnCollectPlayerEventControlFlags()`

## See Also

- [Section index](../)
