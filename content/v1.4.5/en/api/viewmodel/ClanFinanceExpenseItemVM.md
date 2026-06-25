---
title: "ClanFinanceExpenseItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceExpenseItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinanceExpenseItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceExpenseItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanFinanceExpenseItemVM.cs`

## Overview

`ClanFinanceExpenseItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new ClanFinanceExpenseItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)