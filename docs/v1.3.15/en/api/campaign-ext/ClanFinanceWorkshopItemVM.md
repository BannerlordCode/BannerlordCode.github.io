<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceWorkshopItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceWorkshopItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanFinanceWorkshopItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)