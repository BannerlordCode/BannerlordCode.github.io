---
title: "MissionGauntletCategoryLoadManager"
description: "MissionGauntletCategoryLoadManager 的自动生成类参考。"
---
# MissionGauntletCategoryLoadManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCategoryLoadManager : MissionView, IMissionListener`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCategoryLoadManager.cs`

## 概述

`MissionGauntletCategoryLoadManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MissionGauntletCategoryLoadManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCategoryLoadManager 实例
MissionGauntletCategoryLoadManager missionGauntletCategoryLoadManager = ...;
missionGauntletCategoryLoadManager.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCategoryLoadManager 实例
MissionGauntletCategoryLoadManager missionGauntletCategoryLoadManager = ...;
missionGauntletCategoryLoadManager.OnMissionScreenFinalize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletCategoryLoadManager 实例
MissionGauntletCategoryLoadManager missionGauntletCategoryLoadManager = ...;
missionGauntletCategoryLoadManager.OnMissionTick(0);
```

## 使用示例

```csharp
var manager = MissionGauntletCategoryLoadManager.Current;
```

## 参见

- [本区域目录](../)