---
title: "MissionCheatView"
description: "MissionCheatView 的自动生成类参考。"
---
# MissionCheatView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionCheatView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCheatView.cs`

## 概述

`MissionCheatView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionCheatView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIsCheatsAvailable
`public abstract bool GetIsCheatsAvailable()`

**用途 / Purpose:** 读取并返回当前对象中 is cheats available 的结果。

```csharp
// 先通过子系统 API 拿到 MissionCheatView 实例
MissionCheatView missionCheatView = ...;
var result = missionCheatView.GetIsCheatsAvailable();
```

### InitializeScreen
`public abstract void InitializeScreen()`

**用途 / Purpose:** 为 screen 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionCheatView 实例
MissionCheatView missionCheatView = ...;
missionCheatView.InitializeScreen();
```

### FinalizeScreen
`public abstract void FinalizeScreen()`

**用途 / Purpose:** 调用 FinalizeScreen 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionCheatView 实例
MissionCheatView missionCheatView = ...;
missionCheatView.FinalizeScreen();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionCheatView instance = ...;
```

## 参见

- [本区域目录](../)