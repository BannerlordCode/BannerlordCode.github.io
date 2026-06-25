---
title: "PartySortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartySortControllerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs`

## Overview

`PartySortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; set; }` |
| `IsCustomSort` | `public bool IsCustomSort { get; set; }` |
| `SortOptions` | `public SelectorVM<TroopSortSelectorItemVM> SortOptions { get; set; }` |

## Key Methods

### SelectSortType
`public void SelectSortType(PartyScreenLogic.TroopSortType sortType)`

**Purpose:** Handles logic related to `select sort type`.

### SortWith
`public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)`

**Purpose:** Handles logic related to `sort with`.

### ExecuteToggleOrder
`public void ExecuteToggleOrder()`

**Purpose:** Executes the `toggle order` operation or workflow.

## Usage Example

```csharp
var value = new PartySortControllerVM();
value.SelectSortType(sortType);
```

## See Also

- [Complete Class Catalog](../catalog)