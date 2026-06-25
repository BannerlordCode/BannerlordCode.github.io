---
title: "MissionItemContourControllerView"
description: "MissionItemContourControllerView 的自动生成类参考。"
---
# MissionItemContourControllerView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionItemContourControllerView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionItemContourControllerView.cs`

## 概述

`MissionItemContourControllerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionItemContourControllerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionItemContourControllerView 实例
MissionItemContourControllerView missionItemContourControllerView = ...;
missionItemContourControllerView.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus gained 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionItemContourControllerView 实例
MissionItemContourControllerView missionItemContourControllerView = ...;
missionItemContourControllerView.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus lost 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionItemContourControllerView 实例
MissionItemContourControllerView missionItemContourControllerView = ...;
missionItemContourControllerView.OnFocusLost(agent, focusableObject);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionItemContourControllerView view = ...;
```

## 参见

- [本区域目录](../)