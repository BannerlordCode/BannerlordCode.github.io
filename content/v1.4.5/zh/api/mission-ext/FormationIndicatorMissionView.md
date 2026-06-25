---
title: "FormationIndicatorMissionView"
description: "FormationIndicatorMissionView 的自动生成类参考。"
---
# FormationIndicatorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationIndicatorMissionView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/FormationIndicatorMissionView.cs`

## 概述

`FormationIndicatorMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `FormationIndicatorMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**用途 / Purpose:** 根据当前状态判定「indicator state」的结果。

```csharp
// 先通过子系统 API 拿到 FormationIndicatorMissionView 实例
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.DetermineIndicatorState(0, position);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FormationIndicatorMissionView 实例
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FormationIndicatorMissionView 实例
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
FormationIndicatorMissionView view = ...;
```

## 参见

- [本区域目录](../)