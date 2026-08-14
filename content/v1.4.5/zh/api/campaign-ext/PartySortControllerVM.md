---
title: "PartySortControllerVM"
description: "PartySortControllerVM 的自动生成类参考。"
---
# PartySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs`

## 概述

`PartySortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; set; }` |
| `IsCustomSort` | `public bool IsCustomSort { get; set; }` |
| `SortOptions` | `public SelectorVM<TroopSortSelectorItemVM> SortOptions { get; set; }` |

## 主要方法

### SelectSortType
`public void SelectSortType(PartyScreenLogic.TroopSortType sortType)`

**用途 / Purpose:** 调用 SelectSortType 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartySortControllerVM 实例
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.SelectSortType(sortType);
```

### SortWith
`public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)`

**用途 / Purpose:** 调用 SortWith 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartySortControllerVM 实例
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.SortWith(sortType, false);
```

### ExecuteToggleOrder
`public void ExecuteToggleOrder()`

**用途 / Purpose:** 执行 toggle order 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartySortControllerVM 实例
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.ExecuteToggleOrder();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.SelectSortType(sortType);
```

## 参见

- [本区域目录](../)