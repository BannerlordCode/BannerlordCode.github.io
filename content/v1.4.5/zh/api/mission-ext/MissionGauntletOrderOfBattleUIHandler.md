---
title: "MissionGauntletOrderOfBattleUIHandler"
description: "MissionGauntletOrderOfBattleUIHandler 的自动生成类参考。"
---
# MissionGauntletOrderOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOrderOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs`

## 概述

`MissionGauntletOrderOfBattleUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletOrderOfBattleUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionScreenInitialize();
```

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** 判断当前对象是否处于 「ready」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
var result = missionGauntletOrderOfBattleUIHandler.IsReady();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionTick(0);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 在 「escape」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
var result = missionGauntletOrderOfBattleUIHandler.OnEscape();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 「photo mode activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 「photo mode deactivated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnPhotoModeDeactivated();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 「opening escape menu on focus change allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
var result = missionGauntletOrderOfBattleUIHandler.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOrderOfBattleUIHandler 实例
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnDeploymentFinished();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletOrderOfBattleUIHandler>();
```

## 参见

- [本区域目录](../)