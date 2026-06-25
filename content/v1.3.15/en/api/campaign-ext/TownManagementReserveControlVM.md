---
title: "TownManagementReserveControlVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownManagementReserveControlVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownManagementReserveControlVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementReserveControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs`

## Overview

`TownManagementReserveControlVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CurrentReserveAmount` | `public int CurrentReserveAmount { get; set; }` |
| `CurrentGivenAmount` | `public int CurrentGivenAmount { get; set; }` |
| `MaxReserveAmount` | `public int MaxReserveAmount { get; set; }` |
| `ReserveBonusText` | `public string ReserveBonusText { get; set; }` |
| `ReserveText` | `public string ReserveText { get; set; }` |
| `CurrentReserveText` | `public string CurrentReserveText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Executes the `confirm` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

## Usage Example

```csharp
var value = new TownManagementReserveControlVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)