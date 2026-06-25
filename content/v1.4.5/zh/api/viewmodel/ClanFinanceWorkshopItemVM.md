---
title: "ClanFinanceWorkshopItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinanceWorkshopItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinanceWorkshopItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceWorkshopItemVM : ClanFinanceIncomeItemBaseVM`
**Base:** `ClanFinanceIncomeItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance/ClanFinanceWorkshopItemVM.cs`

## 概述

`ClanFinanceWorkshopItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Workshop` | `public Workshop Workshop { get; }` |
| `UseWarehouseAsInputHint` | `public HintViewModel UseWarehouseAsInputHint { get; set; }` |
| `StoreOutputPercentageHint` | `public HintViewModel StoreOutputPercentageHint { get; set; }` |
| `ManageWorkshopHint` | `public HintViewModel ManageWorkshopHint { get; set; }` |
| `InputWarehouseCountsTooltip` | `public BasicTooltipViewModel InputWarehouseCountsTooltip { get; set; }` |
| `OutputWarehouseCountsTooltip` | `public BasicTooltipViewModel OutputWarehouseCountsTooltip { get; set; }` |
| `WorkshopTypeId` | `public string WorkshopTypeId { get; set; }` |
| `InputsText` | `public string InputsText { get; set; }` |
| `OutputsText` | `public string OutputsText { get; set; }` |
| `InputProducts` | `public string InputProducts { get; set; }` |
| `OutputProducts` | `public string OutputProducts { get; set; }` |
| `UseWarehouseAsInputText` | `public string UseWarehouseAsInputText { get; set; }` |
| `StoreOutputPercentageText` | `public string StoreOutputPercentageText { get; set; }` |
| `WarehouseCapacityText` | `public string WarehouseCapacityText { get; set; }` |
| `WarehouseCapacityValue` | `public string WarehouseCapacityValue { get; set; }` |
| `ReceiveInputFromWarehouse` | `public bool ReceiveInputFromWarehouse { get; set; }` |
| `WarehouseInputAmount` | `public int WarehouseInputAmount { get; set; }` |
| `WarehouseOutputAmount` | `public int WarehouseOutputAmount { get; set; }` |
| `WarehousePercentageSelector` | `public SelectorVM<WorkshopPercentageSelectorItemVM> WarehousePercentageSelector { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteToggleWarehouseUsage
`public void ExecuteToggleWarehouseUsage()`

**用途 / Purpose:** 执行 `toggle warehouse usage` 操作或流程。

### ExecuteBeginWorkshopHint
`public void ExecuteBeginWorkshopHint()`

**用途 / Purpose:** 执行 `begin workshop hint` 操作或流程。

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 执行 `end hint` 操作或流程。

### OnStoreOutputInWarehousePercentageUpdated
`public void OnStoreOutputInWarehousePercentageUpdated(SelectorVM<WorkshopPercentageSelectorItemVM> selector)`

**用途 / Purpose:** 当 `store output in warehouse percentage updated` 事件触发时调用此方法。

### ExecuteManageWorkshop
`public void ExecuteManageWorkshop()`

**用途 / Purpose:** 执行 `manage workshop` 操作或流程。

## 使用示例

```csharp
var value = new ClanFinanceWorkshopItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)