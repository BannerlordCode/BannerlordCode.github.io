---
title: "DeploymentMissionView"
description: "DeploymentMissionView 的自动生成类参考。"
---
# DeploymentMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs`

## 概述

`DeploymentMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `DeploymentMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionView 实例
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.AfterStart();
```

### OnDeploymentPlanMade
`public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment plan made 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionView 实例
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.OnDeploymentPlanMade(team, false);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionView 实例
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.OnDeploymentFinished();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
DeploymentMissionView view = ...;
```

## 参见

- [本区域目录](../)