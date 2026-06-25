---
title: "MissionSoundParametersView"
description: "MissionSoundParametersView 的自动生成类参考。"
---
# MissionSoundParametersView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSoundParametersView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSoundParametersView.cs`

## 概述

`MissionSoundParametersView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionSoundParametersView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionSoundParametersView 实例
MissionSoundParametersView missionSoundParametersView = ...;
missionSoundParametersView.EarlyStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSoundParametersView 实例
MissionSoundParametersView missionSoundParametersView = ...;
missionSoundParametersView.OnMissionScreenFinalize();
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 在 「mission mode change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSoundParametersView 实例
MissionSoundParametersView missionSoundParametersView = ...;
missionSoundParametersView.OnMissionModeChange(oldMissionMode, false);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionSoundParametersView view = ...;
```

## 参见

- [本区域目录](../)