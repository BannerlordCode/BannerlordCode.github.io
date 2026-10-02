---
title: "HideoutMissionController"
description: "HideoutMissionController 的自动生成类参考。"
---
# HideoutMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox
**Type:** `public class HideoutMissionController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs

## 概述

`HideoutMissionController` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnCreated
`public override void OnCreated() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnObjectStoppedBeingUsed
`public override void OnObjectStoppedBeingUsed(Agent userAgent,UsableMissionObject usedObject) `

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent,Agent.AIStateFlag flag) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### OnMissionStateFinalized
`public override void OnMissionStateFinalized() `

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject) `

### OnEndMission
`protected override void OnEndMission() `

### StartSpawner
`public void StartSpawner(BattleSideEnum side) `

### StopSpawner
`public void StopSpawner(BattleSideEnum side) `

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side) `

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None) `

### IsSideDepleted
`public unsafe bool IsSideDepleted(BattleSideEnum side) `

### StartBossFightDuelMode
`public static void StartBossFightDuelMode() `

### StartBossFightBattleMode
`public static void StartBossFightBattleMode() `

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side) `

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops() `

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
