---
title: "HideoutAmbushBossFightCinematicController"
description: "HideoutAmbushBossFightCinematicController 的自动生成类参考。"
---
# HideoutAmbushBossFightCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## 概述

`HideoutAmbushBossFightCinematicController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutAmbushBossFightCinematicController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public HideoutAmbushBossFightCinematicController.HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |
| `IsCinematicActive` | `public bool IsCinematicActive { get; }` |
| `CinematicDuration` | `public float CinematicDuration { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## 主要方法

### StartCinematic
`public void StartCinematic(HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

**用途 / Purpose:** 启动cinematic流程或状态机。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.StartCinematic(initialFadeOutFinished, cinematicFinishedCallback, 0, 0, 0, false);
```

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

**用途 / Purpose:** 读取并返回当前对象中 boss standing eye position 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetBossStandingEyePosition(eyePosition);
```

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

**用途 / Purpose:** 读取并返回当前对象中 player standing eye position 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetPlayerStandingEyePosition(eyePosition);
```

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

**用途 / Purpose:** 读取并返回当前对象中 bandits initial frame 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
var result = hideoutAmbushBossFightCinematicController.GetBanditsInitialFrame();
```

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)`

**用途 / Purpose:** 读取并返回当前对象中 scene prefab parameters 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetScenePrefabParameters(innerRadius, outerRadius, walkDistance);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnMissionTick(0);
```

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, MatrixFrame initialPlayerFrame, MatrixFrame targetPlayerFrame, int agentCount, float agentOffsetAngle)`

**用途 / Purpose:** 读取并返回当前对象中 ally frames 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetAllyFrames(initialFrames, targetFrames, initialPlayerFrame, targetPlayerFrame, 0, 0);
```

### GetSpineTroopCount
`public int GetSpineTroopCount(int totalTroopCount)`

**用途 / Purpose:** 读取并返回当前对象中 spine troop count 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
var result = hideoutAmbushBossFightCinematicController.GetSpineTroopCount(0);
```

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, MatrixFrame initialBossFrame, MatrixFrame targetBossFrame, int agentCount, float agentOffsetAngle)`

**用途 / Purpose:** 读取并返回当前对象中 bandit frames 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetBanditFrames(initialFrames, targetFrames, initialBossFrame, targetBossFrame, 0, 0);
```

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**用途 / Purpose:** 在 initial fade out finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished(playerAgent, playerCompanions, bossAgent, bossCompanions, placementPerturbation, placementAngle);
```

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**用途 / Purpose:** 在 hideout cinematic finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnHideoutCinematicFinished();
```

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**用途 / Purpose:** 判断当前对象是否已经持有 reached target。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushBossFightCinematicController 实例
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
var result = hideoutAmbushBossFightCinematicController.HasReachedTarget(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushBossFightCinematicController>();
```

## 参见

- [本区域目录](../)