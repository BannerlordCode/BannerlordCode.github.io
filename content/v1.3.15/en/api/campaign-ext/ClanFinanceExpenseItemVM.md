---
title: "ClanFinanceExpenseItemVM"
description: "Auto-generated class reference for ClanFinanceExpenseItemVM."
---
# ClanFinanceExpenseItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceExpenseItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanFinanceExpenseItemVM from the subsystem API first
ClanFinanceExpenseItemVM clanFinanceExpenseItemVM = ...;
clanFinanceExpenseItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanFinanceExpenseItemVM clanFinanceExpenseItemVM = ...;
clanFinanceExpenseItemVM.RefreshValues();
```

## See Also

- [Area Index](../)