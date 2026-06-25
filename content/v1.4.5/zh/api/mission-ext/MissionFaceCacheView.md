---
title: "MissionFaceCacheView"
description: "MissionFaceCacheView 的自动生成类参考。"
---
# MissionFaceCacheView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFaceCacheView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionFaceCacheView.cs`

## 概述

`MissionFaceCacheView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionFaceCacheView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 「pre mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFaceCacheView 实例
MissionFaceCacheView missionFaceCacheView = ...;
missionFaceCacheView.OnPreMissionTick(0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFaceCacheView 实例
MissionFaceCacheView missionFaceCacheView = ...;
missionFaceCacheView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFaceCacheView 实例
MissionFaceCacheView missionFaceCacheView = ...;
missionFaceCacheView.OnMissionScreenFinalize();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionFaceCacheView view = ...;
```

## 参见

- [本区域目录](../)