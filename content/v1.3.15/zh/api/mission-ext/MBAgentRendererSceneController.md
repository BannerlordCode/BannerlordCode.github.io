---
title: "MBAgentRendererSceneController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAgentRendererSceneController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `enforced visibility for all agents` 的值或状态。

### CreateNewAgentRendererSceneController
`public static MBAgentRendererSceneController CreateNewAgentRendererSceneController(Scene scene)`

**用途 / Purpose:** 创建一个 `new agent renderer scene controller` 实例或对象。

### SetDoTimerBasedForcedSkeletonUpdates
`public void SetDoTimerBasedForcedSkeletonUpdates(bool value)`

**用途 / Purpose:** 设置 `do timer based forced skeleton updates` 的值或状态。

### DestructAgentRendererSceneController
`public static void DestructAgentRendererSceneController(Scene scene, MBAgentRendererSceneController rendererSceneController, bool deleteThisFrame)`

**用途 / Purpose:** 处理 `destruct agent renderer scene controller` 相关逻辑。

### ValidateAgentVisualsReseted
`public static void ValidateAgentVisualsReseted(Scene scene, MBAgentRendererSceneController rendererSceneController)`

**用途 / Purpose:** 处理 `validate agent visuals reseted` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MBAgentRendererSceneController>();
```

## 参见

- [完整类目录](../catalog)