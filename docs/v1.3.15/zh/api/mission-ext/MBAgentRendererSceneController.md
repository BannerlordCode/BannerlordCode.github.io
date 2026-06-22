<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAgentRendererSceneController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAgentRendererSceneController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBAgentRendererSceneController`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBAgentRendererSceneController.cs`

## 概述

`MBAgentRendererSceneController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### SetEnforcedVisibilityForAllAgents
```csharp
public void SetEnforcedVisibilityForAllAgents(Scene scene)
```

### CreateNewAgentRendererSceneController
```csharp
public static MBAgentRendererSceneController CreateNewAgentRendererSceneController(Scene scene)
```

### SetDoTimerBasedForcedSkeletonUpdates
```csharp
public void SetDoTimerBasedForcedSkeletonUpdates(bool value)
```

### DestructAgentRendererSceneController
```csharp
public static void DestructAgentRendererSceneController(Scene scene, MBAgentRendererSceneController rendererSceneController, bool deleteThisFrame)
```

### ValidateAgentVisualsReseted
```csharp
public static void ValidateAgentVisualsReseted(Scene scene, MBAgentRendererSceneController rendererSceneController)
```

## 使用示例

```csharp
// MBAgentRendererSceneController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<MBAgentRendererSceneController>();
```

## 参见

- [完整类目录](../catalog)