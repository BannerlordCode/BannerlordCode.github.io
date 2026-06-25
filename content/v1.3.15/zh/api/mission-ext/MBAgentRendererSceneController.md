---
title: "MBAgentRendererSceneController"
description: "MBAgentRendererSceneController 的自动生成类参考。"
---
# MBAgentRendererSceneController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBAgentRendererSceneController`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBAgentRendererSceneController.cs`

## 概述

`MBAgentRendererSceneController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MBAgentRendererSceneController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetEnforcedVisibilityForAllAgents
`public void SetEnforcedVisibilityForAllAgents(Scene scene)`

**用途 / Purpose:** 为 「enforced visibility for all agents」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentRendererSceneController 实例
MBAgentRendererSceneController mBAgentRendererSceneController = ...;
mBAgentRendererSceneController.SetEnforcedVisibilityForAllAgents(scene);
```

### CreateNewAgentRendererSceneController
`public static MBAgentRendererSceneController CreateNewAgentRendererSceneController(Scene scene)`

**用途 / Purpose:** 构建一个新的 「new agent renderer scene controller」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MBAgentRendererSceneController.CreateNewAgentRendererSceneController(scene);
```

### SetDoTimerBasedForcedSkeletonUpdates
`public void SetDoTimerBasedForcedSkeletonUpdates(bool value)`

**用途 / Purpose:** 为 「do timer based forced skeleton updates」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentRendererSceneController 实例
MBAgentRendererSceneController mBAgentRendererSceneController = ...;
mBAgentRendererSceneController.SetDoTimerBasedForcedSkeletonUpdates(false);
```

### DestructAgentRendererSceneController
`public static void DestructAgentRendererSceneController(Scene scene, MBAgentRendererSceneController rendererSceneController, bool deleteThisFrame)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBAgentRendererSceneController.DestructAgentRendererSceneController(scene, rendererSceneController, false);
```

### ValidateAgentVisualsReseted
`public static void ValidateAgentVisualsReseted(Scene scene, MBAgentRendererSceneController rendererSceneController)`

**用途 / Purpose:** 检查「agent visuals reseted」是否满足约束条件，通常返回布尔值。

```csharp
// 静态调用，不需要实例
MBAgentRendererSceneController.ValidateAgentVisualsReseted(scene, rendererSceneController);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MBAgentRendererSceneController>();
```

## 参见

- [本区域目录](../)