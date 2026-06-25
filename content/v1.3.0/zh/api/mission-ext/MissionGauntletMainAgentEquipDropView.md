---
title: "MissionGauntletMainAgentEquipDropView"
description: "MissionGauntletMainAgentEquipDropView 的自动生成类参考。"
---
# MissionGauntletMainAgentEquipDropView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentEquipDropView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipDropView.cs`

## 概述

`MissionGauntletMainAgentEquipDropView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletMainAgentEquipDropView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnMissionScreenTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 「photo mode activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 「photo mode deactivated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMainAgentEquipDropView 实例
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletMainAgentEquipDropView view = ...;
```

## 参见

- [本区域目录](../)