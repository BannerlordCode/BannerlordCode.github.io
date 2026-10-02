---
title: "HideoutCinematicController"
description: "HideoutCinematicController: a public class in SandBox, inheriting MissionLogic; 37 exposed members (9 methods, 11 properties, 6 fields). Source: SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs."
---
# HideoutCinematicController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutCinematicController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs`

## Overview

HideoutCinematicController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HideoutCinematicController → MissionLogic. It exposes 37 public/protected members: 9 methods, 11 properties, 6 fields, 3 events, 1 constructors, 7 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutCinematicController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Hideout) the module directory; inheritance chain HideoutCinematicController → MissionLogic. The surface is property-led (properties 11/37, methods 9/37), so it mostly exposes state for reading. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCinematicFinished;` | `public event Action OnCinematicFinished;` | event |
| `Action` | `public event Action<HideoutCinematicController.HideoutCinematicState>OnCinematicStateChanged;` | event |
| `float>OnCinematicTransition;` | `public event Action<HideoutCinematicController.HideoutCinematicState, float>OnCinematicTransition;` | event |
| `State` | `public HideoutCinematicController.HideoutCinematicState State` | property |
| `InStateTransition` | `public bool InStateTransition` | property |
| `IsCinematicActive` | `public bool IsCinematicActive` | property |
| `CinematicDuration` | `public float CinematicDuration` | property |
| `TransitionDuration` | `public float TransitionDuration` | property |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | property |
| `HideoutCinematicController` | `public HideoutCinematicController()` | constructor |
| `StartCinematic` | `public void StartCinematic(HideoutCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)` | method |
| `GetBossStandingEyePosition` | `public void GetBossStandingEyePosition(out Vec3 eyePosition)` | method |
| `GetPlayerStandingEyePosition` | `public void GetPlayerStandingEyePosition(out Vec3 eyePosition)` | method |
| `GetBanditsInitialFrame` | `public MatrixFrame GetBanditsInitialFrame()` | method |
| `GetScenePrefabParameters` | `public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
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
- [same namespace HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController)
- [same namespace HideoutAmbushMissionController](../HideoutAmbushMissionController)
- [same namespace HideoutMissionController](../HideoutMissionController)
