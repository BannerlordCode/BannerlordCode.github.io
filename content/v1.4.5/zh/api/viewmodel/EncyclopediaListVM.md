---
title: "EncyclopediaListVM"
description: "EncyclopediaListVM 的自动生成类参考。"
---
# EncyclopediaListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListVM.cs`

## 概述

`EncyclopediaListVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmptyListText` | `public string EmptyListText { get; set; }` |
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `Items` | `public override MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `SortController` | `public override EncyclopediaListSortControllerVM SortController { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsFilterHighlightEnabled` | `public bool IsFilterHighlightEnabled { get; set; }` |
| `FilterGroups` | `public override MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListVM 实例
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListVM 实例
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.OnFinalize();
```

### GetName
`public override string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListVM 实例
EncyclopediaListVM encyclopediaListVM = ...;
var result = encyclopediaListVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** 读取并返回当前对象中 navigation bar u r l 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListVM 实例
EncyclopediaListVM encyclopediaListVM = ...;
var result = encyclopediaListVM.GetNavigationBarURL();
```

### CopyFiltersFrom
`public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**用途 / Purpose:** 把当前对象的filters from状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListVM 实例
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.CopyFiltersFrom(dictionary<EncyclopediaFilterItem, false);
```

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListVM 实例
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.RefreshValues();
```

## 参见

- [本区域目录](../)