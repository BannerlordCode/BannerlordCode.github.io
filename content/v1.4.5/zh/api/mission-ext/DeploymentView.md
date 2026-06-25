---
title: "DeploymentView"
description: "DeploymentView 的自动生成类参考。"
---
# DeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/DeploymentView.cs`

## 概述

`DeploymentView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `DeploymentView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentView 实例
DeploymentView deploymentView = ...;
deploymentView.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentView 实例
DeploymentView deploymentView = ...;
deploymentView.OnRemoveBehavior();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
DeploymentView view = ...;
```

## 参见

- [本区域目录](../)