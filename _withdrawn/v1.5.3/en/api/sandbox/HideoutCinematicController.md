---
title: "HideoutCinematicController"
description: "Auto-generated class reference for HideoutCinematicController."
---
# HideoutCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox
**Type:** `public class HideoutCinematicController : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs

## Overview

Auto-generated stub for `HideoutCinematicController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### StartCinematic
`public void StartCinematic(HideoutCinematicController.OnInitialFadeOutFinished initialFadeOutFinished,Action cinematicFinishedCallback,float transitionDuration = 0.4f,float stateDuration = 0.2f,float cinematicDuration = 8f,bool forceDismountAgents = false)`

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

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent,ref List<Agent> playerCompanions,ref Agent bossAgent,ref List<Agent> bossCompanions,ref float placementPerturbation,ref float placementAngle)`

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

## See Also

- [Section index](../)
