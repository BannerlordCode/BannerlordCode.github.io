---
title: "MapBarVM"
description: "MapBarVM 的自动生成类参考。"
---
# MapBarVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs`

## 概述

`MapBarVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapInfo` | `public MapInfoVM MapInfo { get; set; }` |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl { get; set; }` |
| `MapNavigation` | `public MapNavigationVM MapNavigation { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |
| `IsInInfoMode` | `public bool IsInInfoMode { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanGatherArmy` | `public bool CanGatherArmy { get; set; }` |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint { get; set; }` |
| `IsCameraCentered` | `public bool IsCameraCentered { get; set; }` |
| `CurrentScreen` | `public string CurrentScreen { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |

## 主要方法

### Initialize
`public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts> getMapBarShortcuts, Action openArmyManagement)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MapBarVM 实例
MapBarVM mapBarVM = ...;
mapBarVM.Initialize(navigationHandler, mapStateHandler, getMapBarShortcuts, openArmyManagement);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapBarVM 实例
MapBarVM mapBarVM = ...;
mapBarVM.RefreshValues();
```

### OnRefresh
`public void OnRefresh()`

**用途 / Purpose:** 在 refresh 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapBarVM 实例
MapBarVM mapBarVM = ...;
mapBarVM.OnRefresh();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapBarVM 实例
MapBarVM mapBarVM = ...;
mapBarVM.Tick(0);
```

### ExecuteArmyManagement
`public void ExecuteArmyManagement()`

**用途 / Purpose:** 执行 army management 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapBarVM 实例
MapBarVM mapBarVM = ...;
mapBarVM.ExecuteArmyManagement();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapBarVM 实例
MapBarVM mapBarVM = ...;
mapBarVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapBarVM mapBarVM = ...;
mapBarVM.Initialize(navigationHandler, mapStateHandler, getMapBarShortcuts, openArmyManagement);
```

## 参见

- [本区域目录](../)