---
title: "MissionGauntletBattleScore"
description: "MissionGauntletBattleScore 的自动生成类参考。"
---
# MissionGauntletBattleScore

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletBattleScore : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletBattleScore.cs`

## 概述

`MissionGauntletBattleScore` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 在 escape 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
var result = missionGauntletBattleScore.OnEscape();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.EarlyStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenTick(0);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnDeploymentFinished();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBattleScore 实例
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnPhotoModeDeactivated();
```

### ForceScoreboardToggle
`public static string ForceScoreboardToggle(List<string> args)`

**用途 / Purpose:** 调用 ForceScoreboardToggle 对应的操作。

```csharp
// 静态调用，不需要实例
MissionGauntletBattleScore.ForceScoreboardToggle(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenInitialize();
```

## 参见

- [本区域目录](../)