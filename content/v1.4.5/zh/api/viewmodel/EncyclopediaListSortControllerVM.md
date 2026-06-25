---
title: "EncyclopediaListSortControllerVM"
description: "EncyclopediaListSortControllerVM 的自动生成类参考。"
---
# EncyclopediaListSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListSortControllerVM.cs`

## 概述

`EncyclopediaListSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SortSelection` | `public EncyclopediaListSelectorVM SortSelection { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `SortedValueLabelText` | `public string SortedValueLabelText { get; set; }` |
| `SortByLabel` | `public string SortByLabel { get; set; }` |
| `AlternativeSortState` | `public int AlternativeSortState { get; set; }` |
| `IsAlternativeSortVisible` | `public bool IsAlternativeSortVisible { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListSortControllerVM 实例
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListSortControllerVM 实例
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.OnFinalize();
```

### SetSortSelection
`public void SetSortSelection(int index)`

**用途 / Purpose:** **用途 / Purpose:** 为 sort selection 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListSortControllerVM 实例
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.SetSortSelection(0);
```

### ExecuteSwitchSortOrder
`public void ExecuteSwitchSortOrder()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch sort order 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListSortControllerVM 实例
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.ExecuteSwitchSortOrder();
```

### SetSortOrder
`public void SetSortOrder(bool isAscending)`

**用途 / Purpose:** **用途 / Purpose:** 为 sort order 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListSortControllerVM 实例
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.SetSortOrder(false);
```

### GetSortOrder
`public bool GetSortOrder()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sort order 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListSortControllerVM 实例
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
var result = encyclopediaListSortControllerVM.GetSortOrder();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.RefreshValues();
```

## 参见

- [本区域目录](../)