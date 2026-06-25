---
title: "ClanFinanceTownItemVM"
description: "Auto-generated class reference for ClanFinanceTownItemVM."
---
# ClanFinanceTownItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceTownItemVM : ClanFinanceIncomeItemBaseVM`
**Base:** `ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs`

## Overview

`ClanFinanceTownItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `IsUnderSiege` | `public bool IsUnderSiege { get; set; }` |
| `IsUnderRebellion` | `public bool IsUnderRebellion { get; set; }` |
| `IsUnderSiegeHint` | `public HintViewModel IsUnderSiegeHint { get; set; }` |
| `IsUnderRebellionHint` | `public HintViewModel IsUnderRebellionHint { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `GovernorHint` | `public HintViewModel GovernorHint { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ClanFinanceTownItemVM instance = ...;
```

## See Also

- [Area Index](../)