---
title: "MissionGauntletMainAgentEquipmentControllerView"
description: "MissionGauntletMainAgentEquipmentControllerView 的自动生成类参考。"
---
# MissionGauntletMainAgentEquipmentControllerView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentEquipmentControllerView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletMainAgentEquipmentControllerView.cs`

## 概述

`MissionGauntletMainAgentEquipmentControllerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletMainAgentEquipmentControllerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 在 focus gained 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 在 focus lost 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnFocusLost(agent, focusableObject);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipmentControllerView 实例
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletMainAgentEquipmentControllerView view = ...;
```

## 参见

- [本区域目录](../)