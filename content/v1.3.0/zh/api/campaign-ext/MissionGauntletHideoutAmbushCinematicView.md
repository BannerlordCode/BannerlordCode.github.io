---
title: "MissionGauntletHideoutAmbushCinematicView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletHideoutAmbushCinematicView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletHideoutAmbushCinematicView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletHideoutAmbushCinematicView : MissionHideoutAmbushCinematicView`
**Base:** `MissionHideoutAmbushCinematicView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletHideoutAmbushCinematicView.cs`

## 概述

`MissionGauntletHideoutAmbushCinematicView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletHideoutAmbushCinematicView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### HitTest
`public override bool HitTest()`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

## 使用示例

```csharp
var view = new MissionGauntletHideoutAmbushCinematicView();
```

## 参见

- [完整类目录](../catalog)