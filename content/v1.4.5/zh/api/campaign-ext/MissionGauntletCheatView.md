---
title: "MissionGauntletCheatView"
description: "MissionGauntletCheatView 的自动生成类参考。"
---
# MissionGauntletCheatView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletCheatView.cs`

## 概述

`MissionGauntletCheatView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletCheatView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCheatView 实例
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.OnMissionScreenFinalize();
```

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**用途 / Purpose:** 读取并返回当前对象中 「is cheats available」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCheatView 实例
MissionGauntletCheatView missionGauntletCheatView = ...;
var result = missionGauntletCheatView.GetIsCheatsAvailable();
```

### InitializeScreen
`public override void InitializeScreen()`

**用途 / Purpose:** 为 「screen」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCheatView 实例
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.InitializeScreen();
```

### FinalizeScreen
`public override void FinalizeScreen()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCheatView 实例
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.FinalizeScreen();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCheatView 实例
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletCheatView view = ...;
```

## 参见

- [本区域目录](../)