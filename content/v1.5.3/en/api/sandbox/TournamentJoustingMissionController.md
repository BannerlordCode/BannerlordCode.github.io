---
title: "TournamentJoustingMissionController"
description: "Auto-generated class reference for TournamentJoustingMissionController."
---
# TournamentJoustingMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox
**Type:** `public class TournamentJoustingMissionController : MissionLogic,ITournamentGameBehavior `
**Base:** MissionLogic, ITournamentGameBehavior
**Source:** SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs

## Overview

Auto-generated stub for `TournamentJoustingMissionController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AfterStart
`public override void AfterStart()`

### StartMatch
`public void StartMatch(TournamentMatch match,bool isLastRound)`

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

### IsMatchEnded
`public bool IsMatchEnded()`

### OnMatchEnded
`public void OnMatchEnded()`

### IsAgentInTheTrack
`public bool IsAgentInTheTrack(Agent agent,bool inCurrentTrack = true)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent,Agent affectorAgent,in MissionWeapon attackerWeapon,in Blow blow,in AttackCollisionData attackCollisionData)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### OnJoustingAgentStateChanged
`public void OnJoustingAgentStateChanged(Agent agent,JoustingAgentController.JoustingAgentState state)`

### JoustingEventDelegate
`public delegate void JoustingEventDelegate(Agent affectedAgent,Agent affectorAgent)`

### JoustingAgentStateChangedEventDelegate
`public delegate void JoustingAgentStateChangedEventDelegate(Agent agent,JoustingAgentController.JoustingAgentState state)`

## See Also

- [Section index](../)
