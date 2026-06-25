---
title: "MapSelectionGroupVM"
description: "MapSelectionGroupVM 的自动生成类参考。"
---
# MapSelectionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSelectionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/MapSelectionGroupVM.cs`

## 概述

`MapSelectionGroupVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedWallBreachedCount` | `public int SelectedWallBreachedCount { get; }` |
| `SelectedSceneLevel` | `public int SelectedSceneLevel { get; }` |
| `SelectedTimeOfDay` | `public int SelectedTimeOfDay { get; }` |
| `SelectedSeasonId` | `public string SelectedSeasonId { get; }` |
| `SelectedMap` | `public MapItemVM SelectedMap { get; }` |
| `MapSelection` | `public SelectorVM<MapItemVM> MapSelection { get; set; }` |
| `SceneLevelSelection` | `public SelectorVM<SceneLevelItemVM> SceneLevelSelection { get; set; }` |
| `WallHitpointSelection` | `public SelectorVM<WallHitpointItemVM> WallHitpointSelection { get; set; }` |
| `SeasonSelection` | `public SelectorVM<SeasonItemVM> SeasonSelection { get; set; }` |
| `TimeOfDaySelection` | `public SelectorVM<TimeOfDayItemVM> TimeOfDaySelection { get; set; }` |
| `IsCurrentMapSiege` | `public bool IsCurrentMapSiege { get; set; }` |
| `IsSallyOutSelected` | `public bool IsSallyOutSelected { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `MapText` | `public string MapText { get; set; }` |
| `SeasonText` | `public string SeasonText { get; set; }` |
| `TimeOfDayText` | `public string TimeOfDayText { get; set; }` |
| `SceneLevelText` | `public string SceneLevelText { get; set; }` |
| `WallHitpointsText` | `public string WallHitpointsText { get; set; }` |
| `AttackerSiegeMachinesText` | `public string AttackerSiegeMachinesText { get; set; }` |
| `DefenderSiegeMachinesText` | `public string DefenderSiegeMachinesText { get; set; }` |
| `SalloutText` | `public string SalloutText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSelectionGroupVM 实例
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.RefreshValues();
```

### ExecuteSallyOutChange
`public void ExecuteSallyOutChange()`

**用途 / Purpose:** 执行 「sally out change」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSelectionGroupVM 实例
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.ExecuteSallyOutChange();
```

### OnGameTypeChange
`public void OnGameTypeChange(string gameTypeStringId)`

**用途 / Purpose:** 在 「game type change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapSelectionGroupVM 实例
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.OnGameTypeChange("example");
```

### RandomizeAll
`public void RandomizeAll()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapSelectionGroupVM 实例
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.RandomizeAll();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)