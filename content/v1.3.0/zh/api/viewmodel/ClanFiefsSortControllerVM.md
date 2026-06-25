---
title: "ClanFiefsSortControllerVM"
description: "ClanFiefsSortControllerVM 的自动生成类参考。"
---
# ClanFiefsSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs`

## 概述

`ClanFiefsSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `GovernorState` | `public int GovernorState { get; set; }` |
| `ProfitState` | `public int ProfitState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsGovernorSelected` | `public bool IsGovernorSelected { get; set; }` |
| `IsProfitSelected` | `public bool IsProfitSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.RefreshValues();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sort by name 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByGovernor
`public void ExecuteSortByGovernor()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sort by governor 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ExecuteSortByGovernor();
```

### ExecuteSortByProfit
`public void ExecuteSortByProfit()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sort by profit 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ExecuteSortByProfit();
```

### ResetAllStates
`public void ResetAllStates()`

**用途 / Purpose:** **用途 / Purpose:** 将 all states 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ResetAllStates();
```

### SetSortMode
`public void SetSortMode(bool isAcending)`

**用途 / Purpose:** **用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanFiefsSortControllerVM 实例
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.RefreshValues();
```

## 参见

- [本区域目录](../)