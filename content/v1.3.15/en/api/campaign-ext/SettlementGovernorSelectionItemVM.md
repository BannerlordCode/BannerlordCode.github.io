---
title: "SettlementGovernorSelectionItemVM"
description: "Auto-generated class reference for SettlementGovernorSelectionItemVM."
---
# SettlementGovernorSelectionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementGovernorSelectionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs`

## Overview

`SettlementGovernorSelectionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Governor` | `public Hero Governor { get; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `GovernorHint` | `public BasicTooltipViewModel GovernorHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SettlementGovernorSelectionItemVM from the subsystem API first
SettlementGovernorSelectionItemVM settlementGovernorSelectionItemVM = ...;
settlementGovernorSelectionItemVM.RefreshValues();
```

### OnSelection
`public void OnSelection()`

**Purpose:** Invoked when the selection event is raised.

```csharp
// Obtain an instance of SettlementGovernorSelectionItemVM from the subsystem API first
SettlementGovernorSelectionItemVM settlementGovernorSelectionItemVM = ...;
settlementGovernorSelectionItemVM.OnSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementGovernorSelectionItemVM settlementGovernorSelectionItemVM = ...;
settlementGovernorSelectionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)