---
title: "MissionGauntletAgentLockVisualizerView"
description: "MissionGauntletAgentLockVisualizerView 的自动生成类参考。"
---
# MissionGauntletAgentLockVisualizerView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAgentLockVisualizerView : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletAgentLockVisualizerView.cs`

## 概述

`MissionGauntletAgentLockVisualizerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletAgentLockVisualizerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentLockVisualizerView 实例
MissionGauntletAgentLockVisualizerView missionGauntletAgentLockVisualizerView = ...;
missionGauntletAgentLockVisualizerView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletAgentLockVisualizerView view = ...;
```

## 参见

- [本区域目录](../)