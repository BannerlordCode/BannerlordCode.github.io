<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanIncomeVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanIncomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanIncomeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs`

## 概述

`ClanIncomeVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CurrentSelectedAlley` | `public ClanFinanceAlleyItemVM CurrentSelectedAlley { get; set; }` |
| `CurrentSelectedIncome` | `public ClanFinanceWorkshopItemVM CurrentSelectedIncome { get; set; }` |
| `CurrentSelectedSupporterGroup` | `public ClanSupporterGroupVM CurrentSelectedSupporterGroup { get; set; }` |
| `IsAnyValidAlleySelected` | `public bool IsAnyValidAlleySelected { get; set; }` |
| `IsAnyValidIncomeSelected` | `public bool IsAnyValidIncomeSelected { get; set; }` |
| `IsAnyValidSupporterSelected` | `public bool IsAnyValidSupporterSelected { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `WorkshopText` | `public string WorkshopText { get; set; }` |
| `SupportersText` | `public string SupportersText { get; set; }` |
| `AlleysText` | `public string AlleysText { get; set; }` |
| `NoAdditionalIncomesText` | `public string NoAdditionalIncomesText { get; set; }` |
| `Incomes` | `public MBBindingList<ClanFinanceWorkshopItemVM> Incomes { get; set; }` |
| `SupporterGroups` | `public MBBindingList<ClanSupporterGroupVM> SupporterGroups { get; set; }` |
| `Alleys` | `public MBBindingList<ClanFinanceAlleyItemVM> Alleys { get; set; }` |
| `SortController` | `public ClanIncomeSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshList
`public void RefreshList()`

**用途 / Purpose:** 刷新 `list` 的显示或缓存。

### SelectWorkshop
`public void SelectWorkshop(Workshop workshop)`

**用途 / Purpose:** 处理 `select workshop` 相关逻辑。

### SelectAlley
`public void SelectAlley(Alley alley)`

**用途 / Purpose:** 处理 `select alley` 相关逻辑。

### RefreshTotalIncome
`public void RefreshTotalIncome()`

**用途 / Purpose:** 刷新 `total income` 的显示或缓存。

### OnRefresh
`public void OnRefresh()`

**用途 / Purpose:** 当 `refresh` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ClanIncomeVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)