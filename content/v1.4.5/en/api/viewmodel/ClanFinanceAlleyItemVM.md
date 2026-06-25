---
title: "ClanFinanceAlleyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceAlleyItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinanceAlleyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceAlleyItemVM : ClanFinanceIncomeItemBaseVM`
**Base:** `ClanFinanceIncomeItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance/ClanFinanceAlleyItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteManageAlley
`public void ExecuteManageAlley()`

**Purpose:** Executes the `manage alley` operation or workflow.

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**Purpose:** Executes the `begin hero hint` operation or workflow.

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**Purpose:** Executes the `end hero hint` operation or workflow.

## Usage Example

```csharp
var value = new ClanFinanceAlleyItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)