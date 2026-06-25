---
title: "ClanFinanceAlleyItemVM"
description: "Auto-generated class reference for ClanFinanceAlleyItemVM."
---
# ClanFinanceAlleyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceAlleyItemVM : ClanFinanceIncomeItemBaseVM`
**Base:** `ClanFinanceIncomeItemBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance/ClanFinanceAlleyItemVM.cs`

## Overview

`ClanFinanceAlleyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ManageAlleyHint` | `public HintViewModel ManageAlleyHint { get; set; }` |
| `OwnerVisual` | `public CharacterImageIdentifierVM OwnerVisual { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `IncomeTextWithVisual` | `public string IncomeTextWithVisual { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanFinanceAlleyItemVM from the subsystem API first
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.RefreshValues();
```

### ExecuteManageAlley
`public void ExecuteManageAlley()`

**Purpose:** Runs the operation or workflow associated with `manage alley`.

```csharp
// Obtain an instance of ClanFinanceAlleyItemVM from the subsystem API first
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.ExecuteManageAlley();
```

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**Purpose:** Runs the operation or workflow associated with `begin hero hint`.

```csharp
// Obtain an instance of ClanFinanceAlleyItemVM from the subsystem API first
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.ExecuteBeginHeroHint();
```

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**Purpose:** Runs the operation or workflow associated with `end hero hint`.

```csharp
// Obtain an instance of ClanFinanceAlleyItemVM from the subsystem API first
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.ExecuteEndHeroHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.RefreshValues();
```

## See Also

- [Area Index](../)