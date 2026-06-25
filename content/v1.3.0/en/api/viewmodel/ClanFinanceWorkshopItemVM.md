---
title: "ClanFinanceWorkshopItemVM"
description: "Auto-generated class reference for ClanFinanceWorkshopItemVM."
---
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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanFinanceWorkshopItemVM from the subsystem API first
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.RefreshValues();
```

### ExecuteToggleWarehouseUsage
`public void ExecuteToggleWarehouseUsage()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with toggle warehouse usage.

```csharp
// Obtain an instance of ClanFinanceWorkshopItemVM from the subsystem API first
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.ExecuteToggleWarehouseUsage();
```

### ExecuteBeginWorkshopHint
`public void ExecuteBeginWorkshopHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with begin workshop hint.

```csharp
// Obtain an instance of ClanFinanceWorkshopItemVM from the subsystem API first
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.ExecuteBeginWorkshopHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of ClanFinanceWorkshopItemVM from the subsystem API first
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.ExecuteEndHint();
```

### OnStoreOutputInWarehousePercentageUpdated
`public void OnStoreOutputInWarehousePercentageUpdated(SelectorVM<WorkshopPercentageSelectorItemVM> selector)`

**Purpose:** **Purpose:** Invoked when the store output in warehouse percentage updated event is raised.

```csharp
// Obtain an instance of ClanFinanceWorkshopItemVM from the subsystem API first
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.OnStoreOutputInWarehousePercentageUpdated(selector);
```

### ExecuteManageWorkshop
`public void ExecuteManageWorkshop()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with manage workshop.

```csharp
// Obtain an instance of ClanFinanceWorkshopItemVM from the subsystem API first
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.ExecuteManageWorkshop();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanFinanceWorkshopItemVM clanFinanceWorkshopItemVM = ...;
clanFinanceWorkshopItemVM.RefreshValues();
```

## See Also

- [Area Index](../)