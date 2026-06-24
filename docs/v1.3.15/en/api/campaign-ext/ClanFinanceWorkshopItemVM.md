<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceWorkshopItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceWorkshopItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceWorkshopItemVM : ClanFinanceIncomeItemBaseVM`
**Base:** `ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs`

## Overview

`ClanFinanceWorkshopItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteToggleWarehouseUsage
`public void ExecuteToggleWarehouseUsage()`

**Purpose:** Executes the `toggle warehouse usage` operation or workflow.

### ExecuteBeginWorkshopHint
`public void ExecuteBeginWorkshopHint()`

**Purpose:** Executes the `begin workshop hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### OnStoreOutputInWarehousePercentageUpdated
`public void OnStoreOutputInWarehousePercentageUpdated(SelectorVM<WorkshopPercentageSelectorItemVM> selector)`

**Purpose:** Called when the `store output in warehouse percentage updated` event is raised.

### ExecuteManageWorkshop
`public void ExecuteManageWorkshop()`

**Purpose:** Executes the `manage workshop` operation or workflow.

## Usage Example

```csharp
var value = new ClanFinanceWorkshopItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)