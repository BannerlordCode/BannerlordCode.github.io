---
title: "StealthAreaMissionLogic"
description: "StealthAreaMissionLogic 的自动生成类参考。"
---
# StealthAreaMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class StealthAreaMissionLogic : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs

## 概述

`StealthAreaMissionLogic` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsSentry
`public bool IsSentry(Agent agent) `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner) `

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam,Team newTeam,Agent agent) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent,UsableMissionObject usedObject) `

### CheckIfAllStealthAreasAreTriggered
`public bool CheckIfAllStealthAreasAreTriggered() `

### CheckIfAllStealthAreasReinforcementsAreCalled
`public bool CheckIfAllStealthAreasReinforcementsAreCalled() `

### SpawnReinforcementAllyTroopsDelegate
`public delegate MBList<Agent> SpawnReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData,StealthAreaMarker stealthAreaMarker)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
