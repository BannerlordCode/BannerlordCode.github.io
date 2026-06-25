---
title: "SmeltingSortControllerVM"
description: "SmeltingSortControllerVM 的自动生成类参考。"
---
# SmeltingSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs`

## 概述

`SmeltingSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `YieldState` | `public int YieldState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsYieldSelected` | `public bool IsYieldSelected { get; set; }` |
| `SortTypeText` | `public string SortTypeText { get; set; }` |
| `SortNameText` | `public string SortNameText { get; set; }` |
| `SortYieldText` | `public string SortYieldText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.RefreshValues();
```

### SetListToControl
`public void SetListToControl(MBBindingList<SmeltingItemVM> listToControl)`

**用途 / Purpose:** 为 「list to control」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SetListToControl(listToControl);
```

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 获取或更新 「sort by current state」 的状态。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SortByCurrentState();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 「sort by name」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByYield
`public void ExecuteSortByYield()`

**用途 / Purpose:** 执行 「sort by yield」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.ExecuteSortByYield();
```

### ExecuteSortByType
`public void ExecuteSortByType()`

**用途 / Purpose:** 执行 「sort by type」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.ExecuteSortByType();
```

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 为 「sort mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SmeltingSortControllerVM 实例
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.RefreshValues();
```

## 参见

- [本区域目录](../)