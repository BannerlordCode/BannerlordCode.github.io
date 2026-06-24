<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinanceExpenseItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinanceExpenseItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceExpenseItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanFinanceExpenseItemVM.cs`

## 概述

`ClanFinanceExpenseItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `WageLimitHint` | `public HintViewModel WageLimitHint { get; set; }` |
| `CurrentWageTooltip` | `public BasicTooltipViewModel CurrentWageTooltip { get; set; }` |
| `CurrentWageText` | `public string CurrentWageText { get; set; }` |
| `CurrentWageLimitText` | `public string CurrentWageLimitText { get; set; }` |
| `CurrentWageValueText` | `public string CurrentWageValueText { get; set; }` |
| `CurrentWageLimitValueText` | `public string CurrentWageLimitValueText { get; set; }` |
| `UnlimitedWageText` | `public string UnlimitedWageText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CurrentWage` | `public int CurrentWage { get; set; }` |
| `CurrentWageLimit` | `public int CurrentWageLimit { get; set; }` |
| `MinWage` | `public int MinWage { get; set; }` |
| `MaxWage` | `public int MaxWage { get; set; }` |
| `IsUnlimitedWage` | `public bool IsUnlimitedWage { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var value = new ClanFinanceExpenseItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)