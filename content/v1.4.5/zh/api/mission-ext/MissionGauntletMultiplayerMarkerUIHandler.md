---
title: "MissionGauntletMultiplayerMarkerUIHandler"
description: "MissionGauntletMultiplayerMarkerUIHandler 的自动生成类参考。"
---
# MissionGauntletMultiplayerMarkerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerMarkerUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerMarkerUIHandler.cs`

## 概述

`MissionGauntletMultiplayerMarkerUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletMultiplayerMarkerUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerMarkerUIHandler 实例
MissionGauntletMultiplayerMarkerUIHandler missionGauntletMultiplayerMarkerUIHandler = ...;
missionGauntletMultiplayerMarkerUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerMarkerUIHandler 实例
MissionGauntletMultiplayerMarkerUIHandler missionGauntletMultiplayerMarkerUIHandler = ...;
missionGauntletMultiplayerMarkerUIHandler.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerMarkerUIHandler 实例
MissionGauntletMultiplayerMarkerUIHandler missionGauntletMultiplayerMarkerUIHandler = ...;
missionGauntletMultiplayerMarkerUIHandler.OnMissionScreenTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletMultiplayerMarkerUIHandler>();
```

## 参见

- [本区域目录](../)