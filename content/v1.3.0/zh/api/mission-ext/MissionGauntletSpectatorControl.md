---
title: "MissionGauntletSpectatorControl"
description: "MissionGauntletSpectatorControl 的自动生成类参考。"
---
# MissionGauntletSpectatorControl

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSpectatorControl : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSpectatorControl.cs`

## 概述

`MissionGauntletSpectatorControl` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSpectatorControl 实例
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSpectatorControl 实例
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.OnMissionTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletSpectatorControl 实例
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.OnMissionScreenFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.EarlyStart();
```

## 参见

- [本区域目录](../)