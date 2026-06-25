---
title: "MissionCustomCameraView"
description: "MissionCustomCameraView 的自动生成类参考。"
---
# MissionCustomCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCustomCameraView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionCustomCameraView.cs`

## 概述

`MissionCustomCameraView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionCustomCameraView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCustomCameraView 实例
MissionCustomCameraView missionCustomCameraView = ...;
missionCustomCameraView.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCustomCameraView 实例
MissionCustomCameraView missionCustomCameraView = ...;
missionCustomCameraView.OnMissionTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionCustomCameraView view = ...;
```

## 参见

- [本区域目录](../)