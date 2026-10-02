---
title: "HideoutAmbushBossFightCinematicController"
description: "HideoutAmbushBossFightCinematicController 的自动生成类参考。"
---
# HideoutAmbushBossFightCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs

## 概述

`HideoutAmbushBossFightCinematicController` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### StartCinematic
`public void StartCinematic(HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished,Action cinematicFinishedCallback,float transitionDuration = 0.4f,float stateDuration = 0.2f,float cinematicDuration = 8f,bool forceDismountAgents = false) `

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition) `

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition) `

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame() `

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius,out float outerRadius,out float walkDistance) `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,MatrixFrame initialPlayerFrame,MatrixFrame targetPlayerFrame,int agentCount,float agentOffsetAngle) `

### GetSpineTroopCount
`public int GetSpineTroopCount(int totalTroopCount) `

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,MatrixFrame initialBossFrame,MatrixFrame targetBossFrame,int agentCount,float agentOffsetAngle) `

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent,ref List<Agent> playerCompanions,ref Agent bossAgent,ref List<Agent> bossCompanions,ref float placementPerturbation,ref float placementAngle)`

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
