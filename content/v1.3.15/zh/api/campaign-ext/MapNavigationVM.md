---
title: "MapNavigationVM"
description: "MapNavigationVM 的自动生成类参考。"
---
# MapNavigationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNavigationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs`

## 概述

`MapNavigationVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationItems` | `public MBBindingList<MapNavigationItemVM> NavigationItems { get; set; }` |
| `FinanceHint` | `public HintViewModel FinanceHint { get; set; }` |
| `EncyclopediaHint` | `public HintViewModel EncyclopediaHint { get; set; }` |
| `CenterCameraHint` | `public HintViewModel CenterCameraHint { get; set; }` |
| `CampHint` | `public HintViewModel CampHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.OnFinalize();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.Refresh();
```

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.Tick();
```

### ExecuteOpenQuests
`public void ExecuteOpenQuests()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open quests 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenQuests();
```

### ExecuteOpenInventory
`public void ExecuteOpenInventory()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open inventory 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenInventory();
```

### ExecuteOpenParty
`public void ExecuteOpenParty()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open party 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenParty();
```

### ExecuteOpenCharacterDeveloper
`public void ExecuteOpenCharacterDeveloper()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open character developer 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenCharacterDeveloper();
```

### ExecuteOpenKingdom
`public void ExecuteOpenKingdom()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open kingdom 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenKingdom();
```

### ExecuteOpenClan
`public void ExecuteOpenClan()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open clan 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenClan();
```

### ExecuteOpenEscapeMenu
`public void ExecuteOpenEscapeMenu()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open escape menu 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenEscapeMenu();
```

### ExecuteOpenMainHeroKingdomEncyclopedia
`public void ExecuteOpenMainHeroKingdomEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open main hero kingdom encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationVM 实例
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenMainHeroKingdomEncyclopedia();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.RefreshValues();
```

## 参见

- [本区域目录](../)