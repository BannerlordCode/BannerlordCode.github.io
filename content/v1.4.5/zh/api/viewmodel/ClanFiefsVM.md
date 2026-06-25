---
title: "ClanFiefsVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFiefsVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFiefsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanFiefsVM.cs`

## 概述

`ClanFiefsVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GovernorActionText` | `public string GovernorActionText { get; set; }` |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief { get; set; }` |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint { get; set; }` |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TaxText` | `public string TaxText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |
| `TownsText` | `public string TownsText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `NoFiefsText` | `public string NoFiefsText { get; set; }` |
| `NoGovernorText` | `public string NoGovernorText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Settlements` | `public MBBindingList<ClanSettlementItemVM> Settlements { get; set; }` |
| `Castles` | `public MBBindingList<ClanSettlementItemVM> Castles { get; set; }` |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief { get; set; }` |
| `SortController` | `public ClanFiefsSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshAllLists
`public void RefreshAllLists()`

**用途 / Purpose:** 刷新 `all lists` 的显示或缓存。

### SelectFief
`public void SelectFief(Settlement settlement)`

**用途 / Purpose:** 处理 `select fief` 相关逻辑。

### ExecuteAssignGovernor
`public void ExecuteAssignGovernor()`

**用途 / Purpose:** 执行 `assign governor` 操作或流程。

## 使用示例

```csharp
var value = new ClanFiefsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)