---
title: "MissionGauntletAgentLockVisualizerView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletAgentLockVisualizerView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletAgentLockVisualizerView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAgentLockVisualizerView : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletAgentLockVisualizerView.cs`

## 概述

`MissionGauntletAgentLockVisualizerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletAgentLockVisualizerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new MissionGauntletAgentLockVisualizerView();
```

## 参见

- [完整类目录](../catalog)