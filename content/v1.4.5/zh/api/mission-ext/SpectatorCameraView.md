---
title: "SpectatorCameraView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpectatorCameraView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SpectatorCameraView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpectatorCameraView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/SpectatorCameraView.cs`

## 概述

`SpectatorCameraView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SpectatorCameraView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
var view = new SpectatorCameraView();
```

## 参见

- [完整类目录](../catalog)