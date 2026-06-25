---
title: "MapTimeControlVM"
description: "MapTimeControlVM 的自动生成类参考。"
---
# MapTimeControlVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapTimeControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapTimeControlVM.cs`

## 概述

`MapTimeControlVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInBattleSimulation` | `public bool IsInBattleSimulation { get; set; }` |
| `IsInRecruitment` | `public bool IsInRecruitment { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; set; }` |
| `IsInTownManagement` | `public bool IsInTownManagement { get; set; }` |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage { get; set; }` |
| `IsInMap` | `public bool IsInMap { get; set; }` |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions { get; set; }` |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened { get; set; }` |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive { get; set; }` |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive { get; set; }` |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive { get; set; }` |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive { get; set; }` |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled { get; set; }` |
| `TimeOfDayHint` | `public BasicTooltipViewModel TimeOfDayHint { get; set; }` |
| `IsCurrentlyPausedOnMap` | `public bool IsCurrentlyPausedOnMap { get; set; }` |
| `IsCenterPanelEnabled` | `public bool IsCenterPanelEnabled { get; set; }` |
| `Time` | `public double Time { get; set; }` |
| `PausedText` | `public string PausedText { get; set; }` |
| `Date` | `public string Date { get; set; }` |
| `TimeFlowState` | `public int TimeFlowState { get; set; }` |
| `PauseHint` | `public BasicTooltipViewModel PauseHint { get; set; }` |
| `PlayHint` | `public BasicTooltipViewModel PlayHint { get; set; }` |
| `FastForwardHint` | `public BasicTooltipViewModel FastForwardHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapTimeControlVM 实例
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapTimeControlVM 实例
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.OnFinalize();
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapTimeControlVM 实例
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.Tick();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapTimeControlVM 实例
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.Refresh();
```

### ExecuteTimeControlChange
`public void ExecuteTimeControlChange(int selectedTimeSpeed)`

**用途 / Purpose:** 执行 time control change 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapTimeControlVM 实例
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.ExecuteTimeControlChange(0);
```

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**用途 / Purpose:** 执行 reset camera 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapTimeControlVM 实例
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.ExecuteResetCamera();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.RefreshValues();
```

## 参见

- [本区域目录](../)