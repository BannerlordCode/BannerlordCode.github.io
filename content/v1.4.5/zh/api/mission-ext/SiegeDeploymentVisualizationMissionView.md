---
title: "SiegeDeploymentVisualizationMissionView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeDeploymentVisualizationMissionView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeDeploymentVisualizationMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentVisualizationMissionView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/SiegeDeploymentVisualizationMissionView.cs`

## 概述

`SiegeDeploymentVisualizationMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SiegeDeploymentVisualizationMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### SetDeploymentVisualizationSelector
`public static string SetDeploymentVisualizationSelector(List<string> strings)`

**用途 / Purpose:** 设置 `deployment visualization selector` 的值或状态。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new SiegeDeploymentVisualizationMissionView();
```

## 参见

- [完整类目录](../catalog)