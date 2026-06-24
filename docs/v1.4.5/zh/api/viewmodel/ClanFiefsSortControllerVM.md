<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFiefsSortControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFiefsSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanFiefsSortControllerVM.cs`

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

### SetSortMode
`public void SetSortMode(bool isAcending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 `sort by name` 操作或流程。

### ExecuteSortByGovernor
`public void ExecuteSortByGovernor()`

**用途 / Purpose:** 执行 `sort by governor` 操作或流程。

### ExecuteSortByProfit
`public void ExecuteSortByProfit()`

**用途 / Purpose:** 执行 `sort by profit` 操作或流程。

### ResetAllStates
`public void ResetAllStates()`

**用途 / Purpose:** 将 `all states` 重置为初始状态。

## 使用示例

```csharp
var value = new ClanFiefsSortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)