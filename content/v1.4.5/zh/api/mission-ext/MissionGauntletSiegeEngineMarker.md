---
title: "MissionGauntletSiegeEngineMarker"
description: "MissionGauntletSiegeEngineMarker 的自动生成类参考。"
---
# MissionGauntletSiegeEngineMarker

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSiegeEngineMarker : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSiegeEngineMarker.cs`

## 概述

`MissionGauntletSiegeEngineMarker` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSiegeEngineMarker 实例
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnDeploymentFinished();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSiegeEngineMarker 实例
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSiegeEngineMarker 实例
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSiegeEngineMarker 实例
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnDeploymentFinished();
```

## 参见

- [本区域目录](../)