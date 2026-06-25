---
title: "GauntletMainAgentDetectionView"
description: "GauntletMainAgentDetectionView 的自动生成类参考。"
---
# GauntletMainAgentDetectionView

**Namespace:** Sandobx.GauntletUI.Missions
**Module:** Sandobx.GauntletUI
**Type:** `public class GauntletMainAgentDetectionView : MissionMainAgentDetectionView`
**Base:** `MissionMainAgentDetectionView`
**File:** `Modules.SandBox/SandBox.GauntletUI/Sandobx.GauntletUI.Missions/GauntletMainAgentDetectionView.cs`

## 概述

`GauntletMainAgentDetectionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMainAgentDetectionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletMainAgentDetectionView 实例
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletMainAgentDetectionView 实例
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletMainAgentDetectionView 实例
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletMainAgentDetectionView 实例
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletMainAgentDetectionView view = ...;
```

## 参见

- [本区域目录](../)