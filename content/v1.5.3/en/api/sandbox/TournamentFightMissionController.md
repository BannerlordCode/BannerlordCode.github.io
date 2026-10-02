---
title: "TournamentFightMissionController"
description: "Auto-generated class reference for TournamentFightMissionController."
---
# TournamentFightMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox
**Type:** `public class TournamentFightMissionController : MissionLogic,ITournamentGameBehavior `
**Base:** MissionLogic, ITournamentGameBehavior
**Source:** SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs

## Overview

Auto-generated stub for `TournamentFightMissionController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AfterStart
`public override void AfterStart()`

### PrepareForMatch
`public void PrepareForMatch()`

### StartMatch
`public void StartMatch(TournamentMatch match,bool isLastRound)`

### OnEndMission
`protected override void OnEndMission()`

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

### IsMatchEnded
`public bool IsMatchEnded()`

### OnMatchResultsReady
`public void OnMatchResultsReady()`

### OnMatchEnded
`public void OnMatchEnded()`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty)`

### CheckIfIsThereAnyEnemies
`public bool CheckIfIsThereAnyEnemies()`

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

## See Also

- [Section index](../)
