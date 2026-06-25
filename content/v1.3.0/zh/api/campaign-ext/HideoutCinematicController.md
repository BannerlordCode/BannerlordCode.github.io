---
title: "HideoutCinematicController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutCinematicController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs`

## 概述

`HideoutCinematicController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutCinematicController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public HideoutCinematicController.HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |
| `IsCinematicActive` | `public bool IsCinematicActive { get; }` |
| `CinematicDuration` | `public float CinematicDuration { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## 主要方法

### StartCinematic
`public void StartCinematic(HideoutCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

**用途 / Purpose:** 处理 `start cinematic` 相关逻辑。

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

**用途 / Purpose:** 获取 `boss standing eye position` 的当前值。

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

**用途 / Purpose:** 获取 `player standing eye position` 的当前值。

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

**用途 / Purpose:** 获取 `bandits initial frame` 的当前值。

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)`

**用途 / Purpose:** 获取 `scene prefab parameters` 的当前值。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**用途 / Purpose:** 当 `initial fade out finished` 事件触发时调用此方法。

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**用途 / Purpose:** 当 `hideout cinematic finished` 事件触发时调用此方法。

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `reached target`。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutCinematicController>();
```

## 参见

- [完整类目录](../catalog)