---
title: "MissionGauntletSingleplayerEscapeMenu"
description: "MissionGauntletSingleplayerEscapeMenu 的自动生成类参考。"
---
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**Base:** `MissionGauntletEscapeMenuBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`

## 概述

`MissionGauntletSingleplayerEscapeMenu` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerEscapeMenu 实例
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerEscapeMenu 实例
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnMissionScreenFinalize();
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus change on game window 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerEscapeMenu 实例
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnFocusChangeOnGameWindow(false);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 scene rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSingleplayerEscapeMenu 实例
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnSceneRenderingStarted();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnMissionScreenInitialize();
```

## 参见

- [本区域目录](../)