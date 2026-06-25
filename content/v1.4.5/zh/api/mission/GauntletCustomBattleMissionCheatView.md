---
title: "GauntletCustomBattleMissionCheatView"
description: "GauntletCustomBattleMissionCheatView 的自动生成类参考。"
---
# GauntletCustomBattleMissionCheatView

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.Views
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class GauntletCustomBattleMissionCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.Views/GauntletCustomBattleMissionCheatView.cs`

## 概述

`GauntletCustomBattleMissionCheatView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletCustomBattleMissionCheatView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeScreen
`public override void InitializeScreen()`

**用途 / Purpose:** 为 「screen」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GauntletCustomBattleMissionCheatView 实例
GauntletCustomBattleMissionCheatView gauntletCustomBattleMissionCheatView = ...;
gauntletCustomBattleMissionCheatView.InitializeScreen();
```

### FinalizeScreen
`public override void FinalizeScreen()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletCustomBattleMissionCheatView 实例
GauntletCustomBattleMissionCheatView gauntletCustomBattleMissionCheatView = ...;
gauntletCustomBattleMissionCheatView.FinalizeScreen();
```

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**用途 / Purpose:** 读取并返回当前对象中 「is cheats available」 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletCustomBattleMissionCheatView 实例
GauntletCustomBattleMissionCheatView gauntletCustomBattleMissionCheatView = ...;
var result = gauntletCustomBattleMissionCheatView.GetIsCheatsAvailable();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletCustomBattleMissionCheatView view = ...;
```

## 参见

- [本区域目录](../)