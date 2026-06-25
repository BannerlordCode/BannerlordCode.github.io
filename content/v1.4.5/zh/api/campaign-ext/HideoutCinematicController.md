---
title: "HideoutCinematicController"
description: "HideoutCinematicController 的自动生成类参考。"
---
# HideoutCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutCinematicController.cs`

## 概述

`HideoutCinematicController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutCinematicController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |

## 主要方法

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**用途 / Purpose:** 在 initial fade out finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnInitialFadeOutFinished(playerAgent, playerCompanions, bossAgent, bossCompanions, placementPerturbation, placementAngle);
```

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**用途 / Purpose:** 在 hideout cinematic finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnHideoutCinematicFinished();
```

### HideoutCinematicAgentInfo
`public readonly struct HideoutCinematicAgentInfo(Agent agent, HideoutAgentType type, in MatrixFrame initialFrame, in MatrixFrame targetFrame)`

**用途 / Purpose:** 隐藏out cinematic agent info对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
var result = hideoutCinematicController.HideoutCinematicAgentInfo(agent, type, initialFrame, targetFrame);
```

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**用途 / Purpose:** 判断当前对象是否已经持有 reached target。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
var result = hideoutCinematicController.HasReachedTarget(0);
```

### StartCinematic
`public void StartCinematic(OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

**用途 / Purpose:** 启动cinematic流程或状态机。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.StartCinematic(initialFadeOutFinished, cinematicFinishedCallback, 0, 0, 0, false);
```

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

**用途 / Purpose:** 读取并返回当前对象中 boss standing eye position 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.GetBossStandingEyePosition(eyePosition);
```

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

**用途 / Purpose:** 读取并返回当前对象中 player standing eye position 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.GetPlayerStandingEyePosition(eyePosition);
```

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

**用途 / Purpose:** 读取并返回当前对象中 bandits initial frame 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
var result = hideoutCinematicController.GetBanditsInitialFrame();
```

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)`

**用途 / Purpose:** 读取并返回当前对象中 scene prefab parameters 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.GetScenePrefabParameters(innerRadius, outerRadius, walkDistance);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicController 实例
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnMissionTick(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutCinematicController>();
```

## 参见

- [本区域目录](../)