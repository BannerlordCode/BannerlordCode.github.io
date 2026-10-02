---
title: "BaseBattleMissionController"
description: "BaseBattleMissionController 的自动生成类参考。"
---
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs

## 概述

`BaseBattleMissionController` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### EarlyStart
`public override void EarlyStart() `

### AfterStart
`public override void AfterStart() `

### SetupTeam
`protected virtual void SetupTeam(Team team) `

### CreateDefenderTroops
`protected abstract void CreateDefenderTroops()`

### CreateAttackerTroops
`protected abstract void CreateAttackerTroops()`

### GetTeamAI
`public virtual TeamAIComponent GetTeamAI(Team team,float thinkTimerTime = 5f,float applyTimerTime = 1f) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### IsPlayerDead
`protected bool IsPlayerDead() `

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult) `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow) `

### IncrementDeploymedTroops
`protected void IncrementDeploymedTroops(BattleSideEnum side) `

### CreatePlayer
`protected virtual void CreatePlayer() `

### BecomeEnemy
`protected void BecomeEnemy() `

### BecomePlayer
`protected void BecomePlayer() `

### SwapTeams
`protected void SwapTeams() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
