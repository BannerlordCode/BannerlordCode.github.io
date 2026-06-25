---
title: "SettlementGovernorSelectionVM"
description: "Auto-generated class reference for SettlementGovernorSelectionVM."
---
# SettlementGovernorSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementGovernorSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionVM.cs`

## Overview

`SettlementGovernorSelectionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AvailableGovernors` | `public MBBindingList<SettlementGovernorSelectionItemVM> AvailableGovernors { get; set; }` |
| `CurrentGovernorIndex` | `public int CurrentGovernorIndex { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SettlementGovernorSelectionVM from the subsystem API first
SettlementGovernorSelectionVM settlementGovernorSelectionVM = ...;
settlementGovernorSelectionVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementGovernorSelectionVM settlementGovernorSelectionVM = ...;
settlementGovernorSelectionVM.RefreshValues();
```

## See Also

- [Area Index](../)