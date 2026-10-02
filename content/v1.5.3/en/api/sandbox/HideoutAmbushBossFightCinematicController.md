---
title: "HideoutAmbushBossFightCinematicController"
description: "Auto-generated class reference for HideoutAmbushBossFightCinematicController."
---
# HideoutAmbushBossFightCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs

## Overview

Auto-generated stub for `HideoutAmbushBossFightCinematicController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### StartCinematic
`public void StartCinematic(HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished,Action cinematicFinishedCallback,float transitionDuration = 0.4f,float stateDuration = 0.2f,float cinematicDuration = 8f,bool forceDismountAgents = false)`

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius,out float outerRadius,out float walkDistance)`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,MatrixFrame initialPlayerFrame,MatrixFrame targetPlayerFrame,int agentCount,float agentOffsetAngle)`

### GetSpineTroopCount
`public int GetSpineTroopCount(int totalTroopCount)`

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,MatrixFrame initialBossFrame,MatrixFrame targetBossFrame,int agentCount,float agentOffsetAngle)`

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent,ref List<Agent> playerCompanions,ref Agent bossAgent,ref List<Agent> bossCompanions,ref float placementPerturbation,ref float placementAngle)`

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

## See Also

- [Section index](../)
