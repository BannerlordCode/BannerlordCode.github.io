---
title: "MissionFightHandler"
description: "MissionFightHandler 的自动生成类参考。"
---
# MissionFightHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class MissionFightHandler : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/MissionFightHandler.cs

## 概述

`MissionFightHandler` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/MissionFightHandler.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### EarlyStart
`public override void EarlyStart() `

### AfterStart
`public override void AfterStart() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow) `

### StartCustomFight
`public void StartCustomFight(List<Agent> playerSideAgents,List<Agent> opponentSideAgents,bool dropWeapons,bool isItemUseDisabled,MissionFightHandler.OnFightEndDelegate onFightEndDelegate,float minimumEndTime = 1E-45f) `

### StartFistFight
`public void StartFistFight(Agent opponent,MissionFightHandler.OnFightEndDelegate onFightEndDelegate,float minimumEndTime = 1E-45f) `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave) `

### OnEndMission
`protected override void OnEndMission() `

### GetAgentToSpectate
`public static Agent GetAgentToSpectate() `

### BeginEndFight
`public void BeginEndFight() `

### EndFight
`public void EndFight(bool overrideDuelWonByPlayer = false) `

### IsThereActiveFight
`public bool IsThereActiveFight() `

### AddAgentToSide
`public void AddAgentToSide(Agent agent,bool isPlayerSide) `

### GetDangerSources
`public IEnumerable<Agent> GetDangerSources(Agent ownerAgent) `

### IsAgentAggressive
`public static bool IsAgentAggressive(Agent agent) `

### IsAgentJusticeWarrior
`public static bool IsAgentJusticeWarrior(CharacterObject character) `

### IsAgentVillian
`public static bool IsAgentVillian(CharacterObject character) `

### OnFightEndDelegate
`public delegate void OnFightEndDelegate(bool isPlayerSideWon)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
