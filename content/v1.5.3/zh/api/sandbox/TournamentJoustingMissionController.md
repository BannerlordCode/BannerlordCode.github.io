---
title: "TournamentJoustingMissionController"
description: "TournamentJoustingMissionController 的自动生成类参考。"
---
# TournamentJoustingMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox
**Type:** `public class TournamentJoustingMissionController : MissionLogic,ITournamentGameBehavior `
**Base:** MissionLogic,ITournamentGameBehavior
**Source:** SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs

## 概述

`TournamentJoustingMissionController` 的自动生成类参考页面。声明来自 `SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AfterStart
`public override void AfterStart() `

### StartMatch
`public void StartMatch(TournamentMatch match,bool isLastRound) `

### SkipMatch
`public void SkipMatch(TournamentMatch match) `

### IsMatchEnded
`public bool IsMatchEnded() `

### OnMatchEnded
`public void OnMatchEnded() `

### IsAgentInTheTrack
`public bool IsAgentInTheTrack(Agent agent,bool inCurrentTrack = true) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent,Agent affectorAgent,in MissionWeapon attackerWeapon,in Blow blow,in AttackCollisionData attackCollisionData) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow) `

### OnJoustingAgentStateChanged
`public void OnJoustingAgentStateChanged(Agent agent,JoustingAgentController.JoustingAgentState state) `

### JoustingEventDelegate
`public delegate void JoustingEventDelegate(Agent affectedAgent,Agent affectorAgent)`

### JoustingAgentStateChangedEventDelegate
`public delegate void JoustingAgentStateChangedEventDelegate(Agent agent,JoustingAgentController.JoustingAgentState state)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
