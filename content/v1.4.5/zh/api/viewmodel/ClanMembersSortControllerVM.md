---
title: "ClanMembersSortControllerVM"
description: "ClanMembersSortControllerVM 的自动生成类参考。"
---
# ClanMembersSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanMembersSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanMembersSortControllerVM.cs`

## 概述

`ClanMembersSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAcending)`

**用途 / Purpose:** 为 「sort mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
var result = clanMembersSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
var result = clanMembersSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
var result = clanMembersSortControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.RefreshValues();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 「sort by name」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByLocation
`public void ExecuteSortByLocation()`

**用途 / Purpose:** 执行 「sort by location」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.ExecuteSortByLocation();
```

### ResetAllStates
`public void ResetAllStates()`

**用途 / Purpose:** 将 「all states」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ClanMembersSortControllerVM 实例
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.ResetAllStates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)