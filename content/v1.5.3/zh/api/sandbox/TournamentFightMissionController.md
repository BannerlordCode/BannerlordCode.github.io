---
title: "TournamentFightMissionController"
description: "TournamentFightMissionController 的自动生成类参考。"
---
# TournamentFightMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox
**Type:** `public class TournamentFightMissionController : MissionLogic,ITournamentGameBehavior `
**Base:** MissionLogic,ITournamentGameBehavior
**Source:** SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs

## 概述

`TournamentFightMissionController` 的自动生成类参考页面。声明来自 `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AfterStart
`public override void AfterStart() `

### PrepareForMatch
`public void PrepareForMatch() `

### StartMatch
`public void StartMatch(TournamentMatch match,bool isLastRound) `

### OnEndMission
`protected override void OnEndMission() `

### SkipMatch
`public void SkipMatch(TournamentMatch match) `

### IsMatchEnded
`public bool IsMatchEnded() `

### OnMatchResultsReady
`public void OnMatchResultsReady() `

### OnMatchEnded
`public void OnMatchEnded() `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow) `

### CanAgentRout
`public bool CanAgentRout(Agent agent) `

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty) `

### CheckIfIsThereAnyEnemies
`public bool CheckIfIsThereAnyEnemies() `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
