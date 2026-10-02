---
title: "DisguiseMissionLogic"
description: "DisguiseMissionLogic 的自动生成类参考。"
---
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class DisguiseMissionLogic : MissionLogic,IPlayerInputEffector,IMissionBehavior `
**Base:** MissionLogic,IPlayerInputEffector,IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs

## 概述

`DisguiseMissionLogic` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnCreated
`public override void OnCreated() `

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location) `

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent) `

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered() `

### ContactAlreadySetCommonCondition
`public bool ContactAlreadySetCommonCondition() `

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA,Vec2 lineB,Vec2 point) `

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### OnEndMission
`protected override void OnEndMission() `

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter,Vec3 initialPosition,Vec2 initialDirection,string actionSetId,bool isEnemy = true) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### GetAgentOffenseInfo
`public DisguiseMissionLogic.ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent) `

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent,Agent detectorAgent) `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave) `

### OnCollectPlayerEventControlFlags
`public Agent.EventControlFlag OnCollectPlayerEventControlFlags() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
