---
title: "MissionFightHandler"
description: "Auto-generated class reference for MissionFightHandler."
---
# MissionFightHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class MissionFightHandler : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/MissionFightHandler.cs

## Overview

Auto-generated stub for `MissionFightHandler`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### EarlyStart
`public override void EarlyStart()`

### AfterStart
`public override void AfterStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### StartCustomFight
`public void StartCustomFight(List<Agent> playerSideAgents,List<Agent> opponentSideAgents,bool dropWeapons,bool isItemUseDisabled,MissionFightHandler.OnFightEndDelegate onFightEndDelegate,float minimumEndTime = 1E-45f)`

### StartFistFight
`public void StartFistFight(Agent opponent,MissionFightHandler.OnFightEndDelegate onFightEndDelegate,float minimumEndTime = 1E-45f)`

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

### OnEndMission
`protected override void OnEndMission()`

### GetAgentToSpectate
`public static Agent GetAgentToSpectate()`

### BeginEndFight
`public void BeginEndFight()`

### EndFight
`public void EndFight(bool overrideDuelWonByPlayer = false)`

### IsThereActiveFight
`public bool IsThereActiveFight()`

### AddAgentToSide
`public void AddAgentToSide(Agent agent,bool isPlayerSide)`

### GetDangerSources
`public IEnumerable<Agent> GetDangerSources(Agent ownerAgent)`

### IsAgentAggressive
`public static bool IsAgentAggressive(Agent agent)`

### IsAgentJusticeWarrior
`public static bool IsAgentJusticeWarrior(CharacterObject character)`

### IsAgentVillian
`public static bool IsAgentVillian(CharacterObject character)`

### OnFightEndDelegate
`public delegate void OnFightEndDelegate(bool isPlayerSideWon)`

## See Also

- [Section index](../)
