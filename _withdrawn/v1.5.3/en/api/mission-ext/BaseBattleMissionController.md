---
title: "BaseBattleMissionController"
description: "Auto-generated class reference for BaseBattleMissionController."
---
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs

## Overview

Auto-generated stub for `BaseBattleMissionController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

### AfterStart
`public override void AfterStart()`

### SetupTeam
`protected virtual void SetupTeam(Team team)`

### CreateDefenderTroops
`protected abstract void CreateDefenderTroops()`

### CreateAttackerTroops
`protected abstract void CreateAttackerTroops()`

### GetTeamAI
`public virtual TeamAIComponent GetTeamAI(Team team,float thinkTimerTime = 5f,float applyTimerTime = 1f)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### IsPlayerDead
`protected bool IsPlayerDead()`

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### IncrementDeploymedTroops
`protected void IncrementDeploymedTroops(BattleSideEnum side)`

### CreatePlayer
`protected virtual void CreatePlayer()`

### BecomeEnemy
`protected void BecomeEnemy()`

### BecomePlayer
`protected void BecomePlayer()`

### SwapTeams
`protected void SwapTeams()`

## See Also

- [Section index](../)
