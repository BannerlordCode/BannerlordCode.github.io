---
title: "MissionGauntletSingleplayerOrderUIHandler"
description: "MissionGauntletSingleplayerOrderUIHandler 的自动生成类参考。"
---
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**Base:** `GauntletOrderUIHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`

## 概述

`MissionGauntletSingleplayerOrderUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletSingleplayerOrderUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |
| `IsDeployment` | `public override bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public override bool IsSiegeDeployment { get; }` |

## 主要方法

### OnConversationBegin
`public override void OnConversationBegin()`

**用途 / Purpose:** **用途 / Purpose:** 在 conversation begin 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnConversationBegin();
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnMissionScreenFinalize();
```

### OnAutoDeploy
`public void OnAutoDeploy()`

**用途 / Purpose:** **用途 / Purpose:** 在 auto deploy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnAutoDeploy();
```

### OnBeginMission
`public void OnBeginMission()`

**用途 / Purpose:** **用途 / Purpose:** 在 begin mission 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnBeginMission();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public override void OnAfterDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 after deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnAfterDeploymentFinished();
```

### ClearFormationSelection
`public void ClearFormationSelection()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的formation selection。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.ClearFormationSelection();
```

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**用途 / Purpose:** **用途 / Purpose:** 在 filters set 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerOrderUIHandler 实例
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnFiltersSet(filterData);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletSingleplayerOrderUIHandler>();
```

## 参见

- [本区域目录](../)