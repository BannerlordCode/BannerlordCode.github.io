---
title: "MissionGauntletPhotoMode"
description: "MissionGauntletPhotoMode 的自动生成类参考。"
---
# MissionGauntletPhotoMode

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletPhotoMode : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletPhotoMode.cs`

## 概述

`MissionGauntletPhotoMode` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletPhotoMode 实例
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletPhotoMode 实例
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenTick(0);
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 在 「escape」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletPhotoMode 实例
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
var result = missionGauntletPhotoMode.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 「opening escape menu on focus change allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionGauntletPhotoMode 实例
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
var result = missionGauntletPhotoMode.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletPhotoMode 实例
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenInitialize();
```

## 参见

- [本区域目录](../)