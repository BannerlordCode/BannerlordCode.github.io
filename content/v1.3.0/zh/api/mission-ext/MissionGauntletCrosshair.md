---
title: "MissionGauntletCrosshair"
description: "MissionGauntletCrosshair 的自动生成类参考。"
---
# MissionGauntletCrosshair

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCrosshair : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs`

## 概述

`MissionGauntletCrosshair` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCrosshair 实例
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCrosshair 实例
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCrosshair 实例
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnMissionScreenTick(0);
```

## 参见

- [本区域目录](../)