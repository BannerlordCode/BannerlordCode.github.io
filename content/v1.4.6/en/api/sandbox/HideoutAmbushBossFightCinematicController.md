---
title: "HideoutAmbushBossFightCinematicController"
description: "HideoutAmbushBossFightCinematicController: a public class in SandBox, inheriting MissionLogic; 40 exposed members (12 methods, 11 properties, 6 fields). Source: SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs."
---
# HideoutAmbushBossFightCinematicController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## Overview

HideoutAmbushBossFightCinematicController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HideoutAmbushBossFightCinematicController → MissionLogic. It exposes 40 public/protected members: 12 methods, 11 properties, 6 fields, 3 events, 1 constructors, 7 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutAmbushBossFightCinematicController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Hideout) the module directory; inheritance chain HideoutAmbushBossFightCinematicController → MissionLogic. The surface is method-led (methods 12/40, properties 11/40), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCinematicFinished;` | `public event Action OnCinematicFinished;` | event |
| `Action` | `public event Action<HideoutAmbushBossFightCinematicController.HideoutCinematicState>OnCinematicStateChanged;` | event |
| `float>OnCinematicTransition;` | `public event Action<HideoutAmbushBossFightCinematicController.HideoutCinematicState, float>OnCinematicTransition;` | event |
| `State` | `public HideoutAmbushBossFightCinematicController.HideoutCinematicState State` | property |
| `InStateTransition` | `public bool InStateTransition` | property |
| `IsCinematicActive` | `public bool IsCinematicActive` | property |
| `CinematicDuration` | `public float CinematicDuration` | property |
| `TransitionDuration` | `public float TransitionDuration` | property |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | property |
| `HideoutAmbushBossFightCinematicController` | `public HideoutAmbushBossFightCinematicController()` | constructor |
| `StartCinematic` | `public void StartCinematic(HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)` | method |
| `GetBossStandingEyePosition` | `public void GetBossStandingEyePosition(out Vec3 eyePosition)` | method |
| `GetPlayerStandingEyePosition` | `public void GetPlayerStandingEyePosition(out Vec3 eyePosition)` | method |
| `GetBanditsInitialFrame` | `public MatrixFrame GetBanditsInitialFrame()` | method |
| `GetScenePrefabParameters` | `public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `GetAllyFrames` | `public void GetAllyFrames(out List<MatrixFrame>initialFrames, out List<MatrixFrame>targetFrames, MatrixFrame initialPlayerFrame, MatrixFrame targetPlayerFrame, int agentCount, float agentOffsetAngle)` | method |
| `GetSpineTroopCount` | `public int GetSpineTroopCount(int totalTroopCount)` | method |
| `GetBanditFrames` | `public void GetBanditFrames(out List<MatrixFrame>initialFrames, out List<MatrixFrame>targetFrames, MatrixFrame initialBossFrame, MatrixFrame targetBossFrame, int agentCount, float agentOffsetAngle)` | method |
| `HideoutSceneEntityTag` | `public const string HideoutSceneEntityTag` | field |
| `DefaultTransitionDuration` | `public const float DefaultTransitionDuration` | field |
| `DefaultStateDuration` | `public const float DefaultStateDuration` | field |
| `DefaultCinematicDuration` | `public const float DefaultCinematicDuration` | field |
| `DefaultPlacementPerturbation` | `public const float DefaultPlacementPerturbation` | field |
| `DefaultPlacementAngle` | `public const float DefaultPlacementAngle` | field |
| `OnInitialFadeOutFinished` | `public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent>playerCompanions, ref Agent bossAgent, ref List<Agent>bossCompanions, ref float placementPerturbation, ref float placementAngle);` | method |
| `OnHideoutCinematicFinished` | `public delegate void OnHideoutCinematicFinished();` | method |
| `HideoutCinematicAgentInfo` | `public readonly struct HideoutCinematicAgentInfo` | property |
| `HideoutCinematicState` | `public enum HideoutCinematicState` | property |
| `HideoutAgentType` | `public enum HideoutAgentType` | property |
| `HideoutPreCinematicPhase` | `public enum HideoutPreCinematicPhase` | property |
| `HideoutPostCinematicPhase` | `public enum HideoutPostCinematicPhase` | property |
| `OnInitialFadeOutFinished` | `public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent>playerCompanions, ref Agent bossAgent, ref List<Agent>bossCompanions, ref float placementPerturbation, ref float placementAngle)` | nested type |
| `OnHideoutCinematicFinished` | `public delegate void OnHideoutCinematicFinished()` | nested type |
| `HideoutCinematicAgentInfo` | `public readonly struct HideoutCinematicAgentInfo` | nested type |
| `HideoutCinematicState` | `public enum HideoutCinematicState` | nested type |
| `HideoutAgentType` | `public enum HideoutAgentType` | nested type |
| `HideoutPreCinematicPhase` | `public enum HideoutPreCinematicPhase` | nested type |
| `HideoutPostCinematicPhase` | `public enum HideoutPostCinematicPhase` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace HideoutAmbushMissionController](../HideoutAmbushMissionController)
- [same namespace HideoutCinematicController](../HideoutCinematicController)
- [same namespace HideoutMissionController](../HideoutMissionController)
