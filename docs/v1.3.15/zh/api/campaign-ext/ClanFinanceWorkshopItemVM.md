<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinanceWorkshopItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceWorkshopItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanFinanceWorkshopItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### ExecuteToggleWarehouseUsage

```csharp
public void ExecuteToggleWarehouseUsage()
```

### ExecuteBeginWorkshopHint

```csharp
public void ExecuteBeginWorkshopHint()
```

### ExecuteEndHint

```csharp
public void ExecuteEndHint()
```

### OnStoreOutputInWarehousePercentageUpdated

```csharp
public void OnStoreOutputInWarehousePercentageUpdated(SelectorVM<WorkshopPercentageSelectorItemVM> selector)
```

### ExecuteManageWorkshop

```csharp
public void ExecuteManageWorkshop()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)