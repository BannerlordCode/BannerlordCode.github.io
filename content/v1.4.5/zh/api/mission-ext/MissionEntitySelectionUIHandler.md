---
title: "MissionEntitySelectionUIHandler"
description: "MissionEntitySelectionUIHandler 的自动生成类参考。"
---
# MissionEntitySelectionUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEntitySelectionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionEntitySelectionUIHandler.cs`

## 概述

`MissionEntitySelectionUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionEntitySelectionUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionEntitySelectionUIHandler 实例
MissionEntitySelectionUIHandler missionEntitySelectionUIHandler = ...;
missionEntitySelectionUIHandler.OnMissionScreenTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionEntitySelectionUIHandler 实例
MissionEntitySelectionUIHandler missionEntitySelectionUIHandler = ...;
missionEntitySelectionUIHandler.OnRemoveBehavior();
```

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「debug」的状态。

```csharp
// 先通过子系统 API 拿到 MissionEntitySelectionUIHandler 实例
MissionEntitySelectionUIHandler missionEntitySelectionUIHandler = ...;
missionEntitySelectionUIHandler.TickDebug();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionEntitySelectionUIHandler>();
```

## 参见

- [本区域目录](../)