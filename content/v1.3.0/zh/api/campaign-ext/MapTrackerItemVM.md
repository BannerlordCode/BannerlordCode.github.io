---
title: "MapTrackerItemVM"
description: "MapTrackerItemVM 的自动生成类参考。"
---
# MapTrackerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs`

## 概述

`MapTrackerItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `CanToggleTrack` | `public bool CanToggleTrack { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `PartyPosition` | `public Vec2 PartyPosition { get; set; }` |
| `FactionVisual` | `public BannerImageIdentifierVM FactionVisual { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |

## 主要方法

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 重新计算并更新 「properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.UpdateProperties();
```

### UpdatePosition
`public void UpdatePosition(float screenX, float screenY, float screenW)`

**用途 / Purpose:** 重新计算并更新 「position」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.UpdatePosition(0, 0, 0);
```

### ExecuteToggleTrack
`public void ExecuteToggleTrack()`

**用途 / Purpose:** 执行 「toggle track」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteToggleTrack();
```

### ExecuteGoToPosition
`public void ExecuteGoToPosition()`

**用途 / Purpose:** 执行 「go to position」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteGoToPosition();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 「show tooltip」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 「hide tooltip」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteHideTooltip();
```

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 使 「binding」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapTrackerItemVM 实例
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.RefreshBinding();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapTrackerItemVM instance = ...;
```

## 参见

- [本区域目录](../)