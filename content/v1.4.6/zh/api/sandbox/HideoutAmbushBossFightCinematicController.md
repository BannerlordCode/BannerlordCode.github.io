---
title: "HideoutAmbushBossFightCinematicController"
description: "HideoutAmbushBossFightCinematicController：SandBox 的 public 类，继承 MissionLogic；公开成员 40 个（方法 12、属性 11、字段 6）。源文件 SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs。"
---
# HideoutAmbushBossFightCinematicController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## 概述

HideoutAmbushBossFightCinematicController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 HideoutAmbushBossFightCinematicController → MissionLogic。public/protected 成员共 40 个：12 方法、11 属性、6 字段、3 事件、1 构造函数、7 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HideoutAmbushBossFightCinematicController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Hideout），继承链 HideoutAmbushBossFightCinematicController → MissionLogic。成员构成以方法为主（方法 12/40，属性 11/40），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCinematicFinished;` | `public event Action OnCinematicFinished;` | 事件 |
| `Action` | `public event Action<HideoutAmbushBossFightCinematicController.HideoutCinematicState>OnCinematicStateChanged;` | 事件 |
| `float>OnCinematicTransition;` | `public event Action<HideoutAmbushBossFightCinematicController.HideoutCinematicState, float>OnCinematicTransition;` | 事件 |
| `State` | `public HideoutAmbushBossFightCinematicController.HideoutCinematicState State` | 属性 |
| `InStateTransition` | `public bool InStateTransition` | 属性 |
| `IsCinematicActive` | `public bool IsCinematicActive` | 属性 |
| `CinematicDuration` | `public float CinematicDuration` | 属性 |
| `TransitionDuration` | `public float TransitionDuration` | 属性 |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | 属性 |
| `HideoutAmbushBossFightCinematicController` | `public HideoutAmbushBossFightCinematicController()` | 构造函数 |
| `StartCinematic` | `public void StartCinematic(HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)` | 方法 |
| `GetBossStandingEyePosition` | `public void GetBossStandingEyePosition(out Vec3 eyePosition)` | 方法 |
| `GetPlayerStandingEyePosition` | `public void GetPlayerStandingEyePosition(out Vec3 eyePosition)` | 方法 |
| `GetBanditsInitialFrame` | `public MatrixFrame GetBanditsInitialFrame()` | 方法 |
| `GetScenePrefabParameters` | `public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `GetAllyFrames` | `public void GetAllyFrames(out List<MatrixFrame>initialFrames, out List<MatrixFrame>targetFrames, MatrixFrame initialPlayerFrame, MatrixFrame targetPlayerFrame, int agentCount, float agentOffsetAngle)` | 方法 |
| `GetSpineTroopCount` | `public int GetSpineTroopCount(int totalTroopCount)` | 方法 |
| `GetBanditFrames` | `public void GetBanditFrames(out List<MatrixFrame>initialFrames, out List<MatrixFrame>targetFrames, MatrixFrame initialBossFrame, MatrixFrame targetBossFrame, int agentCount, float agentOffsetAngle)` | 方法 |
| `HideoutSceneEntityTag` | `public const string HideoutSceneEntityTag` | 字段 |
| `DefaultTransitionDuration` | `public const float DefaultTransitionDuration` | 字段 |
| `DefaultStateDuration` | `public const float DefaultStateDuration` | 字段 |
| `DefaultCinematicDuration` | `public const float DefaultCinematicDuration` | 字段 |
| `DefaultPlacementPerturbation` | `public const float DefaultPlacementPerturbation` | 字段 |
| `DefaultPlacementAngle` | `public const float DefaultPlacementAngle` | 字段 |
| `OnInitialFadeOutFinished` | `public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent>playerCompanions, ref Agent bossAgent, ref List<Agent>bossCompanions, ref float placementPerturbation, ref float placementAngle);` | 方法 |
| `OnHideoutCinematicFinished` | `public delegate void OnHideoutCinematicFinished();` | 方法 |
| `HideoutCinematicAgentInfo` | `public readonly struct HideoutCinematicAgentInfo` | 属性 |
| `HideoutCinematicState` | `public enum HideoutCinematicState` | 属性 |
| `HideoutAgentType` | `public enum HideoutAgentType` | 属性 |
| `HideoutPreCinematicPhase` | `public enum HideoutPreCinematicPhase` | 属性 |
| `HideoutPostCinematicPhase` | `public enum HideoutPostCinematicPhase` | 属性 |
| `OnInitialFadeOutFinished` | `public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent>playerCompanions, ref Agent bossAgent, ref List<Agent>bossCompanions, ref float placementPerturbation, ref float placementAngle)` | 嵌套类型 |
| `OnHideoutCinematicFinished` | `public delegate void OnHideoutCinematicFinished()` | 嵌套类型 |
| `HideoutCinematicAgentInfo` | `public readonly struct HideoutCinematicAgentInfo` | 嵌套类型 |
| `HideoutCinematicState` | `public enum HideoutCinematicState` | 嵌套类型 |
| `HideoutAgentType` | `public enum HideoutAgentType` | 嵌套类型 |
| `HideoutPreCinematicPhase` | `public enum HideoutPreCinematicPhase` | 嵌套类型 |
| `HideoutPostCinematicPhase` | `public enum HideoutPostCinematicPhase` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 HideoutAmbushMissionController](../HideoutAmbushMissionController)
- [同命名空间 HideoutCinematicController](../HideoutCinematicController)
- [同命名空间 HideoutMissionController](../HideoutMissionController)
